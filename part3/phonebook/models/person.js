require('dotenv').config();
const mongoose = require('mongoose');
// DO NOT SAVE YOUR PASSWORD TO GITHUB!!
const url = process.env.MONGODB_URI;
mongoose.set('strictQuery',false);

console.log('connecting to', url);
mongoose.connect(url)
	.then(() => {
		console.log('connected to MongoDB');
	})
	.catch((error) => {
		console.log('error connecting to MongoDB:', error.message);
	});

const personSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	number: {
		type: String,
		required: true
	},
});

personSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	}
});

module.exports = mongoose.model('Person', personSchema);