const posts = [
  {title: 'Post one', body: 'This is post one'},
  {title: 'Post two', body: 'This is post two'}
];

// function createPost(post) {
//   setTimeout(function() {
//     posts.push(post);
//   }, 2000);
// }
//
// function getPosts() {
//   setTimeout(function () {
//     let output = '';
//     posts.forEach(function (post) {
//       output += `<li>${post.title}</li>`
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }
//
// createPost({title: 'Post three', body: 'This is post three'});
// getPosts();

function createPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      posts.push(post);

      const error = false;
      if (!error) {
        resolve();
      } else {
        reject('Something went wrong');
      }
    }, 1000);
  });


}

function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output;
  }, 2000);
}

createPost({title: 'Post three', body: 'This is post three'})
    .then(getPosts)
    .catch(function (err) {
      console.log(err);
    });