import dotenv from 'dotenv'
import fs from 'fs'
import express from 'express'
dotenv.config();

const app = express();

const port = process.env.PORT || 3007

app.listen(port,()=>console.log(`Server listening on port ${port}`))

app.get('/',responeText)
app.get('/json',responeJson)
app.get('/static/*',responeStatic)
app.use('*',respondNotFound)

function responeText(req,res) {
    res.setHeader('Content-type','text/plaisn')
    res.end("Hello NodeJS Batch14")
}

function responeJson(req,res) {
    res.json({users:{
        userId:100,
        firstName:'Trisna',
        lastName:'Nugraha'
    }})
}

function respondNotFound(req,res) {
    res.writeHead(404,{'Content-type':'text/plain'})
    res.end('page not found')
}

function responeStatic(req,res) {
    const fileName = `${__dirname}/public/images/${req.params[0]}`
    fs.createReadStream(fileName)
    .on('error',()=>respondNotFound)
    .pipe(res)
}