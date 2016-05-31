import React from 'react';

export default class SimpleEvent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data : 1
        }

        this.updateState = this.updateState.bind(this);
    }

    updateState() {
        this.state.data = this.state.data + 1;
        this.setState({data : this.state.data});
    }

    render() {
        return(
                <ChildEventSubscriber mydataProp = {this.state.data} updateSatateProp={this.updateState} />
        );
    }
}

class ChildEventSubscriber extends React.Component {

    render() {
        return(
            <div>
                <button onClick={this.props.updateSatateProp} >Show</button>
                <h3>{this.props.mydataProp}</h3>
            </div>
        );
    }
}