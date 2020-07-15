/**
 * @author TONY
 * Licence
 * Premier composant pure React
 */
import React from 'react';
import './PureCompo.css';

export function PureCompo() {
    return (
        <div>
            <h6 className="pure-h6" >Pure Compo</h6>
        </div>
    )
}

export function PureCompoProps({label, age}) {
    return (
        <div>
            <h6 className="pureProps-h6" >Pure Compo Props {label} qui à {age} ans</h6>
        </div>
    )
}

//export default PureCompo;
//export default PureCompoProps;