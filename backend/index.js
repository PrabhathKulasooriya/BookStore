import express, { request } from "express";
import { PORT,mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for hamdling CORS policy
//Option 1 : Allow all origins with default value (*)
app.use(cors());

// option 2 : Allow specific origins
// app.use(cors({
//   origin : 'http://localhost:3000',
//   methods : ['GET','POST','PUT', 'DELETE'],
//   allowedHeaders : ['Content-Type']
// }))

app.get('/',(request, response)=>{
    console.log(request);
    return response.status(234).send('Hello World!');
});

app.use('/books', booksRoute);
mongoose
        .connect(mongoDBURL)
        .then(() => {
    console.log('Success : Connected to MongoDB');

    app.listen(PORT, () => {
      console.log(`Success : Server running on port ${PORT}`);
    });
})
        .catch((error)=>{
    console.log(error);
});