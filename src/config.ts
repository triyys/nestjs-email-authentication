import * as dotenv from 'dotenv';

dotenv.config();

export default {
    'db': {
        mongoCnnString: process.env.MONGODB_CONNECTION_STRING,
    },
    'host': process.env.HOST_URL,
    'port': process.env.PORT,
    'jwt': {
        'secretOrKey': process.env.ACCESS_TOKEN_SECRET,
        'expiresIn': 36000000,
    },
    'mail':{
        'host': process.env.MAIL_HOST,
        'port': process.env.MAIL_PORT,
        'secure': true,
        'user': process.env.MAIL_USER,
        'pass': process.env.MAIL_PASS,
    }
}
