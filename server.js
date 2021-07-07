//Install express server
const express = require('express');
const path = require('path');
const jwt = require("jsonwebtoken");

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/TalkPoint'));

app.get('/', (req, res) =>
    res.sendFile('index.html', {root: 'dist/TalkPoint/'}),
);

// generate Token
app.get('/api/token',function(req,res) {
    let token = jwt.sign(
      { email: "pranjali@innovaeps.com", userId: "60e2af87ac5bb40d505f05fc" },
      "shhhhh",
      { expiresIn: "1h" }
    );
    res.status(200).json({
      token : token
    });
  })


//   Get detail from token
app.get('/api/:token', function(req,res){
    let token=req.params.token
    let decoded = jwt.verify(token, 'shhhhh');

    res.status(200).json({
        id : decoded.userId,
        email : decoded.email

    })
})  


// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000);