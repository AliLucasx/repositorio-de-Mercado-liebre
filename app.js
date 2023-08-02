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

const port=process.env.PORT || 3001;
app.listen(port, () =>console.log(`servidor corriendo en el puerto ${port}`));
);
