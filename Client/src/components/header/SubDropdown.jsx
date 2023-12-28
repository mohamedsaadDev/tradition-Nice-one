import React from 'react'
const SubDropdown = ({subDropdown}) => {
    return (
            <ul className='sub-Dropdown'>
                {subDropdown.map((item,index)=>
                    <li key={index} >{item}</li>
                )}
            </ul>
    )
}
export default SubDropdown