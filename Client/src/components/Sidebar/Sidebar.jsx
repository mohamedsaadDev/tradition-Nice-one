import React, { useEffect,useState } from 'react'
import "./Sidebar.css"
import { t } from 'i18next'
const Sidebar = ({setprodectfilter,data,prodectfilter}) => {
    const [isCheckedBest,setisCheckedBest]=useState(false)
    const [isCheckedTrend,setisCheckedTrend]=useState(false)
        function handelchecked (){
            if(isCheckedTrend === true){
                const CheckedTrend = data.filter((item)=>item.trending==="trending")
                if(prodectfilter.length < data.length){
                    setprodectfilter([...CheckedTrend,...prodectfilter])
                }else{
                    setprodectfilter(CheckedTrend)
                }
            }
            if(isCheckedBest=== true){
                const CheckedBest = data.filter((item)=>item.bestseller==="best seller")
                setprodectfilter(CheckedBest)
                if(prodectfilter.length < data.length){
                    setprodectfilter(prodectfilter.concat(CheckedBest))
                }else{
                    setprodectfilter(CheckedBest)
                }
            }
            if(isCheckedBest === false &&isCheckedTrend=== false){
                setprodectfilter(data)
            }
        }
        useEffect(()=>{
            handelchecked()
        },[isCheckedBest,isCheckedTrend])
    return (
        <div>
        <aside className='p-10' style={{background:"#ffff",margin:"0 10px"}}>
            <h6 className='fw-bold'>{t('filterby')}</h6>
            <input className='my-3'  type="search" placeholder={t('SearchForproduct')}  />
            <div className='d-flex align-items-center p-0 form-check'>
                <input onClick={()=>setisCheckedTrend(prev=>!prev)} className='mx-2 form-check-input form-check-input-side' id='Trending' type="checkbox" />
                <label className='form-check-label' htmlFor="Trending">{t('trending')}</label>
            </div>
            <div className='d-flex align-items-center form-check p-0'>
                <input  onClick={()=>setisCheckedBest(prev=>!prev)} className='mx-2 form-check-input form-check-input-side' id='Bestseller' type="checkbox" />
                <label className='form-check-label' htmlFor="Bestseller">{t('bestseller')}</label>
            </div>
        </aside>
        </div>
    )
}
export default Sidebar