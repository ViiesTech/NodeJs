import express from 'express'


const app = express();



app.get('/', (req, res)=>{
    res.send("hello world")
})

app.listen(8000, () => {
    console.log(" listen on " + 8000)
})