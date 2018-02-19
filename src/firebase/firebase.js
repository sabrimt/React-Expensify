import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };


// database.ref('expenses')
//     .on('value', (dataSnapshot) => {
//         const expenses = [];
//         dataSnapshot.forEach((childSnap) => {
//             expenses.push({
//                 id: childSnap.key,
//                 ...childSnap.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('expenses')
//     .on('child_changed', (dataSnapshot) => {
//         console.log(dataSnapshot.key, dataSnapshot.val());
//     });

// const onValueChange = database.ref()
//     .on('value', (dataSnapshot) => {
//         const data = dataSnapshot.val();
//         const str = `${data.name} is a ${data.job.title} at ${data.job.company}`;
//         const oth = data.other;
//         console.log(str, '\n', oth);
//     }, (e) => {
//         console.log('Error while fetching !!');
//     });
//
// setTimeout(() => {
//     database.ref('other/1').remove();
// }, 2500);

// database.ref().set({
//     name: "Sabri Mtir",
//     age: 33,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'google'
//     },
//     location: {
//         city: "Orléan",
//         country: "France"
//     }
// }).then(() => {
//     console.log('Data is saved !');
// }).catch((e) => {
//     console.log('This failed !!!', e);
// });

// database.ref('age').set(32);
// database.ref('location/city').set("Paris");

// database.ref('attributes').set({
//     height: 175,
//     weight: 80
// }).then(() => {
//     console.log('comp data is saved !');
// }).catch((e) => {
//     console.log('comp data failed !!!', e);
// });

// database.ref('other').set(['glasses', 24, {bullshit: 'bullshit'}]);
// database.ref('other/2/bullshit').set(22);

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('isSingle deleted');
//     }).catch((e) => {
//         console.log('Error: ', e);
//     });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Paris'
// });
