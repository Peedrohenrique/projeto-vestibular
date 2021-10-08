import React, { Component } from 'react';
import Form from './Componets/Form/Form'


class App extends Component{

    constructor(prosp){
        super(prosp);
        this.state = {
           
        }
    }

    render(){
        return(
            <div>
                <Form />
            </div>
        )
    }
}

export default App;