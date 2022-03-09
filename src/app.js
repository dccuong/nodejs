// const http = require('http');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())

const checkAuth = (req, res, next) => {
    const isAdmin = false;
    if (isAdmin) {
        next();
    } else {
        console.log('Chim cút');
    }
}
app.get('/', (req, res) => {
    res.send("<h1>Home Page</h1>")
})
app.get('/api/products', checkAuth, (req, res) => {
    const data = [
        { id: 1, name: "Product A" },
        { id: 2, name: "Product B" }
    ];
    res.json(data);
});
// const server = http.createServer((req, res) => {
//     const url = req.url;
//     console.log(url);
//     if(url === "/api/products"){
//         const data = [
//             {id: 1, name: "Product A"}, 
//             {id: 2, name: "Product B"}
//         ];
//         res.end(JSON.stringify(data))
//     } else if( url === "/api/posts"){
//         console.log("API Post")
//     } else {
//         res.setHeader("Content-Type","text/html");
//         res.write("<html><body><h1>Home Page</h1></body></html>");
//         res.end();
//     }
// })
const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server của bạn đang chạy cổng ", PORT);
});