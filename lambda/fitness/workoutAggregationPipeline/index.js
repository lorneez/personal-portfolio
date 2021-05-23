'use strict'
const AWS = require('aws-sdk');

AWS.config.update({ region: "us-west-1" });

// Query String Parameters:
// LogType
// Location
// Type
// RangeDuration
// RangeValue
// BucketDuration

exports.handler = async (event, context) => {
    const ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" }); // instance of DynamoDB
    const documentClient = new AWS.DynamoDB.DocumentClient({ region: "us-west-1" }); // Document client to simulate more traditional JSON syntax

    let responseBody = "";
    let statusCode = 0;
    let scanResults = [];

    const LogType = event["queryStringParameters"]['LogType'];
    // const LogType = "Meal";

    const params = {
        TableName: "Fitness",
    };

    try {
        const data = await documentClient.scan(params).promise();
        data.Items.forEach((item) => scanResults.push(item));
        statusCode = 200;

        // TODO: insert filtering code
        // Log Type filter
        if(LogType !== "") {
            const tempArr = scanResults.filter((workout) => {
                return workout.LogType === LogType;
            })
            scanResults = tempArr;
        }
        // GYM: Types contains, Location
        if(LogType === "Gym") {
            const Location = event["queryStringParameters"]['Location'];
            if(Location !== "") {
                const tempArr = scanResults.filter((exercise) => {
                    return exercise.Gym.Location === Location;
                })
                scanResults = tempArr;
            }
            const Type = event["queryStringParameters"]['Type'];
            if(Type !== "") {
                const tempArr = scanResults.filter((exercise) => {
                    return exercise.Gym.Types.includes(Type);
                })
                scanResults = tempArr;
            }
        }
        // MEAL: Type
        if(LogType === "Meal") {
            const Type = event["queryStringParameters"]['Type'];
            // const Type = "";
            if(Type !== "") {
                const tempArr = scanResults.filter((meal) => {
                    return meal.Meal.Type === Type;
                })
                scanResults = tempArr;
            }
        }

        // Date range: Start End
        // This has to be a Day range (Monday - Thursday). Not by hours or other durations
        // An alternative option is to make the date range some type of "#" + "duration" combination
        // Example: past 3 weeks.
        // Day range is too complex to implement right now because I am not too familiar with JavaScript Date object
        // I will use the duration number combination

        // Obtain duration parameters
        const RangeDuration = event["queryStringParameters"]['RangeDuration'];
        const RangeValue = event["queryStringParameters"]['RangeValue'];
        // const RangeDuration = "Week";
        // const RangeValue = "1";

        // Calculate number of days to filter
        let numDays;
        const startDate = new Date("05/16/2021");
        const today = new Date();
        const dd = today.getDate();
        const mm = today.getMonth()+1;
        const yyyy = today.getFullYear();
        const todayDate = new Date(mm + "/" + dd + "/" + yyyy);

        // Bad input so we default to maximum duration
        if(RangeValue === "" || RangeDuration === "") {
            const timeDifference = todayDate.getTime() - startDate.getTime();
            numDays = timeDifference / (1000 * 3600 * 24);
        }
        // Good input so we calculate RangeDuration * RangeValue
        else {
            switch (RangeDuration) {
                case "Day":
                    numDays = 1;
                    break;
                case "Week":
                    numDays = 7;
                    break;
                case "Month":
                    numDays = 30;
                    break;
                case "Year":
                    numDays = 365;
                    break;
                default:
                    numDays = 1;
                    break;
            }
            numDays = numDays * RangeValue;
        }

        // Calculate last date
        var lastDate = new Date();
        lastDate.setDate(todayDate.getDate() - numDays)

        // Filter for correct date range
        const tempArr = scanResults.filter((ele) => {
            return new Date(ele.Date) > lastDate;
        })
        scanResults = tempArr;

        // A big issue with this entire set up  is that we could have date ranges that are too short and durations that are too long

        // TODO: insert bucketing code
        // Duration: Individual, Days, Weeks, Months, Years. If we select individual, there will be no bucketing
        // Set Up
        // Based on LogType (Gym, Meal) we will track Minutes or Protein
        // Based on date range and duration, we can compute number of buckets needed.
        // Then we can iterate through the logs, and sort them... O(n) time I guess.

        // To make this simple, we can just keep date range as a certain number of days and
        // duration as .... what if they do not overlap...
        // If the duration is not a perfect multiple of the date range, we can have a mini bucket on the end or we can not include it

        // Sort scan results
        const sortedScanResults = scanResults.sort((a, b) => Date.parse(b.Date) - Date.parse(a.Date))

        // Obtain bucketing parameters
        const BucketDuration = event["queryStringParameters"]['BucketDuration'];
        // const BucketDuration = "Day"

        let buckets = [];
        // Check if bucket duration exists. If not, we default to individual and there is no bucketing
        if(BucketDuration !== "") {
            let duration;
            switch (BucketDuration) {
                case "Day":
                    duration = 1;
                    break;
                case "Week":
                    duration = 7;
                    break;
                case "Month":
                    duration = 30;
                    break;
                case "Year":
                    duration = 365;
                    break;
                default:
                    duration = 1;
                    break;
            }

            // initialize buckets
            for(let i=0; i<numDays; i+= duration) {
                buckets.push(0);
            }

            // iterate through all entries in sortedScanResults,
            for(let i=0; i<sortedScanResults.length; i++) {
                const entryDate = new Date(sortedScanResults[i].Date); // obtain date
                const timeDifference = todayDate.getTime() - entryDate.getTime(); // get time difference
                const numberOfDaysSinceToday = timeDifference / (1000 * 3600 * 24); // get days since today
                const bucketIndex = Math.floor(numberOfDaysSinceToday / duration); // find bucket
                if(LogType === "Gym") {
                    buckets[bucketIndex] = buckets[bucketIndex] + sortedScanResults[i].Gym.Duration// add value
                }
                else if(LogType === "Meal") {
                    buckets[bucketIndex] = buckets[bucketIndex] + sortedScanResults[i].Meal.Protein// add value
                }
            }
        }
        else {
            // initialize buckets with all individual elements
            for(let i=0; i<sortedScanResults.length; i++) {
                // NOT SURE IF SORTED. MUST SORT BEFORE THIS POINT
                if(LogType === "Gym") {
                    buckets.push(sortedScanResults[i].Gym.Duration);
                }
                else if(LogType === "Meal") {
                    buckets.push(sortedScanResults[i].Meal.Protein);
                }
            }
        }

        const resultsAndBuckets = {
            buckets: buckets,
            results: sortedScanResults
        }
        responseBody = JSON.stringify(resultsAndBuckets);
    } catch (err) {
        responseBody = JSON.stringify(err);
        statusCode = 403;
    }

    const response = {
        statusCode: statusCode,
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        body: responseBody
    }

    return response;
}