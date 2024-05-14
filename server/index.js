const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/', require("./routes/route"))

app.listen(7000, () => {
    console.log('server nyala')
})