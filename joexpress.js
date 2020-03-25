const express = require("express");
const path = require("path");
const app = express();
app.use('/public',express.static(path.join(__dirname,'static')));
app.get("/", (req, res) => {
  res.send('ffff dfgsdfg' + path.join(__dirname));
    res.sendFile(path.join(__dirname),'static','index.html')
});

app.listen(3000);

// app.get("/example", (req, res) => {
//   res.send("hitting apples");
// });

// app.get('/example/:name/:age', (req, res) => {
//   res.send(req.params.name + ' : ' + req.params.age);
//   console.log(req.params);
//   console.log(req.query);
// });

