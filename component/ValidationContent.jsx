import React from 'react';

class ValidationContent extends React.Component {

    render() {
        return(
            <div>
                <p>{this.props.propArray}</p>
                <p>{this.props.propBool ? "True ..." : "False .."}</p>
                <p>{this.props.propFunc(3)}</p>
                <p>{this.props.propNumber}</p>
                <p>{this.props.propString}</p>
                <p>{this.props.propObject.objectName1}</p>
                <p>{this.props.propObject.objectName2}</p>
             </div>
        );
    }
}

ValidationContent.propTypes = {
    propArray : React.PropTypes.array.isRequired,
    propBool : React.PropTypes.bool.isRequired,
    propFunc : React.PropTypes.func,
    propNumber: React.PropTypes.number,
    propString : React.PropTypes.string,
    propObject : React.PropTypes.object
}

ValidationContent.defaultProps = {
    propArray : [1,2,3,4],
    propBool : true,
    propFunc : function(e) { return e},
    propNumber : 1,
    propString : "ajay",
    propObject :{
        objectName1 : "objectName1",
        objectName2 : "objectName2",
        objectName3 : "ObjectName3"
    }
}

export default ValidationContent;