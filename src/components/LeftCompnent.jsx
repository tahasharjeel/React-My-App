import React, { Component } from 'react';

class LeftComponent extends Component {
    state = {  }
    render() { 
        return (  
            <div style={{
                marginLeft:100,
                marginTop:-120
            }}>
                
            <ul style={{
                listStyleType:'none',
                display:"inline-block",
                marginTop:200
                
            }}>
                <label htmlFor="" style={{
                fontWeight:"bold",
                marginLeft:38,
               
            }}
            >Filter By</label>
  <li style={{
      borderBottom:1,
      borderTop:1,
      borderLeft:0,
      borderRight:0,
      width:200,
      borderStyle: 'solid',
      borderColor:'grey',
  }}>Category<p style={{
      marginLeft:100,
      display:"inline-block"
  }}>⬇</p></li>
  <li style={{
      borderBottom:1,
      borderTop:0,
      borderLeft:0,
      borderRight:0,
      width:200,
      borderStyle: 'solid',
      borderColor:'grey'
  }}>Location<p style={{
    marginLeft:104,
    display:"inline-block"
}}>⬇</p></li>
  <li style={{
      borderBottom:1,
      borderTop:0,
      borderLeft:0,
      borderRight:0,
      width:200,
      borderStyle: 'solid',
      borderColor:'grey'
  }}>Price/Month<p style={{
    marginLeft:76,
    display:"inline-block"
}}>⬇</p></li>
  <li style={{
      borderBottom:1,
      borderTop:0,
      borderLeft:0,
      borderRight:0,
      width:200,
      borderStyle: 'solid',
      borderColor:'grey'
  }}>Language<p style={{
    marginLeft:94,
    display:"inline-block"
}}>⬇</p></li>
</ul>
           
           
    
            </div>
            
            );
    }
}
 
export default LeftComponent;