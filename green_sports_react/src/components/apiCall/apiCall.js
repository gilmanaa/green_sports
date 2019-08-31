import React from 'react';
import axios from 'axios';

export default class ApiCall extends React.Component{
    constructor(props) {
        super(props);
        this.getFromDjango = this.getFromDjango.bind(this);
    }
    getFromDjango() {
        console.log("Send get to Django Server");
        axios.get("http://127.0.0.1:8000/react/axios/")
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.getFromDjango}>API Call</button>
            </div>
        )
    }
}