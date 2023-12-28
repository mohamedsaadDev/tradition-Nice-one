import React from 'react'
import { useTranslation } from 'react-i18next';
import Saudi from "../../assets/header/Saudi.png"
import kuwait from "../../assets/header/Kuwait.png"
import Emirates from "../../assets/header/Emirates.png"
import Bahrain from "../../assets/header/Bahrain.png"
import Oman from "../../assets/header/Oman.png"
import qatar from "../../assets/header/qatar.png"
import "./ModelCountry.css"
const ModelCountry = ({setflag}) => {
    const { t } = useTranslation();
    return (
        <div className='model-country'>
        <p>{t('Country')}</p>
        <label onClick={()=>setflag(Saudi)} htmlFor="Saudi">
          <input value="Saudi" id='Saudi' type="radio" name="country" />
          <p>{t('SaudiArabia')} </p>
          <span className='checkmark-fake-country'></span>
        </label>
        <label onClick={()=>setflag(kuwait)} htmlFor="Kuwait">
          <input value="Kuwait" id="Kuwait" type="radio" name="country" />
          <p>{t('Kuwait')}</p>
          <span className='checkmark-fake-country'></span>
        </label>
        <label onClick={()=>setflag(Emirates)} htmlFor="emirates">
          <input value="emirates" id='emirates' type="radio" name="country" />
          <p>{t('Unitedarabemirates')}</p>
          <span className='checkmark-fake-country'></span>
        </label>
        <label onClick={()=>setflag(Bahrain)} htmlFor="Bahrain">
          <input value="Bahrain" id='Bahrain' type="radio"  name="country" />
          <p>{t('Bahrain')}</p>
          <span className='checkmark-fake-country'></span>
        </label>
        <label onClick={()=>setflag(Oman)} htmlFor="Oman">
          <input value="Oman" id='Oman' type="radio" name="country"  />
          <p>{t('Oman')}</p>
          <span className='checkmark-fake-country'></span>
        </label>
        <label onClick={()=>setflag(qatar)} htmlFor="Qatar">
          <input value="Qatar" id='Qatar' type="radio" name="country"  />
          <p>{t('Qatar')}</p>
          <span className='checkmark-fake-country'></span>
        </label>
      </div>
    )
}

export default ModelCountry