import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

class App extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <p>App is content</p>
                <Footer />
            </div>
        );
    }
}

export default App;