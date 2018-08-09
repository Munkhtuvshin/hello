const mongoose  = require('mongoose')
require('dotenv').config()
mongoose.Promise = global.Promise

async function run() {
	await mongoose.connect("mongodb://"+process.env.DB_HOST+":"+process.env.DB_PORT+"/"+process.env.MONGO_DB, {
		useNewUrlParser: true
	});
}

run().catch(error => console.error(error.stack))