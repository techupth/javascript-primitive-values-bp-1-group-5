// Exercise #4: E-commerce logic bug
// Close Quokka before do this!

let numberOfSoldProduct = 12000;
let numberOfProductInStock = undefined;
// มันจะ error เพราะว่า 12000 / undefined ไม่ได้ เพราะไม่รู้ค่าของ numberOfProductInStock //
console.log((numberOfSoldProduct / numberOfProductInStock) * 100);
