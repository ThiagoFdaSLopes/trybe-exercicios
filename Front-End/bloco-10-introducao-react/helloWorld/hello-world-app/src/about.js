import React from "react";

class Componente extends React.Component {
    render() {
        const skills = ['CSS', 'HTML', 'JAVASCRIPT', 'JEST']
        const skillsComp = skills.map((element) => <li>{ element }</li>)
        return (
            <div>
                <h1>Thiago Lopes</h1>
                <p> Olá meu nome é Thiago, moro no interior de São Paulo!</p>
                <h2>Minhas Habilidades:</h2>
                <ol> { skillsComp }</ol>
            </div>
        )
    }
}
export default Componente