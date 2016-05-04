import React from 'react';

class Header extends React.Component {

    constructor() {
        super();

        this.state = {
            header : "Header section ",
            "content" : "testing state"
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.header}</h1>
                <p>{this.state.content}</p>
            </div>
        );
    }
}

export default Header;