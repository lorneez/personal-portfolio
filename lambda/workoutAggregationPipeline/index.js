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

        // TODO: insert bucketing code

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