import React, {Component} from 'react';

class Box extends Component{
    render(){
        return(
            <div style={{outlineStyle:"solid",outlineColor:"black",height:200,width:250,display:"flex",justifyContent:"center",alignItems:"center"}}>
                <h1>TOPIC</h1>
            </div>
        )
    }
}
export default Box;