// const arg =process.argv
// // console.log(arg[0])
//
// const a = +arg[2]
// const b= +arg[3]
// if(a>b){
//     console.log(a)
// }
// else{
//     console.log(b)
// }

//
// let c =(a>b) ?a:b;
// console.log(c)
// let out = '';
// for(let i=5; i>0; i--){
//     out+=i+' ';
// }
// console.log(out)
//
// let d = [5,6,7];
// let e = d.map(i=>{
//     return i*3;
// })
// console.log(e)
//
// let f ={"one": 1, "two": 2}
// console.log(f.one)


// read file:
// way 1:

// fs.readFile('t1.txt', 'utf-8', (err, data)=>{
//     console.log(data);
// })
// console.log("async")
//
//
// // way 2:
// let text=fs.readFileSync('t2.txt', 'utf-8');
// console.log(text);
// console.log('синхронный')

// fs.readdir('one', (err,data)=>{
//     console.log(data);
//     data.forEach(file=>{
//         console.log(file)
//         console.log(file + '\t'+ path.extname(file) + (file + " \t "+ fs.statSync('one/'+file).size))
//
//
//     })
// })

// fs.writeFile('one/newfile.txt', 'alga kazakhstan', (err)=>{
//     if(err) console.log(err);
// });

//
// const fs = require('fs')
// const path = require('path')
// // const student = require('. /one.json')
// const csv = require('csv-parser')
//
// // fs.writeFile('one.txt', 'work', (err)=>{
// //     if (err) console.log('error');
// // })
//
//
// // case 1 write json file
//
//
// const man= {
//     name:"Aza",
//     age: 22,
//     department: "history",
//     car: "mercedes"
// };

// fs.writeFile('one.json', JSON.stringify(man), (err)=>{
//     if (err) console.log('error');
// })


// case 2 read json file

// console.log(student)

// const http = require('http');
// const url = require('url');
// const { parse } = require('querystring');
//
// const t2 = function (request, response){
//     return 800;
// };
//
// const t3 = function (request, response){
//     return 900;
// };
//
// http.createServer((request, response)=>{
//     console.log('server works');
//     let urlRequest = url.parse(request.url, true);
//     console.log(urlRequest.query.p); // ! GET Params
//     if (request.method === 'GET' && urlRequest.query.p==70) {
//         const result = t2(request, response);
//         response.end(result.toString());
//     }
//     else if (request.method === 'GET' && urlRequest.query.p==80) {
//         const result2 = t3(request, response);
//         response.end(result2.toString());
//     }
//     else {
//         response.end('goo');
//     }
// }).listen(3002)
// get query

// http.createServer((request, response)=>{
//     console.log('server works');
//     // getting methods
//     if (request.method == 'GET') {
//         console.log(request.method);
//         // getting url
//         let urlReq = url.parse(request.url, true);
//         // console.log(urlReq);
//         // getting parametrs
//         console.log(urlReq.query.test);
//         if (urlReq.query.test % 2 == 0) {
//             response.end('even');
//         } else {
//             response.end('odd');
//         }
//     }
//     else{
//         let body ='';
//         request.on('data', chunk => {
//             body += chunk.toString();
//         });
//         request.on('end', ()=>{
//            console.log(body);
//            let params = parse(body);
//            console.log(params);
//            response.end('ok')
//         });
//     }
// }).listen(4000);

//
// const mysql = require('mysql');
// const http = require('http');
// const url = require('url');
// const { parse } = require('querystring');
// //config of packet
// const conn = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     database: "node.js",
//     password: ""
// });
// const server = http.createServer((req, res)=> {
//     console.log('server works');
//     let urlReq = url.parse(req.url, true);
//
// if(req.method == "GET" && urlReq.query.task == 2) {
//     let query = "SELECT first_name FROM user";
//     conn.query(query, (err, result, field)=>{
//         conn.end()
//         const firstnames = result.map((row) => row.first_name);
//         res.end(JSON.stringify(firstnames))
//     })
// }
// else if (req.method == "GET" && urlReq.query.task == 3) {
//     let query = "SELECT email FROM user";
//     conn.query(query, (err, results, field)=>{
//         conn.end()
//         const firstnames = results.map((row) => row.email);
//         res.end(JSON.stringify(firstnames))
//     })
// }
// else{
//     res.end('goo')
// }
// }).listen(3002);

// let query = "SELECT * FROM user";
// conn.query(query, (err, result, field)=>{
//     console.log(err);
//     console.log(result);
//     // console.log(field);
//     // console.log(result[0]['first_name'])
//     // console.log(field)
// })

// const http = require('http');
// const url = require('url');
//
//
// function hompage(req, res){
//     res.end("hompage");
// }
//
// http.createServer(function (req,res){
// let urlParts = url.parse(req.url);
// // res.end('goo')
// // console.log(urlParts)
//     console.log(urlParts.pathname)
//     if(req.method == "GET"){
//         switch (urlParts.pathname){
//             case "/":
//                 hompage(req, res);
//                 break;
//             case "/go":
//                 go(req,res);
//                 break;
//             case "/main":
//                 main(req,res);
//                 break;
//             default:
//                 pageNot(req,res);
//                 break;
//         }
//     }
//     else if(req.method == "POST"){
//         switch (urlParts.pathname){
//             case "/go":
//                 go(req,res);
//                 break;
//             default:
//                 pageNot(req,res);
//                 break;
//         }
//     }
//     else{
//         pageNot(req,res);
//     }
// }).listen(3002);
// console.log("http://localhost:3002/")
//
//
// function go(req, res) {
//     res.end("goooooo")
// }
//
// function main(req, res){
//     res.end('main')
// }
//
// function pageNot(req, res){
//     res.end("404")
// }

// const mysql = require('mysql2/promise')
// const config = require('./config')

// async function main(){
//     const conn=await mysql.createConnection(config);
//     const [rows,fields] = await conn.execute("select * from user");
//     // console.log(rows);
//     conn.end();
//     return rows
// }

// async function f1(){
//     let a = await main();
//     console.log(a)
// }

// async function f1(){
//     const conn=await mysql.createConnection(config);
//     const [rows, fields] = await conn.execute("select id from user where first_name like '%Harry%'");
//     console.log(rows[0]['id'])
// }
// f1();
//
// async function f2(){
//     const conn= await mysql.createConnection(config);
//     const count = await conn.execute("select count(id)  from user")
//     console.log(count[0])
// }
//
// f2();
//
// async function f3(){
//     const conn= await mysql.createConnection(config);
//     const [row, field] = await conn.execute("select id from user where last_name like '%Potter%'");
//     if(row[0]['id']>2){
//         console.log(true)
//     }
//     else if(row[0]['id']<=2){
//         console.log(false)
//     }
//
// }
// f3();

// const config = require('./config.js');
// const config2 = require('./config2')
// const f2 = require('./f2')
// const f = require('./fun')
// console.log("node-------ok")
// console.log(config)
// console.log(config2)
// console.log(f(5,8))
// console.log(config.f(3,4))
// console.log(f2(5,7))



// const http = require('http')
// const fs = require('fs');
// const path = require('path')
// function getContentType(url){
//     switch (path.extname(url)){
//         case '.html':
//             return "text/html"
//         case ".css":
//             return "text/css"
//         case ".js":
//             return "text/javascript"
//         case ".json":
//             return "application/json"
//         default:
//             return "application/octate-stream"
//     }
// }
// const httpServer = http.createServer((req,res)=>{
// // res.end('goooo')
//     console.log(`req: ${req.url}`)
//     if(req.url === '/'){
//         sendRes('practice.html', 'text/html', res);
//     }
//     else if (/\/upload\/[^\/]+$/.test(req.url) && req.method === "POST"){

//     }
//     else{
//         sendRes(req.url, getContentType(req.url), res)
//     }
// }).listen(3000, ()=>{
//     console.log("port 3000")
// });

// function sendRes(url, contentType, res){
//     const currentDirectory = process.cwd();
//     let file = path.join( currentDirectory, '/html_lessons/', url);
//     fs.readFile(file,(err, content)=>{
//         if (err){
//             res.writeHead(404);
//             res.end("file not found")
//             console.log(`404 ${file}`)
//         }
//         else{
//             res.writeHead(200, {'Content-Type':contentType});
//             res.write(content)
//             res.end()
//             console.log(`200 ${file}`)
//         }
//     })


// }
const express = require('express')
const cors = require('cors')


const app = express()

// middleware

app.use(express.json())

app.use(express.urlencoded({ extended: true }))


// routers
const router = require('./router/productRouter.js')
app.use('/api/products', router)

//static Images Folder

app.use('/Images', express.static('./Images'))


//port

const PORT = process.env.PORT || 8080

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})