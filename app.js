const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());





let user = [
    {
        slackUsername:'shmorteen',
        backend: 'yes',
        age: 26,
        bio:'Tech enthusiast hoping to gain more experience'
    }
];

app.get('/', (req, res) => {
    // res.send({message:'LOOKING GOOD'})
    res.json(user)
});

app.get('/user',(req, res) => {
    
});

app.listen(PORT, () => console.log("App server is currently running on port " + PORT));