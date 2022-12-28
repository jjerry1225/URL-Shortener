const express = require('express')
const PORT = 3000

const app = express()


// setting route


// start and listen server
app.listen(PORT, () => {
  console.log(`Express is listening on http://localhost:${PORT}`)
})