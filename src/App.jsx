import React, { Component } from 'react';
import Formulario from './Componets/Formulario/Formulario.jsx'
import Button from './Componets/Button/Button'


class App extends Component{

    constructor(prosp){
        super(prosp);
        this.state = {
           
        }
    }

    render(){
        return(
            <div>
                <Formulario />
                <Button />
            </div>
        )
    }
}

export default App;