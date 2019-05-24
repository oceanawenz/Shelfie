import React, { Component } from 'react';


export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "", 
            price: 0, 
            img_url: ""
        }
    }

    render() {
        return (
            <div className="form">
                <h1>Form</h1>
                <input type = "text"/>
                <input type="text"/>
                <input type="text"/>

                <button>Cancel</button>
                <button>Add</button>

            </div>
        )

    }

}