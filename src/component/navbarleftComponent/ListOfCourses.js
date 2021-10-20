import React from 'react';

export default function ListOfCourses(props){
    
   

    
return(
    
<li className='listofcourses pb-5' style={{width:100 +'%'}} >
    <span className= {props.iconName} style={{color:props.color , fontSize:props.fontSize + 'px'}}></span>
    <span className='coursetitle pr-10' style={{fontSize:props.fontSize+ 'px', color:'#fcfcfc'} } >{props.title}</span>

</li>

)
}