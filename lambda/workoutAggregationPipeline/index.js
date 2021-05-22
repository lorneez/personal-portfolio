'use strict'
const AWS = require('aws-sdk');

AWS.config.update({ region: "us-west-1" });

exports.handler = async (event, context) => {
    const ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" }); // instance of DynamoDB
    const documentClient = new AWS.DynamoDB.DocumentClient({ region: "us-west-1" }); // Document client to simulate more traditional JSON syntax

    let responseBody = "";
    let statusCode = 0;
    let scanResults = [];

    const LogType = event["queryStringParameters"]['LogType'];

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

        // A big issue with this entire set up  is that we could have date ranges that are too short and durations that are too long

        // TODO: insert bucketing code
        // Duration: Individual, Days, Weeks, Months, Years
        // Set Up
        // Based on LogType (Gym, Meal) we will track Minutes or Protein
        // Based on date range and duration, we can compute number of buckets needed.
        // Then we can iterate through the logs, and sort them... O(n) time I guess.

        responseBody = JSON.stringify(scanResults);
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