const http = new easyHttp;

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function (error, posts) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(posts);
//   }
//
// });

// Create data
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

// http.post('https://jsonplaceholder.typicode.com/posts', data, function (error, post) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(post);
//   }
// });

// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (error, post) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(post);
//   }
// });

http.delete('https://jsonplaceholder.typicode.com/posts/1', function (error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});

