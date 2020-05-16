// async function myFunc() {
//
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000);
//   });
//
//   const error = false;
//
//   if (!error) {
//     const res = await promise; // Wait until promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error('Something went wrong'));
//   }
// }
//
// myFunc()
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

async function getUsers() {
  // Await the response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // Only proceed once the promise is resolved. It returns another promise
  // which must be handled by the caller (see below call to getUsers with then)
  const data = await response.json();

  // Only proceed once the second promise is resolved
  return data;
}

getUsers()
    .then(users => console.log(users));