const express = require('express')

const app = express()

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => console.log(`The server ${PORT} is running on the port`));