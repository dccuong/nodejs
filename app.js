// const http = require('http');
// const server = http.createServer((req, res) => {
//     console.log(req)
//     const url = req.url;
//     console.log(url);
//     if (url === "/api/products") {
//         const data = [{ id: 1, name: "product a" }, { id: b, name: "product b" }];
//         res.end(JSON.stringify(data));
//     } else if (url === "/api/posts") {
//         s
//         console.log("api post")
//     } else {
//         res.setHeader("Content-Type", "text/html");
//         res.write("<html><body><h1>homepag</h1></body></html>");
//         res.end();
//     }
// });


const express = require(express);
const app = express();
app.get("/", (req, res) => {
    res.send("<h1>home</sh1>")
})

app.get('/api/products', (rep, res) => {
    const data = [{ id: 1, name: "product a" }, { id: b, name: "product b" }];
    res.json(data)
})
const PORT = 3001;
app.listen(PORT, () => {
    console.log("server  run :" + PORT)
})