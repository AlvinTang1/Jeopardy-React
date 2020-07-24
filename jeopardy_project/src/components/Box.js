import React, {Component} from 'react';

class Box extends Component{
    render(){
        return(
            <div className="box" style={{outlineStyle:"solid",width:"200px",outlineColor:"black",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <h1>TOPIC</h1>
            </div>
        )
    }
}
export default Box;