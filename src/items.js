import React, { useState, useEffect } from "react"; 
import styled from 'styled-components';
import { Player } from 'video-react'; 


function Items(props) {
    const { items, removeHandler } = props;  
    const Box = styled.div({ 
      textAlign: "center"
  
    });
    const VideoBox = styled.div({  
      marginLeft: '40%',
      height: '40%',
      width: '25%'
    }); 


 
    return (
  
      <Box>
      <div> 
       
        <ol>
          {items.map((data, index) => (
            <li
              key={index} 
            > 
            <VideoBox> 
               <Player>
                <source src={data.Url != undefined ? data.Url : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4" }/>
                </Player>
                
            </VideoBox> 

            <div>NAME:  {data.Name}</div>
            <div>Description: {data.Description}</div> 
           
            
              <button onClick={() => removeHandler(index)}>
                <span role="img" aria-label="remove">
                  ❌
                </span>
          
              </button>
            </li>
          ))}
        </ol>
      
        </div>
        </Box>
    );
  }
  export default Items;