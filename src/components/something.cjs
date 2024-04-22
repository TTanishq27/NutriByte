const request = require("request");
const express = require('express');
const cors = require('cors');



const app = express();
const PORT = 8000;

app.use(cors());

app.listen(PORT, () => {
  console.log("Server running at port 8000\n");
})


app.get('/:name', (req, res) => {
  const { name } = req.params;
  request.get({
    url: `https://api.api-ninjas.com/v1/nutrition?query=${name}`,
    headers: {
      'X-Api-Key': 'GRLwXrieGTGzpQYSDY1ejQ==XhSUT6a5cxFQiS1F'
    },
  }, (error, responce, body) => {
    if(error) return console.log("Failed");
    else if(responce.statusCode != 200) return console.log("Failed returns");
    else res.send(body);
  })

})







