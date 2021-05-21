'use strict'
const AWS = require('aws-sdk');

AWS.config.update({ region: "us-west-1" });

exports.handler = async (event, context) => {
    const ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" }); // instance of DynamoDB
    const documentClient = new AWS.DynamoDB.DocumentClient({ region: "us-west-1" }); // Document client to simulate more traditional JSON syntax

    let responseBody = "";
    let statusCode = 0;
    let scanResults = [];

    const params = {
        TableName: "Mini-Blog",
    };

    try {
        const data = await documentClient.scan(params).promise();
        data.Items.forEach((item) => scanResults.push(item));
        responseBody = JSON.stringify(scanResults);
        statusCode = 200;
    } catch (err) {
        responseBody = `Unable to get Entry Data`;
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