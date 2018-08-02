const mongoose  = require('mongoose')

mongoose.Promise = global.Promise

async function run() {
	await mongoose.connect("mongodb://localhost:27017/demo", {
		useNewUrlParser: true
	});
}

run().catch(error => console.error(error.stack))