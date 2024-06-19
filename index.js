

import express from 'express'
import fsp from 'fs/promises'
import fs from 'fs'
import path, {dirname} from 'path'
import OpenAI from 'openai'
import { createRequire } from 'module'
import dotenv from 'dotenv'
dotenv.config();
const require = createRequire(import.meta.url);
const {Readable} = require('stream');


let app = express()
const openai = new OpenAI({apiKey: process.env.TOKEN});
const download = require('download');
const multer = require('multer');
app.use

app.listen(8000, () =>{
    //callback when started
    console.log("omg");
})

app.get('/', (req, res) =>{
    res.send("HOLA MUNDO");
})

app.post('/parsepdf', (req, res)=>{
    
});

app.post('/parseaudio', multer().none(), async (req, res) =>{
    try{
    const {audioPath} = req.body;
    console.log(req.body)
    fs.writeFileSync('./temp.mp3',  await download(audioPath));
        const transcript = await openai.audio.transcriptions.create({
            file: fs.createReadStream('./temp.mp3'),
            model: "whisper-1"
        })
        res.send(transcript.text);
    }
    catch{
        res.send('Error');
    }
    
    
    
    
})


app.use((req, res)=>{

    //callback each time a req is received
})



