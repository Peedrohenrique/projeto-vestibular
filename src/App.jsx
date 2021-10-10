import React, { Component } from 'react';
import Formulario from './Componets/Formulario/Formulario.jsx'


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
            </div>
        )
    }
}

export default App;