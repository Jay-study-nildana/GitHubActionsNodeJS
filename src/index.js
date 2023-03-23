const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send({
        "first": "jason",
        "last": "bourne"
    })
})

const port = process.env.PORT;

app.listen(port,()=> {
    console.log("server running....")
})