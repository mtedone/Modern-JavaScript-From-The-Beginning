let re;
// re = /hello/;
re = /hello/i; // i = case insensitive
// re = /hello/g; // g = global search

// console.log(re);
// console.log(re.source);

// exec() - Return result in an array or null
// const result = re.exec('hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - Returns true or false
// const result = re.test('Hello');
// console.log(result);

// match() - Returns results array or null but it works on the input match function
// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);

// search() - Return index of the first match if not found it returns a -1
// const str = 'Hello There';
// const result = str.search(re);
// console.log(result);

// replace() - Will return a new string with some or all matches of a pattern replaced
const str = 'Hello There';
const newString = str.replace(re, 'Hi');
console.log(newString);
