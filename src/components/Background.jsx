import React, { Component } from 'react';
import MyApp from './MyApp';
import LeftComponent from './LeftCompnent';
import Main from './Main';

class Background extends Component {
    state = {  };


    render() { 
        return (
   
           
                    <div  style={{
            backgroundColor: '#F0F0F0',
            width: 1535,
            height: 1600,
            display:'flex',
            flexDirection: 'row',
            
          }}>
              
            <MyApp />
            <LeftComponent />
            <Main />
            
            
        </div> 
                    
                  
                    
        
       
            
    
   
        );
    }
}
 
export default Background;
