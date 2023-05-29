import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function RegistroForm() {
  const navigate = useNavigate()
  const [usuario, setUsuario] = useState({})

  const handleSetUsuario = ({ target: { value, name } }) => {
    const field = {}
    field[name] = value
    setUsuario({ ...usuario, ...field })
  }

  const registrarUsuario = async () => {
    const urlServer = "http://localhost:3000"
    const endpoint = "/usuarios"
    try {
      await axios.post(urlServer + endpoint, usuario)
      alert("Usuario registrado con éxito")
      navigate("/login")
    } catch (error) {
      alert("Algo salió mal ...")
      console.log(error)
    }
  }

  return (
    <div className="col-10 col-sm-6 col-md-3 m-auto mt-5">
      <h1>Registrar nuevo usuario</h1>
      <hr />
      <div className="form-group mt-1 ">
        <label>usuario</label>
        <input
          value={usuario.user_name}
          onChange={handleSetUsuario}
          type="text"
          name="usuario"
          className="form-control"
          placeholder="Enter username"
        />
      </div>
      <div className="form-group mt-1 ">
        <label>Password</label>
        <input
          value={usuario.password}
          onChange={handleSetUsuario}
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
        />
      </div>
      <div className="form-group mt-1 ">
        <label>email</label>
        <input
          value={usuario.email}
          onChange={handleSetUsuario}
          type="email"
          name="mail"
          className="form-control"
          placeholder="mail"
        />
      </div>
      <div className="form-group mt-1 ">
        <label>phone</label>
        <input
          value={usuario.phone}
          onChange={handleSetUsuario}
          type="tel"
          name="phone"
          className="form-control"
          placeholder="phone"
        />
      </div>

      <button onClick={registrarUsuario} className="btn btn-light mt-3">
        Registrarme
      </button>
    </div>
  )
}
