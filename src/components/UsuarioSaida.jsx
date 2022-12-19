import "./style.css"
export function UsuarioSaida(props) {
    return (
        <div> 
            <p>Nome do usuario: {props.estatico}</p>
            <p>O nome de usuário informado acima foi inserido via (props) de forma estática na linha 16 no componentes React chamados "UsuarioEntrada" </p>

            <p>Nome do usuario: {props.dinamico}</p>
            <p>O nome de usuário informado acima foi coletado atravez de caixa de (input) na linha 12 e foi inserido via (props) de forma dinâmica na linha 16 
                no componente React do projeto chamados "UsuarioEntrada". Este dado coletado é atualizado e inserido em tempo real no componente "UsuarioSaida" acima deste paragrafo.</p>
        </div>

    )
}
