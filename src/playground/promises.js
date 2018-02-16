const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('this is my resolved data');
        reject('something went wrong !');
    }, 2000);
});

console.log('Before');
promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('ERROR: ', error);
});
console.log('After');
