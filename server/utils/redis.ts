import { Redis } from 'ioredis';
require('dotenv').config();

const redisClient = () => {
    if (process.env.REDIS_URL) {
        console.log(`Redis connected`);
        return process.env.REDIS_URL;
    }
    throw new Error('Redis connection failed');
};

export const redis = new Redis(redisClient());

//gpt
// import Redis from 'ioredis';
// import dotenv from 'dotenv';

// dotenv.config(); // Load environment variables from .env file

// const redisClient = new Redis({
//     host: process.env.REDIS_HOST,
//     port: parseInt(process.env.REDIS_PORT || '6379'), // Default port is 6379
//     password: process.env.REDIS_PASSWORD,
// });

// redisClient.on('connect', () => {
//     console.log('Connected to Redis');
// });

// redisClient.on('error', (err) => {
//     console.error('Redis Error:', err);
// });

// export default redisClient;



// import Redis from 'ioredis';
// import dotenv from 'dotenv';

// dotenv.config(); // Load environment variables from .env file

// const redisClient = new Redis(process.env.REDIS_URL);

// redisClient.on('connect', () => {
//     console.log('Connected to Redis');
// });

// redisClient.on('error', (err) => {
//     console.error('Redis Error:', err);
// });

// export default redisClient;
