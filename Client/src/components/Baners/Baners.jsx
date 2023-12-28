import React from 'react'
import "./baners.css"
const Baners = ({baners}) => {
    return (
        <section className='baners'>
            {baners.map((baner,index)=>
            <div key={index}>
                <img loading='lazy' className='col-12' src={baner} alt="" />
            </div>
            )}
        </section>
    )
}

export default Baners