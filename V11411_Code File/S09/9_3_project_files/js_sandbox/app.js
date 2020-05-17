let re;
// Literal characters
re = /hello/;
re = /hello/i;

// Meta character symbols
re = /^h/i;           // Must start with h
re = /d$/i;           // Must end with d
re = /^hello world$/i // Must start and end
re = /h.llo/i         // . accepts any character exactly once
re = /h*llo/i         // * accepts any character zero or more times
re = /gre?a?y/i       // e and a are optional
re = /gre?a?y\?/i     // Escape characters for the ?


// Str to match
const str = 'grey?';

// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);