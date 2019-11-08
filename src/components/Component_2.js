import React from 'react';

class Component_2 extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div id={this.props.id} className={this.props.className}>
                <h1>Component 2</h1>
                <p>
                    I am a component!
                </p>
            </div>
        );
    }
}

export default Component_2;