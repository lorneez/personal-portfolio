'use strict'
const AWS = require('aws-sdk');

AWS.config.update({ region: "us-west-1" });

exports.handler = async (event, context) => {
    const ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" }); // instance of DynamoDB
    const documentClient = new AWS.DynamoDB.DocumentClient({ region: "us-west-1" }); // Document client to simulate more traditional JSON syntax

    let responseBody = "";
    let statusCode = 0;

    const { id, author, title, description } = JSON.parse(event.body); // convert to JSON

    const params = {
        TableName: "Mini-Blog",
        Item: {
            id: id,
            author: author,
            title: title,
            description: description
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