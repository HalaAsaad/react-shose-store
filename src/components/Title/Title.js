import Hoc from "../../Hoc/Hoc";
import React from 'react';

const Title = ({name, title}) => {
    return ( 
        <Hoc>
            <div className='text-title'>
                <h1>
                    {name} <strong style={{color:'#2a2a72'}}>{title}</strong>
                </h1>
            </div>
        </Hoc>
     );
}
 
export default Title;