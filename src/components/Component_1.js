import React from 'react';

class Component_1 extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        const style = {
            margin: '40px',
            border: '5px solid pink',
            fontSize: "10px"
        }

        const abc = this.props.style[0];
        console.log(style);
        console.log(abc);
        return(
            <div className="Component1">
                <h1>Component 1</h1>
            </div>
        );
    }

    
}

export default Component_1;