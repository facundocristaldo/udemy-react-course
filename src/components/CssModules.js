import React from 'react';
import styles from './CssModule.module.css'
import StyledComponents from './StyledComponents';

const CssModules = () =>{
    return(
        <div>
            <div className={styles.App}>
                <h2>Css Modules</h2>
            </div>
            <div className="App">
                <h2>deafult css class assigned</h2>
                <p>Note that i didn't inclide App.css in this component</p>
            </div>
            <div>
            <p>Note that A button has a className="SomeButtonStyle" though it doesnt apply properties assign at CssModule.module.css because its not refering to the module</p>
            <StyledComponents/>
            <p> and even if im importing the module in the component, if it's not well referenced, style will not apply</p>
            <button className="SomeButtonStyle">String class name assinged</button>
            <button className={styles.SomeButtonStyle}>styles.classname applied</button>
            </div>
        </div>
    )
}

export default CssModules;