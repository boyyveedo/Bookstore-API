const mongoose = require('mongoose')
const CONFIG = require("../config/config")
const logger = require('../logging/logger')

function connectDB() {
    mongoose.connect(CONFIG.MONGO_URI)

    mongoose.connection.on("connected", () => {
        logger.info("connected to db sucessfully")
    })
    mongoose.connection.on("error", (err) => {
        logger.error("An error occured")
        console.log(err)
    })
}


module.exports = connectDB