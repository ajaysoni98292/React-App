import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Content from './Content.jsx';
import ValidationContent from './ValidationContent.jsx';
import ComponentAPI from './ComponentAPI.jsx';
import ForceUpdateAPI from './ForceUpdateAPI.jsx';
import FindDomNodeAPI from './FindDomNodeAPI.jsx';

class App extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <Content />
                <ValidationContent />
                <ComponentAPI />
                <Footer footerProps="footer prop" />
                <ForceUpdateAPI />

                <FindDomNodeAPI />
            </div>
        );
    }
}

export default App;