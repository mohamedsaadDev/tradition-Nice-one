import React from 'react'
const DoubleBanerimg = ({img1,img2}) => {
    return (
    <div className='w-100 d-flex justify-content-center '>
            <img loading='lazy' src={img1} alt="" style={{borderRadius:"5px",width:"47%",margin:"1%"}} />
            <img loading='lazy' src={img2} alt="" style={{borderRadius:"5px",width:"47%",margin:"1%"}}/>
    </div>
    )
}
export default DoubleBanerimg