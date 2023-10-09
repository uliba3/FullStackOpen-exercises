const mongoose = require('mongoose');

const password = process.argv[2];
const url =
  `mongodb+srv://uliba3:${password}@cluster0.ublxy64.mongodb.net/?retryWrites=true&w=majority`;

mongoose.set('strictQuery',false);
mongoose.connect(url);

const personSchema = new mongoose.Schema({
	name: String,
	number: String,
});

const Person = mongoose.model('Person', personSchema);

if(process.argv.length === 5) {
	const newName = process.argv[3];
	const newNumber = process.argv[4];
	const person = new Person({
		name: newName,
		number: newNumber,
	});
	person.save().then(() => {
		console.log(`added ${newName} number ${newNumber} to phonebook`);
		mongoose.connection.close();
	});
}

if(process.argv.length === 3) {
	Person.find({}).then(result => {
		console.log('phonebook:');
		result.forEach(person => {
			console.log(`${person.name} ${person.number}`);
		});
		mongoose.connection.close();
	});
}