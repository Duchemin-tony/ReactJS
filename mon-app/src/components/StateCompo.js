/**
 * @author TONY
 * Licence
 * Premier composant pure React
 */
import React, {Component} from 'react';
import './StateCompo.css';

class StateCompo extends Component {
    constructor(props){
        super(props);
        console.log("label" + props.label )
        this.state = { nom : ''};
        //this.handleChange = this.handleChange.bind(this);
    }
    /*handleChange(e){
        console.log("Je passe ici");
        this.setState({ nom : ' Le nouveau '})
    }*/

    handleChange =(e) => {
        console.log(e.target.value);
        this.setState({ nom : e.target.value});
    }

    render(){
        return(
        <div>
            <h6 className="State-h6">Compo State {this.props.label} </h6>
            <input type="text" value={this.state.nom} onChange={this.handleChange} ></input>
        </div>)
    }
}

export default StateCompo;