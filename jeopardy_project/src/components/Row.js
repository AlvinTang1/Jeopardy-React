import React,{Component} from 'react';
import Box from './Box';
import './Row.css';
class Row extends Component{
    render(){
        return(
            <div className ="container">
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>

            </div>
        )
    }
}
export default Row;