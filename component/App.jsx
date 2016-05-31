import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Content from './Content.jsx';
import ValidationContent from './ValidationContent.jsx';
import ComponentAPI from './ComponentAPI.jsx';
import ForceUpdateAPI from './ForceUpdateAPI.jsx';
import FindDomNodeAPI from './FindDomNodeAPI.jsx';
import Refresh from './Refresh.jsx';
import DomSearch from './DomSearch.jsx';
import FormFeatures from './FormFeatures.jsx';
import SimpleEvent from './SimpleEvent.jsx';
class App extends React.Component {


    render() {
        return (
            <div>
                <SimpleEvent />
            </div>
        );
    }
}

export default App;