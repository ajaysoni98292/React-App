import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Content from './Content.jsx';

class App extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <Content />
                <Footer footerProps="footer prop" />
            </div>
        );
    }
}

export default App;