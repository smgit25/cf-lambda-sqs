exports.handler = async (event) => {
    console.log("Event received:", JSON.stringify(event, null, 2));

    // Example response
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: "Hello from Lambda!",
            input: event,
        }),
    };

    return response;
};