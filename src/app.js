// // const http = require('http');
// import express from 'express';
// import cors from 'cors';
// import prd_rout from "./routes/product"
// import morgan from 'morgan';
// const app = express();
// //middleware
// app.use(cors())
// app.use(morgan("tiny"))
// app.use(express.json())
// //.
// app.use("/api", prd_rout)

// // const server = http.createServer((req, res) => {
// //     const url = req.url;
// //     console.log(url);
// //     if(url === "/api/products"){
// //         const data = [
// //             {id: 1, name: "Product A"}, 
// //             {id: 2, name: "Product B"}
// //         ];
// //         res.end(JSON.stringify(data))
// //     } else if( url === "/api/posts"){
// //         console.log("API Post")
// //     } else {
// //         res.setHeader("Content-Type","text/html");
// //         res.write("<html><body><h1>Home Page</h1></body></html>");
// //         res.end();
// //     }
// // })
// const PORT = 3001;
// app.listen(PORT, () => {
//     console.log("Server của bạn đang chạy cổng ", PORT);
// });
import express from 'express';
import cors from 'cors';
import productRoute from './routes/product';
import morgan from 'morgan';

const app = express();
// middleware
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

// routes
app.use("/api", productRoute)

// connect
const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server của bạn đang chạy cổng ", PORT);
});