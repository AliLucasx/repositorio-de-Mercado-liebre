const path = require('path');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./views/index.html"))
});
app.get('/formulario',(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/formulario.html"))
});
app.get('/a',(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/a.html"))
});


app.use(express.static('Public'));

app.listen(5000, () => {
    console.log("servidor corriendo")
});