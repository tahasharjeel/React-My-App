import React, { Component } from 'react';
import logo from './circle-cropped.png';

class Main extends Component {
    state = {  }
    render() { 
        return ( 
            

            <div style={{
                backgroundColor:"white",
                height:1300,
                width:1000,
                marginTop:80,
                marginLeft:50,
                
                
            }}>
                <div style={{
                    paddingTop:20
                }}>
                
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                
                    <input className="form-control my-0 py-1" type="text" placeholder="Search" style={{
                        marginTop:50,marginLeft:30,padding:10,fontSize:17,border:1,borderStyle:'solid',borderColor:'grey',float:"left",width:900
                    }} />
                    <button type="submit" style={{
                        float:"left", height:35, width:35,background:"green",color:'white',fontSize:17,border:1, borderStyle:'solid',borderColor: "grey",borderLeft:'none',cursor:'pointer'
                    }}><i className="fa fa-search"></i></button>
                  
                </div>
                <div>
                    <table style={{
                        marginLeft:50,marginTop:50,borderBottom:0,
                        borderTop:1,
                        borderLeft:0,
                        borderRight:0,
                      
                        borderStyle: 'solid',
                        borderColor:'grey',
                    }}>
                        <tbody>
                            <tr>
                            <td style={{
                                width:120
                            }}>
                            <img src={logo} alt="" style={{ width:100,height:100 }}/>
                            </td>
                            <td style={{
                                width:600
                            }}>
                                <h5 style={{color:"green"}}>Rahul Rawat</h5>
                                <h5>Math expert having 6 years of Exp.</h5>
                                <p>Chandigarh</p>
                            </td>
                            <td>
                                <h5 style={{
                                    marginRight:5, display:"inline-block"
                                }}>💚</h5><button style={{
                                    background:'green',color:'white',border:1, borderStyle:'solid'
                                }}>🛒 Add To Cart</button>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                    <table style={{ marginLeft:50,marginTop:10}}>
                        <tbody>
                            <tr>
                            <td style={{
                                width:180
                            }}>
                                <p><b>Fee: 2500/m</b></p>
                            </td>
                            <td style={{
                                width:180
                            }}>
                               <p><b>500+</b> enrolled</p>
                            </td>
                            <td>
                                <p>⭐⭐⭐⭐⭐</p>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                    <p style={{marginLeft:50,marginRight:50}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <b style={{marginLeft:50}}>Time: </b><button style={{
                                   border:1, borderStyle:'solid'
                                }}>5pm-6pm</button>     <button style={{
                                    border:1, borderStyle:'solid'
                                 }}>6pm-7pm</button>     <button style={{
                                    border:1, borderStyle:'solid'
                                 }}>7pm-8pm</button>
                </div>
                <div>
                    <table style={{
                        marginLeft:50,marginTop:50,borderBottom:0,
                        borderTop:1,
                        borderLeft:0,
                        borderRight:0,
                      
                        borderStyle: 'solid',
                        borderColor:'grey',
                    }}>
                        <tbody>
                            <tr>
                            <td style={{
                                width:120
                            }}>
                            <img src={logo} alt="" style={{ width:100,height:100 }}/>
                            </td>
                            <td style={{
                                width:600
                            }}>
                                <h5 style={{color:"green"}}>Rahul Rawat</h5>
                                <h5>Math expert having 6 years of Exp.</h5>
                                <p>Chandigarh</p>
                            </td>
                            <td>
                                <h5 style={{
                                    marginRight:5, display:"inline-block"
                                }}>💚</h5><button style={{
                                    background:'green',color:'white',border:1, borderStyle:'solid'
                                }}>🛒 Add To Cart</button>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                    <table style={{ marginLeft:50,marginTop:10}}>
                        <tbody>
                            <tr>
                            <td style={{
                                width:180
                            }}>
                                <p><b>Fee: 2500/m</b></p>
                            </td>
                            <td style={{
                                width:180
                            }}>
                               <p><b>500+</b> enrolled</p>
                            </td>
                            <td>
                                <p>⭐⭐⭐⭐⭐</p>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                    <p style={{marginLeft:50,marginRight:50}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <b style={{marginLeft:50}}>Time: </b><button style={{
                                   border:1, borderStyle:'solid'
                                }}>5pm-6pm</button>     <button style={{
                                    border:1, borderStyle:'solid'
                                 }}>6pm-7pm</button>     <button style={{
                                    border:1, borderStyle:'solid'
                                 }}>7pm-8pm</button>
                </div>
                <div>
                    <table style={{
                        marginLeft:50,marginTop:50,borderBottom:0,
                        borderTop:1,
                        borderLeft:0,
                        borderRight:0,
                      
                        borderStyle: 'solid',
                        borderColor:'grey',
                    }}>
                        <tbody>
                            <tr>
                            <td style={{
                                width:120
                            }}>
                            <img src={logo} alt="" style={{ width:100,height:100 }}/>
                            </td>
                            <td style={{
                                width:600
                            }}>
                                <h5 style={{color:"green"}}>Rahul Rawat</h5>
                                <h5>Math expert having 6 years of Exp.</h5>
                                <p>Chandigarh</p>
                            </td>
                            <td>
                                <h5 style={{
                                    marginRight:5, display:"inline-block"
                                }}>💚</h5><button style={{
                                    background:'green',color:'white',border:1, borderStyle:'solid'
                                }}>🛒 Add To Cart</button>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                    <table style={{ marginLeft:50,marginTop:10}}>
                        <tbody>
                            <tr>
                            <td style={{
                                width:180
                            }}>
                                <p><b>Fee: 2500/m</b></p>
                            </td>
                            <td style={{
                                width:180
                            }}>
                               <p><b>500+</b> enrolled</p>
                            </td>
                            <td>
                                <p>⭐⭐⭐⭐⭐</p>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                    <p style={{marginLeft:50,marginRight:50}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <b style={{marginLeft:50}}>Time: </b><button style={{
                                   border:1, borderStyle:'solid'
                                }}>5pm-6pm</button>     <button style={{
                                    border:1, borderStyle:'solid'
                                 }}>6pm-7pm</button>     <button style={{
                                    border:1, borderStyle:'solid'
                                 }}>7pm-8pm</button>
                </div>
                <div>
                    <table style={{
                        marginLeft:50,marginTop:50,borderBottom:0,
                        borderTop:1,
                        borderLeft:0,
                        borderRight:0,
                      
                        borderStyle: 'solid',
                        borderColor:'grey',
                    }}>
                        <tbody>
                            <tr>
                            <td style={{
                                width:120
                            }}>
                            <img src={logo} alt="" style={{ width:100,height:100 }}/>
                            </td>
                            <td style={{
                                width:600
                            }}>
                                <h5 style={{color:"green"}}>Rahul Rawat</h5>
                                <h5>Math expert having 6 years of Exp.</h5>
                                <p>Chandigarh</p>
                            </td>
                            <td>
                                <h5 style={{
                                    marginRight:5, display:"inline-block"
                                }}>💚</h5><button style={{
                                    background:'green',color:'white',border:1, borderStyle:'solid'
                                }}>🛒 Add To Cart</button>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                    <table style={{ marginLeft:50,marginTop:10}}>
                        <tbody>
                            <tr>
                            <td style={{
                                width:180
                            }}>
                                <p><b>Fee: 2500/m</b></p>
                            </td>
                            <td style={{
                                width:180
                            }}>
                               <p><b>500+</b> enrolled</p>
                            </td>
                            <td>
                                <p>⭐⭐⭐⭐⭐</p>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                    <p style={{marginLeft:50,marginRight:50}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <b style={{marginLeft:50}}>Time: </b><button style={{
                                   border:1, borderStyle:'solid'
                                }}>5pm-6pm</button>     <button style={{
                                    border:1, borderStyle:'solid'
                                 }}>6pm-7pm</button>     <button style={{
                                    border:1, borderStyle:'solid'
                                 }}>7pm-8pm</button>
                </div>
            </div> 
           
         );
    }
}
 
export default Main;
