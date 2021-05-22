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
    const String_1 = event["queryStringParameters"]['String_1'];
    const Int_1 = event["queryStringParameters"]['Int_1'];

    const params = {
        TableName: "Fitness",
    };

    try {
        const data = await documentClient.scan(params).promise();
        data.Items.forEach((item) => scanResults.push(item));
        responseBody = JSON.stringify(scanResults);

        statusCode = 200;

        // TODO: insert filtering code


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