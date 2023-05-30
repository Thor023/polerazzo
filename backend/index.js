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
/*
//Función reportar consultas
const reportarConsultas = async (req, res, next) => {
    const parametros = req.params
    const url = req.url
    console.log(`Hoy ${new Date()} recibimos una consulta en ${url} con los parametros:`, parametros)
    next()
}

//Función de logueo
app.post('/login', reportarConsultas, async (req, res) => {
    try {
        const { email, password } = req.body
        await loguear(email, password)
        const token = jwt.sign({ email }, "az_AZ")
        res.send(token)
    }
    catch (error) {
        console.log(error)
        res.status(error.code || 500).send(error)
    }
})

//Función usuarios con token
app.get('/usuarios', reportarConsultas, async (req, res) => {
    try {
        const Authorization = req.header("Authorization")
        const token = Authorization.split("Bearer ")[1]
        jwt.verify(token, "az_AZ")
        const { email } = jwt.decode(token)
        const datos = await obtenerDatos(email)
        res.json(datos)
    }
    catch (error) {
        console.log(error)
        res.status(error.code || 500).send(error)
    }
})
*/
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