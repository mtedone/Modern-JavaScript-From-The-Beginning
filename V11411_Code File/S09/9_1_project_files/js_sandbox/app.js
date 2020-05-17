const user = {email: 'jdoe@gmail.com'};

try {
  // myFunction();

  // Produce a type error
  // null.myFunction();

  // Produce syntax error
  // console.log(eval('Hello World'));

  // Will produce a URI error
  // decodeURIComponent('%');

  if (!user.name) {
    // throw 'User has no name';
    throw new SyntaxError('User has no name');
  }
} catch (e) {
  console.log(e);
  // console.log(e.name);
  // console.log(e instanceof ReferenceError);
} finally {
  console.log('Finally runs');
}