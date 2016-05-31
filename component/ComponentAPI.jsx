import React from 'react';

class ComponentAPI extends React.Component {

    constructor() {
        super();

        this.state = {
            data: []
        }

        this.setStateHandler = this.setStateHandler.bind(this);
    }

    setStateHandler() {
        var item = "ajay ...";
        var myArray = this.state.data;
        myArray.push(item);
        this.setState({data : myArray});
    };

    render() {
        return (
            <div>
                <button onClick = {this.setStateHandler}>Set State</button>
                <h3>State array : {this.state.data}</h3>
            </div>
        );
    }
}

export default ComponentAPI;