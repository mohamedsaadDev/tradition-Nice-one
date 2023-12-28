import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import { Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Search = ({scrolled}) => {
    const { t,i18n } = useTranslation();
    const [search,setsearch]=useState("")
    const { products} =useSelector((state)=>state.products)
    let datasearch = products.filter(a=>a.title.includes(search))
    return (
        <div className={scrolled?'search-scrolled constianer-search ':'constianer-search'}>
            <input value={search} onChange={(e)=>setsearch(e.target.value)} placeholder={t('placeholdersearch')} className={scrolled?'input-search-scrolle show-search':'input-search-scrolle'} type="search" />
                <div className='box-search'>
                {
                    datasearch.map((item)=>
                    <Link className='d-block' key={item._id} to={`/product/${item._id}`}>{i18n.language === "en" ? item.title : item.title_ar}</Link>)
                }
                </div>
        </div>
    )
}
export default Search