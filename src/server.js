import app from './app.js';
conts PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
  console.log(`Servidor corriendo en el puerto ${PORT}`)
});
