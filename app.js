const readline = require('readline');
// for example 2
const fs = require('fs');
// example 3
const http = require('http');
//********************************* */
//1-print name and input user names
//************************************** */
// const rl = readline.createInterface({
// input: process.stdin,
// output: process.stdout
// });

// rl.question("what is your nam ? " , (name) =>
// {
//     console.log(`hey ${name}`);
//     // console.log("hello "* name);
//     rl.close();

// })
// rl.on('close' , () => {
//     console.log('close interface')
//     process.exit(0);
// })

//****************************************** */
//2-read file on pc
//******************************************* */
// let textIn = fs.readFileSync('./Files/input.text' , 'utf-8')
// console.log(textIn)

// let content = `Date is ${textIn} , may Day ${new Date} `
// fs.writeFileSync('./Files/output.text' , content)
//****************************************** */

//3-creat new server
// start server
//******************************************* */
const html = fs.readFileSync('./Template/index.html' , 'utf-8')
const server = http.createServer((request , response) => {
    // response.end('Hello from the server')
    response.end(html)
    // console.log(request);
console.log('request new message')
})
server.listen(5500 , '127.0.0.1' , ()=> {
    console.log('server has start')
})
