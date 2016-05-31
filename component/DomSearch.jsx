import React from 'react';
import ReactDOM from 'react-dom';

class DomSearch extends React.Component {

    constructor() {
        super();
        this.testing.bind(this);
    };

    testing() {
        var myDiv = document.getElementById('myDiv');
        ReactDOM.findDOMNode(myDiv).style.color = 'green';
    }

    render() {
        return (
            <div>
                <button onClick = {this.testing}>FIND DOME NODE</button>
                <div id = "myDiv">NODE</div>
            </div>
        );
    }
}

export default DomSearch;