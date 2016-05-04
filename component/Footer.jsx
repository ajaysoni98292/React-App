import React from 'react';

class Footer extends React.Component{

    render() {
        return (
            <div>
                <h1>Footer</h1>
                <p>{this.props.footerProps}</p>
                <p>{this.props.content}</p>
            </div>
        );
    }
}

Footer.defaultProps = {
    content : "Testing content"
}

export default Footer;