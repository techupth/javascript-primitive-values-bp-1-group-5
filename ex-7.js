// Exercise #7: Concatenating String

let subject = "I";
let verb = "am";
let object = "A Software Developer";

// ที่ถูกต้องคือต้องใส่ blankspace กับ double quote เพิ่มเอาเอง
let sentence = '"' + subject + ' ' + verb + ' ' + object + '"';
console.log(sentence)


// ตามโจทย์แบบที่ให้เป็น "I am A Software Developer"
let sentence1 = `"${subject} ${verb} ${object}"`;
console.log(sentence1)

// ตามโจทย์แบบที่ให้เป็น "I am A Software Developer" แต่พอลองทำแล้ว คำที่ออกมา ไม่เว้นวรรค และไม่มีเครื่องหมาย "" ด้วยค่า ในตัวอย่างบทเรียนมันจะขึ้น // 
let sentence2 = subject + verb + object;
console.log(sentence2)

