//Iniciar Express
const express = require("express")
const jwt = require("jsonwebtoken")

//Uso de cors y otros MW
const app = express()
const cors = require("cors")
app.use(cors())
app.use(express.json())

//Importar funciones desde consultas
const {
  agregarUsuario,
  verificarCredenciales,
  obtenerDatos,
  borrarUsuario,
} = require("./consultas")

//Inicio de servidor
app.listen(3000, () => {
  console.log("Servidor funciona en el puerto 3000")
})

app.use((req, res, next) => {
  console.log(req.mail)

  next()
})

app.post("/users", async (req, res) => {
  try {
    const { user_name, password, mail, phone, created_at, modified_at } =
      req.body
    await agregarUsuario(
      user_name,
      password,
      mail,
      phone,
      created_at,
      modified_at
    )
    res.send("Usuario creado con exito!")
  } catch (error) {
    res.status(500).send(error)
  }
})

//Consulta para login
app.post("/login", async (req, res) => {
  const { mail, password } = req.body
  await verificarCredenciales(mail, password)
  const token = jwt.sign({ mail }, "az_AZ")
  res.send(token)
})

app.get("/users", async (req, res) => {
  const auth = req.header("Authorization")
  const token = auth.split("Bearer ")[1]
  jwt.verify(token, "az_AZ")
  const { mail } = jwt.decode(token)
  const datos = await obtenerDatos(mail)
  res.json(datos)
})
/*
--> Este es para modificar, falta ahí. Es la plantilla de un desafío anterior

app.put('/posts/like/:id', async (req, res) => {
    const { id } = req.params
    await modificarPost(id)
    res.send('Post modificado en la base de datos')
})

*/

app.delete("/users/:id", async (req, res) => {
  const { id } = req.params
  await borrarPost(id)
  res.send("Usuario eliminado en la base de datos")
})
