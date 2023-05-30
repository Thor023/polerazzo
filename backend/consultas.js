const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'polerazzo_db',
    allowExitOnIdle: true
})

//Función ahora para TIMESTAMP
const now = new Date()


//Función para agregar usuario 
const agregarUsuario = async (user_name, password, mail, phone, created_at = now, modified_at = now) => {
    const consulta = 'INSERT INTO users VALUES(DEFAULT, $1, $2, $3, $4, $5, $6)' 
    const values = [user_name, password, mail, phone, created_at, modified_at]
    await pool.query(consulta, values)
    console.log('Usuario agregado de forma exitosa')
}

//Función para agregar leer información de un usuario 
const informacionUsuario = async () => {
    const consulta = 'SELECT * FROM users'
    const { rows } = await pool.query(consulta)
    return rows
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

module.exports = { agregarUsuario, informacionUsuario, borrarUsuario }