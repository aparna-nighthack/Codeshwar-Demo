
const Config = {
    API_ENDPOINT: 'https://api.example.com/v1',
    API_KEY: 'your-api-key-here',
    AUTH_ENDPOINT: 'https://auth.example.com/oauth',
    IMAGE_UPLOAD_URL: 'https://upload.example.com/images',
    SOCKET_SERVER: 'wss://socket.example.com',
    FEED_PAGE_SIZE: 20,
    DEBUG_MODE: process.env.NODE_ENV !== 'production',
};

export default Config;