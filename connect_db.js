const mongoose  = require('mongoose')

mongoose.Promise = global.Promise

async function run() {
	await mongoose.connect("mongodb://localhost/demo", {
		//useMongoClient:true
	});
}

run().catch(error => console.error(error.stack))