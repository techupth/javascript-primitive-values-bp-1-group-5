// Exercise #3: Uploading Progress

let totalFileSize = 250000;
let uploadedSize = 30000;

// Start coding here
let uploadProgress = (uploadedSize / totalFileSize) * 100;
let result = `The upload progress is ${uploadProgress} percentage`;
console.log(result);