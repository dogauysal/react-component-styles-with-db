import React from 'react';
import Component_1 from './components/Component_1';
import Component_2 from './components/Component_2';
import api from './api';
import axios from 'axios';
import cssConverter from './cssConverter';

class App extends React.Component {

    state = {
        component1: [],
        component2: [],
        activeClassNames:[],
        allStyles:[]
    }


    componentWillMount() {
        const injectedStyles = document.createElement('style');
        injectedStyles.setAttribute('type', 'text/css');

        axios
        .all([
            axios.get("http://localhost:3001/activeClassNames"),
            axios.get("http://localhost:3001/allStyles")
        ])
        .then(axios.spread((resClass,resStyle) => {
            this.setState({
                activeClassNames: resClass.data,
                allStyles: resStyle.data
            })
        }))
        .then(() => {
            //injectedStyles.innerHTML = ".abc { color: red },"
            injectedStyles.innerHTML =  cssConverter(this.state.activeClassNames, this.state.allStyles);
            document.head.appendChild(injectedStyles);
        });


        // api.get("/activeClasses").then((response) => {
        //     this.setState({ styleList: response.data })
        // }).then(() => {
        //     api.get("/")
        // })
        //  api.get("/styles")
        //     .then((response) => {
        //         cssConverter(response.data);
        //     } )
            // .then((data) => {
            //     console.log(data);
            //     this.setState({component1: data[0][".Component1"]});
            //     this.setState({component2: data[0][".Component2"]});
            //     console.log("com1");
            //     console.log(this.state.component1);
            //     console.log("com1str");
            //     console.log(this.state.component1.toString());
            //     cssConverter(this.state.component1)


            // });
            

           
    }
    
    render() {
        
 


        const { component1, component2  } = this.state

        return (
            <div className="">
                <Component_1 style={component1} />
                <Component_2 style={component2} />
            </div>
        )
    }
}

export default App;