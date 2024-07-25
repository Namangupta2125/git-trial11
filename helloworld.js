// write the 10 lines code not incomment mode
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const router = require('./router')
app.use(express.json())
app.use(cors())

app.use('/auth',router)


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

