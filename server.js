import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import book from './router/book.js'
import quran from './router/quran.js'
import subject from './router/subject.js'
import cors from 'cors'
const app = express();
dotenv.config()
mongoose.connect(process.env.APP_SERVER, () => {
    console.log('quran server connect')
})
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use('/',book)
app.use('/',quran)
app.use('/',subject)

app.listen(process.env.PORT, () => {
    console.log(`quran server conncet http://localhost:${process.env.PORT}`)
})

