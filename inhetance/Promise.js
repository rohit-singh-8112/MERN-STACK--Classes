// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
  const success = true; // Change to false to test rejection

  if (success) {
    resolve('Operation successful!');
  } else {
    reject('Operation failed!');
  }
});

// Handling the Promise
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('Operation completed');
  });