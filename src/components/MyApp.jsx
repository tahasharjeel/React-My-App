import React, { Component } from 'react';
import logo from './circle-cropped.png';
class MyApp extends Component {
    state = {  };

    stylesNav = {
        backgroundColor: "white",
        paddingTop: 10,
        paddingBottom: 10,
        display: "flex",
        position: 'fixed',
        width: '1535px',
   
    }

  

    render() { 
        return (  
       
            <nav style={this.stylesNav}>
                <label style={{fontWeight: "bold",
                                paddingRight: 10,
                                paddingLeft: 200,
            }}htmlFor="">KroScore</label><input type="text" style = {{ width:500, fontStyle: "italic",marginRight: 400 }} placeholder="🔍 Find Teachers" />
            <label style={{marginRight:20}}>My Subject</label>💚 🛒 🔔<img src={logo} alt="" style = {{
                height:30, width:30,marginLeft:5
            }} />
            </nav>
        
        );
    }
}
 
export default MyApp;
 
