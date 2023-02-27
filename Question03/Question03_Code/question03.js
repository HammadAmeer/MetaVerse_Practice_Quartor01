"use strict";
let personName = "elon musk"; //store person's name in block variable.
console.log("Original String : " +
    personName +
    "\nLowerCase String : " +
    personName.toLowerCase() +
    "\nUpperCase String : " +
    personName.toUpperCase()); //show name in lower & upper case. 
// convert into titlecase.
let temp = [];
{
    for (let i = 0; personName[i]; i++) {
        if (i == 0) {
            temp[i] = personName[i].toUpperCase();
        }
        else if (personName[i] == " ") {
            temp[i] = " ";
            temp[i + 1] = personName[i + 1].toUpperCase();
            i++;
        }
        else {
            temp[i] = personName[i];
        }
    }
    personName = temp.join("");
    console.log("TitleCase : " + personName);
}
