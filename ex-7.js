// Exercise #7: Concatenating String

let subject = "I";
let verb = "am";
let object = "A Software Developer";

let sentence = '"' + subject + ' ' + verb + ' ' + object + '"';
console.log(sentence);

let sentence2 = `"${subject} ${verb} ${object}"`; 
console.log(sentence2);