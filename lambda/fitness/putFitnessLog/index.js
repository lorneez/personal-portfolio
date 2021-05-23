'use strict'
const AWS = require('aws-sdk');

AWS.config.update({ region: "us-west-1" });

exports.handler = async (event, context) => {
    const ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });
    const documentClient = new AWS.DynamoDB.DocumentClient({ region: "us-west-1" });

    let responseBody = "";
    let statusCode = 0;

    const { id, Date, Description, Gym, LogType, Meal } = JSON.parse(event.body); // convert to JSON

    const params = {
        TableName: "Fitness",
        Item: {
            id: id,
            Date: Date,
            Description: Description,
            Gym: Gym,
            LogType: LogType,
            Meal: Meal
        }
    };

    try {
        const data = await documentClient.put(params).promise();
        responseBody = JSON.stringify(data);
        statusCode = 201;
    } catch (err) {
        responseBody = `Unable to put Entry Data`;
        statusCode = 403;
    }

    const response = {
        statusCode: statusCode,
        headers: {
            "testHeader": "test"
        },
        body: responseBody
    }

    return response;
}