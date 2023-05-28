const { Pool } = require('pg')
const bcrypt = require("bcryptjs")


const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'polerazzo',
    allowExitOnIdle: true
})

//Función ahora para TIMESTAMP
const now = new Date()


//Función para agregar usuario con password encriptada
const agregarUsuario = async (user_name, password, mail, phone, created_at = now, modified_at = now) => {
    const passwordEncriptada = bcrypt.hashSync(password)

    const values = [user_name, passwordEncriptada, mail, phone, created_at, modified_at]
    
    const consulta = 'INSERT INTO users VALUES(DEFAULT, $1, $2, $3, $4, $5, $6)' 
    await pool.query(consulta, values)
    console.log('Usuario agregado de forma exitosa')
}

//Función para agregar leer información de un usuario 
const verificarCredenciales = async (mail, password) => {
    const values = [mail]
    const consulta = "SELECT * FROM users WHERE mail = $1"

    const {
        rows: [user],
        rowCount,
    } = await pool.query(consulta, values)

    const { password: passwordEncriptada } = user
    const passwordCorrecta = bcrypt.compareSync(password, passwordEncriptada)

    if (!passwordCorrecta || !rowCount) {
        throw { code: 404, message: "Email o contraseña incorrecta" }
    }
}

const obtenerDatos = async (mail) => {
    const consulta = "SELECT * FROM users WHERE mail = $1"
    const values = [mail]
    const {
        rows: [user],
        rowCount,
    } = await pool.query(consulta, values)

    if (!rowCount) {
        throw { code: 404, message: "Usuario no encontrado" }
    }

    delete user.password
    return user
}


//Función para borrar usuario 
const borrarUsuario = async (id) => {
    try {
        const consulta = "DELETE FROM users WHERE id = $1"
        const values = [id]
        await pool.query(consulta, values)
    }
    catch (error) {
        res.status(500).send('Hola! Tenemos un error acá en el proceso de borrar un usuario')
    }
}

module.exports = { agregarUsuario, verificarCredenciales, obtenerDatos, borrarUsuario }