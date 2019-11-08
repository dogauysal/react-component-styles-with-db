import React from 'react';

class Component_1 extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div id={this.props.id} className={this.props.className}>
                <h1>Component 1</h1>
            </div>
        );
    }  
}

export default Component_1;