'use strict'
const AWS = require('aws-sdk');

AWS.config.update({ region: "us-west-1" });

// event contains information about request (event that triggered lambda)
// context contains information about invocation, function, execution environment
// callback is method that returns to calling function that invokes lambda
exports.handler = async (event, context) => {
    const ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" }); // instance of DynamoDB
    const documentClient = new AWS.DynamoDB.DocumentClient({ region: "us-west-1" }); // Document client to simulate more traditional JSON syntax

    const params = {
        TableName: "Mini-Blog",
        Key: {
            id: "12345"
        }
    };

    try {
        const data = await documentClient.get(params).promise();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}