import { useState } from "react"
import { UsuarioSaida } from "./UsuarioSaida"
import "./style.css"

export function UsuarioEntrada() {
    const [nome, setNome] = useState()

    return (
        <div className="container">
            <div className="container-input">
                <label >Nome: </label>
                <input type="text" placeholder="Digite o nome" onChange={event => setNome(event.target.value)} />
            </div>

            <div>
                <UsuarioSaida estatico="Fernando" dinamico={nome} />
            </div>
        </div>

    )
}