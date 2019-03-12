const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000


app.get('/', (req, res) => res.status(200).send({"message":"Return"}))


app.listen(PORT, () => console.log('Example app listening on port'+ PORT))
