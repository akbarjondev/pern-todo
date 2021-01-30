const express = require('express')
const app = express()
const CONFIG = require('./src/config')



app.listen(CONFIG.PORT, () => console.log(`Ready at http://localhost:${CONFIG.PORT}`))