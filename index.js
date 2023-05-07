const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('SIMPLE CRUD IS RUNNING')
})

app.listen(port, () => {
    console.log(`crud running on port : ${port}`)
})

