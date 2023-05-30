import { useContext, useState, useEffect } from "react"
import Context from "../context/Context"
import axios from "axios"

export default function Home() {
  const { setUsuario: setUsuarioGlobal } = useContext(Context)

  const [usuario, setUsuarioLocal] = useState({})

  const getUsuarioData = async () => {
    const urlServer = "http://localhost:3000"
    const endpoint = "/users"
    const token = localStorage.getItem("token")

    try {
      const { data } = await axios.get(urlServer + endpoint, {
        headers: { Authorization: "Bearer " + token },
      })
      setUsuarioGlobal(data)
      setUsuarioLocal(data)
    } catch ({ response: { data: message } }) {
      alert(message + " 🙁")
      console.log(message)
    }
  }

  useEffect(() => {
    getUsuarioData()
  }, [])

  return (
    <div className="py-5">
      <h1>
        Bienvenido <span className="fw-bold">{usuario.email}</span>
      </h1>
      <h3>
        {usuario.rol} en {usuario.lenguage}
      </h3>
    </div>
  )
}
