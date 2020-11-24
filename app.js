const express = require('express');
const app = express();
//para recibic
app.get('/', (req , res ) => {
 res.send('recibido');
});
//para enviar
app.post('/', (req , res ) => {
    res.send('guardando');
   });
//para enviar
app.put('/', (req , res ) => {
    res.send('actualizando');
   });
//eliminar
app.delete('/', (req , res ) => {
    res.send('eliminado');
   });

app.listen(3000,()=>{
    console.log('server on port 3000');
});



