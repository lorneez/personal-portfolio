'use strict'
const AWS = require('aws-sdk');

AWS.config.update({ region: "us-west-1" });

// event contains information about request (event that triggered lambda)
// context contains information about invocation, function, execution environment
// callback is method that returns to calling function that invokes lambda
exports.handler = async (event, context) => {
    const ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" }); // instance of DynamoDB
    const documentClient = new AWS.DynamoDB.DocumentClient({ region: "us-west-1" }); // Document client to simulate more traditional JSON syntax

    let responseBody = "";
    let statusCode = 0;

    const params = {
        TableName: "Mini-Blog",
        Key: {
            id: id
        }
    };

    try {
        const data = await documentClient.get(params).promise();
        responseBody = JSON.stringify(data.Item);
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