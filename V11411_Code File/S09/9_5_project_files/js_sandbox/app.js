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

// Brackets [] - Character Sets
re = /gr[ae]y/i;      // Must be an a or an e
re = /[GF]ray/i;      // Must be a G or an F
re = /[^GF]ray/i;     // Must match anything except a G or an F
re = /[A-Z]ray/;      // Matches any uppercase letter
re = /[a-z]ray/;      // Matches any lowercase letter
re = /[a-zA-Z]ray/;   // Matches any letter
re = /[0-9]ray/;      // Matches any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i;      // Matches exactly two 'l'
re = /Hel{2,4}o/i;    // Matches two to four 'l'
re = /Hel{2,}o/i;     // Matches at least two 'l'

// Parenthesis () - Grouping
re = /([0-9]x){3}/;   // Matches any digit followed by an x, 3 times

// Shorthand Character classes
re = /\w/;            // Word character - alphanumeric or underscore
re = /\w+/;           // One or more Word character - alphanumeric or underscore
re = /\W/;            // One or more NON Word character
re = /\d/;            // Any one digit
re = /\d+/;           // Any number of digits
re = /\D/;            // Any one non digit
re = /\s/;            // One whitespace character (including tabs)
re = /\S/;            // One NON whitespace character
re = /Hell\b/i;       // Word boundary

// Assertions
re = /x(?=y)/;        // Match x only if it's followed by y
re = /x(?!y)/;        // Match x only if it's not followed by y


// Str to match
const str = 'xz';

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