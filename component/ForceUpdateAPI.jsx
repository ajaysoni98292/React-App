import React from 'react';

export default class ForceUpdateAPI extends React.Component {

    constructor() {
        super();

        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    }

    forceUpdateHandler() {
        this.forceUpdate();
    }

    render() {
        return(
            <div>
                <button onClick={this.forceUpdateHandler}>Force Update</button>
                <h4>Random Number : {Math.random()}</h4>
            </div>
        );
    }
}