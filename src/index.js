import app from "./app.js";
import logger from './logs/logger.js';
import 'dotenv/config';

async function main() {
    app.listen(process.env.PORT); 
    console.log('Server running on http://localhost:'+process.env.PORT);
    logger.info('corriendo en 300');
}

main();
