import React from 'react';

class Component_2 extends React.Component {
    constructor(props) {
        super(props);
    }  

    render() {

        console.log(this.props.style[0]);
        return(
            <div className="abc" style={this.props.style[0]}>
                <h1>Component 2</h1>
            </div>
        );
    }
}

export default Component_2;