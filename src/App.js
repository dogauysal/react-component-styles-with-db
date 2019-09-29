import React from 'react';
import Component_1 from './components/Component_1';
import Component_2 from './components/Component_2';
import axios from 'axios';
import cssConverter from './cssConverter';

class App extends React.Component {

    state = {
        activeClassNames: [],
        allStyles: [],
        componentOrder: []
    }
    
    getComponent(componentName) {
        switch (componentName) {
            case "Component_1":
                return <Component_1 />;
            case "Component_2": 
                return <Component_2 />; 
            default:
                break;
        }
    }

    componentWillMount() {
        const injectedStyles = document.createElement('style');
        injectedStyles.setAttribute('type', 'text/css');

        axios
        .all([
            axios.get("http://localhost:3001/activeClassNames"),
            axios.get("http://localhost:3001/allStyles"),
            axios.get("http://localhost:3001/componentOrder")
        ])
        .then(axios.spread((resClass,resStyle,resOrder) => {
            this.setState({
                activeClassNames: resClass.data,
                allStyles: resStyle.data,
                componentOrder:resOrder.data
            })
        }))
        .then(() => {
            injectedStyles.innerHTML =  cssConverter(this.state.activeClassNames, this.state.allStyles);
            document.head.appendChild(injectedStyles);
        });
    }
    
    render() {
        return (
            <div className="AppContainer">
                   {this.state.componentOrder.map(c => this.getComponent(c))}
            </div>
        )
    }
}

export default App;