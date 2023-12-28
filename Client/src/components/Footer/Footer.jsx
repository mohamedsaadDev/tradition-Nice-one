import React from 'react'
import "./Footer.css"
import googleplay from "../../assets/googleplay.png"
import appstore from "../../assets/appstore.png"
import mada from "../../assets/mada.png"
import master from "../../assets/master.png"
import visa from "../../assets/visa.png"
import pay from "../../assets/pay.svg"
import tmara from "../../assets/tmara.svg"
import imgess from "../../assets/d18062b.png"
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom'
const Footer = () => {
    const { t,i18n } = useTranslation();
    const navget =useNavigate()
    const movinginorder = ()=>{
        const isLoggedIn =JSON.parse(localStorage.getItem("isLoggedIn"));
        isLoggedIn && navget('/Orders')
    }
    const date = new Date()
    return(
        <footer>
            <div className='middle-footer'>
                <div className='wrapper-items-footer'>
                    <ul>
                        <li><h4 className='title-middle-footer'>{t('PopularCategories')}</h4></li>
                        <li className='item-middle-footer w-25'><Link to='makeup' className='text-dark'>{t('Makeup')}</Link></li>
                        <li className='item-middle-footer w-25'><Link to='makeup' className='text-dark'>{t('Perfume')}</Link></li>
                        <li className='item-middle-footer w-25'><Link to='care' className='text-dark'>{t('Care')}</Link></li>
                        <li className='item-middle-footer w-25'><Link to='makeup' className='text-dark'>{t('Nails')}</Link></li>
                        <li className='item-middle-footer w-25'><Link to='makeup' className='text-dark'>{t('Accessories')}</Link></li>
                        <li className='item-middle-footer w-25'><Link to='makeup' className='text-dark'>{t('Lenses')}</Link></li>
                    </ul>
                    <ul>
                        <li><h4 className='title-middle-footer'>{t('Niceone')}</h4></li>
                        <li className='item-middle-footer w-25'>{t('Jobs')}</li>
                        <li className='item-middle-footer w-75'>{t('termsandconditions')}</li>
                        <li className='item-middle-footer'>{t('Exchangeandreturnpolicy')}</li>
                        <li className='item-middle-footer w-25'>{t('Privacy')}</li>
                    </ul>
                    <ul>
                        <li><h4 className='title-middle-footer'>{t('Profile')}</h4></li>
                        <li className='item-middle-footer w-75'>{t('Profile')}</li>
                        <li onClick={()=>movinginorder()} className='item-middle-footer w-75'>{t('Orders')}</li>
                        <li className='item-middle-footer'>{t('Favourite')}</li>
                    </ul>
                </div>
                <div>
                    <h4 className='title-middle-footer'>{t('Stayconnected')}</h4>
                    <div className='wrapper-icons'>
                        <section>
                            <i className="fa-brands fa-facebook-f icon-middle-footer"></i>
                            <i className="fa-brands fa-youtube icon-middle-footer"></i>
                            <i className="fa-brands fa-instagram icon-middle-footer"></i>
                        </section>
                        <section>
                            <i className="fa-brands fa-snapchat icon-middle-footer"></i>
                            <i className="fa-brands fa-twitter icon-middle-footer"></i>
                            <i className="fa-brands fa-linkedin-in icon-middle-footer"></i>
                        </section>
                    </div>
                </div>
                <div className='wrapper-img-footer'>
                    <h4 className='title-middle-footer'>{t('Downloadourapps')}</h4>
                    <img className='d-block img-middle-footer' src={googleplay} alt="" />
                    <img className='img-middle-footer' src={appstore} alt="" />
                </div>
            </div>
            <div className='end-footer '>
                <div>
                    <img className='visa-endfooter' src={mada} alt="" />
                    <img className='visa-endfooter' src={master} alt="" />
                    <img className='visa-endfooter' src={visa} alt="" />
                    <img className='visa-endfooter' src={pay} alt="" />
                    <img className='visa-endfooter' src={tmara} alt="" />
                </div>
                <div className='d-flex align-items-center'>
                    <div className='px-3'>
                    {i18n.language ==="ar" ?
                    <p className='mb-0 titleCopyright-endfooter'>{date.getFullYear()} © جميع الحقوق محفوظة لنايس ون</p>
                    :<p className='mb-0 titleCopyright-endfooter'>Copyright © {date.getFullYear()} Nice one. All rights reserved</p> }
                        <span className='vat-endfooter'>{t('CRNo')}</span>
                    </div>
                    <img className='img-endfooter' src={imgess} alt="" />
                </div>
            </div>
        </footer>
    )
}
export default Footer