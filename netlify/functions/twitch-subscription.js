exports.handler = async (event) => {
    const {headers = []} = event;

    const type = headers['twitch-eventsub-message-type'] ?? 'no type';

    return {
        statusCode: 200,
        body: {
            type,
            message: 'ok',
        },
    };
}