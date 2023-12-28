import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import "./Breadcrumb.css"
import { useTranslation } from 'react-i18next';

const CBreadcrumb = (props) => {
    const { t } = useTranslation();
    return (
        <Breadcrumb style={{border:"none",padding:"7px 15px",background:"#f4f4f4"}}>
            <Breadcrumb.Item ><Link to="/" style={{color:"rgba(0,0,0,.45)",fontSize:"12px"}} >{t('Home')}</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to={`/${props.type}`} style={{color:"rgba(0,0,0,.45)",fontSize:"12px"}}>{t(props.type)}</Link></Breadcrumb.Item>
            {props.title? <Breadcrumb.Item className='Breadcrumb-Hide'><Link style={{color:"rgba(0,0,0,.45)",fontSize:"12px"}}>{props.title}</Link></Breadcrumb.Item>:""}
        </Breadcrumb>
    )
}

export default CBreadcrumb