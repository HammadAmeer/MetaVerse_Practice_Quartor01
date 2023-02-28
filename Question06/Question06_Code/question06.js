"use strict";
// '\t' means four spaces 
// '\n' used for end line
let person_name = '    \tHammad Ameer\n    '; //store name with white spaces.
console.log('Name Before Stripping : ' + person_name); //display name on console without stripping.
console.log('Name After Stripping : ' + person_name.trim()); //display name on console after stripping.
