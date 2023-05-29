//Iniciar Express
const express = require('express')
const app = express()

//Importar funciones desde consultas
const { agregarUsuario, informacionUsuario, borrarUsuario } = require('./consultas')

//Uso de cors y otros MW
const cors = require('cors')
app.use(cors())
app.use(express.json())

//Inicio de servidor
app.listen(3000, () => {
    console.log('Servidor funciona en el puerto 3000')
})

app.get('/usuarios', async (req, res) => {
    const resultado = await informacionUsuario()
    res.json(resultado)
})


app.post('/usuarios', async (req, res) => {
    const { user_name, password, mail, phone, created_at, modified_at } = req.body
    await agregarUsuario(user_name, password, mail, phone, created_at, modified_at)
    res.json()
})

/*
--> Este es para modificar, falta ahí. Es la plantilla de un desafío anterior

app.put('/posts/like/:id', async (req, res) => {
    const { id } = req.params
    await modificarPost(id)
    res.send('Post modificado en la base de datos')
})

*/

app.delete('/usuarios/:id', async (req, res) => {
    const { id } = req.params
    await borrarPost(id)
    res.send('Usuario eliminado en la base de datos')
})