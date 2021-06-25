const app = require('./app')

const connectDatabase = require('./config/db')
const dotenv = require('dotenv');

//Handle uncaught exceptions 
process.on('uncaughtException', err => {
    console.log(`ERROR: ${err.message}`);
    console.log('Shutting down server due to uncaught exception!');
    process.exit(1)
})
//Set up config file
dotenv.config({ path: 'backend/config/config.env' })


//connecting to db
connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})

//Handle unhandled promise rejection
process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.message}`);
    console.log(`Shutting down due to unhandled promise rejection`);
    server.close(() => {
        process.exit(1) 
    })
})