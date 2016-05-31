import React from 'react';
import ReactDOM from 'react-dom';

export default class FindDomNodeAPI extends React.Component {

    constructor() {
        super();

        this.getDomNodeHandler = this.findDomNodeHandler.bind(this);
    }

    findDomNodeHandler() {
        var myDiv = document.getElementById('greenDiv');
        ReactDOM.findDOMNode(myDiv).style.color = 'green';
    }

    render() {
        return(
            <div>
                <button onClick={this.findDomNodeHandler}>Find Dom</button>
                <div id="greenDiv">This node is available to all component by find node</div>

            </div>
        );
    }
}