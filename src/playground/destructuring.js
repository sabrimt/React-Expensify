/*
****************** Object destructuring
*/

console.log('-----------   Object destructuring   ------------');

const person = {
    name: 'Sabri',
    age: 32,
    location: {
        city: 'Paris',
        temp: 10
    }
};

const {name: firstName = 'Anonymous', age} = person;
console.log(`${firstName} is ${age}`);

const {city, temp: temperature} = person.location;
console.log(`its ${temperature} in ${city}`);


console.log('');
console.log('*****  challenge  *****');

const book = {
    title: 'Ego is the ennemy',
    author: 'Ryan Holyday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'self-published'} = book.publisher;
console.log(publisherName);

/*
****************** Array destructuring
*/
console.log('\n\n');
console.log('-----------   Array destructuring   ------------');

const adress = ['10 Rue de Clery', 'Paris', 'France', '75002'];

const [, location, state] = adress;
console.log(`You are in ${location}, ${state}`)


console.log('');
console.log('*****  challenge  *****');

const item = ['Coffee (Hot)', '$2.00', '$2.50', '$2.75'];
const [drink, , medium] = item;
console.log(`A medium ${drink} costs ${medium}`);
