import { Link, useNavigate} from 'react-router-dom';
import React, {useState } from 'react';
import makeup from "../../assets/header/imgMakeup.png"
import Perfume from "../../assets/header/imgPerfume.png"
import Care from "../../assets/header/imgCare.png"
import Gifts from "../../assets/header/imgGifts.png"
import Nails from "../../assets/header/imgNails.png"
import Lenses from "../../assets/header/imgLenses.png"
import Devices from "../../assets/header/imgDevices.png"
import HomeScents from "../../assets/header/imgHomeScents.png"
import Saudi from "../../assets/header/Saudi.png"
import arrow from "../../assets/arrow.png"
import { Button } from "react-bootstrap";
import SubDropdown from './SubDropdown';
import { useTranslation } from 'react-i18next';
import Cookie from "cookie-universal"
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import ModleLanguage from '../ModleLanguage/ModleLanguage';
import ModelCountry from '../../pages/ModelCountry/ModelCountry';
import NavbarMobile from "./NavbarMobile"
import logoscroll from "../../assets/header/logosctoll.png"
import Search from './Search';
function CNav({scrolled}) {
  const [flag,setflag]=useState(Saudi) 
  const [subDropdown,setsubDropdown]= useState([])
  const isLoggedIn =JSON.parse(localStorage.getItem("isLoggedIn"));
  const Navigate =useNavigate()
  const cookie = Cookie()
  const { t } = useTranslation();
  const logout = ()=>{
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userid");
    cookie.remove('cookie-user');
    window.location.reload()  
  }
  const handlearray ={returnObjects: true }
  const subdropdownmakeup =()=>setsubDropdown(t('subdropdownmakeup',handlearray))
  const subdropdownperfume =()=>setsubDropdown(t('subdropdownPerfume',handlearray))
  const subdropdownCare = ()=>setsubDropdown(t('subdropdownCare',handlearray))
  return (
    <>
      <Navbar className={scrolled?'wrapper-nav-scroll p-0':"wrapper-nav p-0"} expand="lg">
      <Container className={scrolled&&'container-nav-scroll'}>
      <NavbarMobile/>
          <Nav className='container-nav-item m-0' >
            <div className='w-100 d-flex justify-content-between'>
              <div className='container-mian-menu'>
              <Link to='/'><img className={scrolled?'logo-nav logo-nav-scroll':'logo-nav'} src={logoscroll} alt="" /></Link>
                <Nav.Link className='nav-item-Categorie d-flex align-items-center underline-3'>
                  <i className="fa-solid fa-bars px-1"></i> {t('Categorie')}
                  <div className='wrapper-dropdown-nav'>
                        <ul className='dropdown-nav'>
                          <li onMouseEnter={subdropdownmakeup} ><img src={makeup} alt="" /><span> {t('Makeup')}</span></li>
                          <li onMouseEnter={subdropdownperfume}><img src={Perfume} alt="" /> <span>{t('Perfume')}</span></li>
                          <li onMouseEnter={subdropdownCare}><img src={Care} alt="" /> <span>{t('Care')}</span></li>
                          <li><img src={Gifts} alt="" /> <span>{t('Gifts')}</span></li>
                          <li><img src={Nails} alt="" /> <span>{t('Nails')}</span></li>
                          <li><img src={Lenses} alt="" /> <span>{t('Lenses')}</span></li>
                          <li><img src={Devices} alt="" /> <span>{t('Devices')}</span></li>
                          <li><img src={HomeScents} alt="" /> <span>{t('HomeScents')}</span></li>
                        </ul>
                        <SubDropdown subDropdown={subDropdown}/>
                    </div>
                </Nav.Link>
                <Nav.Link className='underline-3'>{t('Makeup')}</Nav.Link>
                <Nav.Link className='underline-3'>{t('Perfume')}</Nav.Link>
                <Nav.Link className='underline-3'>{t('Care')}</Nav.Link>
                <Nav.Link className='underline-3'>{t('Brands')}</Nav.Link>
              </div>
              <Search scrolled={scrolled}/>
              <ul className='m-0 p-0 d-flex align-items-center continer-nav-info'>
                  <li className='nav-item-lang underline-3'>
                    <i className="fa-solid fa-globe"></i> {t('langnav')}<img src={arrow} className='arrow-header ' alt="" />
                    <ModleLanguage/> 
                  </li>
                  <li className='nav-item-country underline-3'>
                    <img className='img-flag' src={flag} alt="" /><img src={arrow} className='arrow-header ' alt="" />
                    <ModelCountry setflag={setflag} />
                  </li>
                  <li className='nav-item-profile underline-3'>
                    <i className="fa-regular fa-user"></i>{t('Profile')}<img className='arrow-header' src={arrow} alt="" />
                    <div className='model-profile'>
                    {
                      !isLoggedIn?
                      <>
                      <Button onClick={()=>Navigate('login')} variant="dark">{t('login')}</Button>
                      <Link to="register" ><p className='mt-10 '>{t('DonotHaveAccount')}</p></Link>
                      </>
                      :<Button  className='btn-profile' onClick={()=>logout()} variant="dark">{t('logout')} <i className="fa-solid fa-right-from-bracket"></i></Button>
                      }
                    </div>
                  </li> 
                  <li className='underline-3'>
                    <i className="fa-regular fa-bell pt-1">
                    </i></li>
                  <Link className="me-2 underline-3" to='cart'><li >
                    <i className="fa-solid fa-basket-shopping text-dark"></i>
                  </li></Link>
                    
                </ul>
            </div>
          </Nav>  
      </Container>
      </Navbar>
    </>
  );
}
export default CNav






/*
<Login 
                      showRegisters={showRegisters} 
                      setshowRegisters={setshowRegisters} 
                      showlogin={showlogin}
                      setshowlogin={setshowlogin} />
<Cart show={show} setshow={setshow} setshowlogin={setshowlogin} />
<Cart show={show} setshow={setshow}/>
<nav>
          <ul className="m-0 pb-0">
            <li><i className="fa-solid fa-bars"></i> {t('Categorie')}
                <div className='wrapper-dropdown-nav'>
                    <ul className='dropdown-nav'>
                      <li onMouseEnter={()=>setsubDropdown(subdrop)} ><img src={makeup} alt="" /><span> {t('Makeup')}</span></li>
                      <li onMouseEnter={()=>setsubDropdown(t('subdropdownPerfume',{ returnObjects: true }))}><img src={Perfume} alt="" /> <span>{t('Perfume')}</span></li>
                      <li onMouseEnter={()=>setsubDropdown(t('subdropdownCare',{ returnObjects: true }))}><img src={Care} alt="" /> <span>{t('Care')}</span></li>
                      <li><img src={Gifts} alt="" /> <span>{t('Gifts')}</span></li>
                      <li><img src={Nails} alt="" /> <span>{t('Nails')}</span></li>
                      <li><img src={Lenses} alt="" /> <span>{t('Lenses')}</span></li>
                      <li><img src={Devices} alt="" /> <span>{t('Devices')}</span></li>
                      <li><img src={HomeScents} alt="" /> <span>{t('HomeScents')}</span></li>
                    </ul>
                    <SubDropdown subDropdown={subDropdown}/>
                </div>
            </li>
            <li>{t('Makeup')}</li>
            <li>{t('Perfume')}</li>
            <li>{t('Care')}</li>
            <li>{t('Brands')}</li>
          </ul>
          <input placeholder='What are you looking for ?' className='input-search-scrolle' type="search" />
          <ul className='info-nav m-0'>
            <li className="mian-language"><i className="fa-solid fa-globe"></i> {t('langnav')} <img src={arrow} className='arrow-header' alt="" />
            <div className='modle-language'>
              <p>{t('language')}</p>
              <div className='grop-radio'>
                  <label  onClick={()=>i18n.changeLanguage("en")}  htmlFor="ar">
                  <input id='en' value="en" name='lang' type="radio" checked="checked" />
                  <p className='mb-0'>العربية(ع)</p>
                  <img src={Saudi} alt="" />
                  </label>
                  <label onClick={()=>i18n.changeLanguage("ar")} htmlFor="en">
                    <input id="ar" value="en" name='lang' type="radio" checked="checked" />
                    <p className='mb-0 mr-2px ml-2'>English(EN)</p>
                    <img src={en} alt="" />
                  </label>  
                </div>
            </div>
            </li>
            <li className='main-country' ><img src={flag} alt="" /><img src={arrow} className='arrow-header' alt="" />
              <div className='model-country'>
                <p>{t('Country')}</p>
                <label onClick={()=>setflag(Saudi)} htmlFor="Saudi">
                  <input value="Saudi" id='Saudi' type="radio" name="country" />
                  <p>{t('SaudiArabia')} </p>
                </label>
                <label onClick={()=>setflag(kuwait)} htmlFor="Kuwait">
                  <input value="Kuwait" id="Kuwait" type="radio" name="country" />
                  <p>{t('Kuwait')}</p>
                </label>
                <label onClick={()=>setflag(Emirates)} htmlFor="emirates">
                  <input value="emirates" id='emirates' type="radio" name="country" />
                  <p>{t('Unitedarabemirates')}</p>
                </label>
                <label onClick={()=>setflag(Bahrain)} htmlFor="Bahrain">
                  <input value="Bahrain" id='Bahrain' type="radio"  name="country" />
                  <p>{t('Bahrain')}</p>
                </label>
                <label onClick={()=>setflag(Oman)} htmlFor="Oman">
                  <input value="Oman" id='Oman' type="radio" name="country"  />
                  <p>{t('Oman')}</p>
                </label>
                <label onClick={()=>setflag(qatar)} htmlFor="Qatar">
                  <input value="Qatar" id='Qatar' type="radio" name="country"  />
                  <p>{t('Qatar')}</p>
                </label>
              </div>
            </li>
            <li className='mian-profile'><i className="fa-regular fa-user"></i>{t('Profile')}<img className='arrow-header' src={arrow} alt="" />
              <div className='model-frofile'>
                {
                  !isLoggedIn?
                  <>
                  <Button onClick={handleShowlogin} variant="dark">{t('login')}</Button>
                  <p className='mt-10 '>{t('DonotHaveAccount')}</p>
                  <Login showlogin={showlogin} handleCloselogin={handleCloselogin} />
                  </>
                  :<Button onClick={()=>logout()} variant="dark">{t('logout')} <i className="fa-solid fa-right-from-bracket"></i></Button>
                }
              </div>
            </li>
            <li><i className="fa-regular fa-bell"></i></li>
            <li className="me-2" onClick={handleShow}>
              <i className="fa-solid fa-basket-shopping"></i>
            </li>
              <Cart show={show} setshow={setshow}/>
          </ul>
        </nav>
        <div className='model-country'>
                    <p>{t('Country')}</p>
                    <label onClick={()=>setflag(Saudi)} htmlFor="Saudi">
                      <input value="Saudi" id='Saudi' type="radio" name="country" />
                      <p>{t('SaudiArabia')} </p>
                    </label>
                    <label onClick={()=>setflag(kuwait)} htmlFor="Kuwait">
                      <input value="Kuwait" id="Kuwait" type="radio" name="country" />
                      <p>{t('Kuwait')}</p>
                    </label>
                    <label onClick={()=>setflag(Emirates)} htmlFor="emirates">
                      <input value="emirates" id='emirates' type="radio" name="country" />
                      <p>{t('Unitedarabemirates')}</p>
                    </label>
                    <label onClick={()=>setflag(Bahrain)} htmlFor="Bahrain">
                      <input value="Bahrain" id='Bahrain' type="radio"  name="country" />
                      <p>{t('Bahrain')}</p>
                    </label>
                    <label onClick={()=>setflag(Oman)} htmlFor="Oman">
                      <input value="Oman" id='Oman' type="radio" name="country"  />
                      <p>{t('Oman')}</p>
                    </label>
                    <label onClick={()=>setflag(qatar)} htmlFor="Qatar">
                      <input value="Qatar" id='Qatar' type="radio" name="country"  />
                      <p>{t('Qatar')}</p>
                    </label>
                  </div>
                  <div className='modle-language'>
                    <p>{t('language')}</p>
                    <div className='grop-radio'>
                        <label  onClick={()=>i18n.changeLanguage("en")}  htmlFor="ss">
                        <input id='ss' value="ss" name='langs' type="radio" checked="checked" />
                        <p className='mb-0'>العربية(ع)</p>
                        <img src={Saudi} alt="" />
                        </label>
                        <label onClick={()=>i18n.changeLanguage("ar")} htmlFor="sss">
                          <input id="sss" value="sss" name='langs' type="radio" checked="checked" />
                          <p className='mb-0 mr-2px ml-2'>English(EN)</p>
                          <img src={en} alt="" />
                        </label>  
                      </div>
                  </div>
*/


















































/*<ul>
            <li>
              <Dropdown>
              <Dropdown.Toggle variant="transparent" id="dropdown-basic">
              <i className="fa-solid fa-bars"></i> Categories 
              </Dropdown.Toggle>
              <Dropdown.Menu className='main-dropdown'>
                    <Dropdown.Item href="#/action-1">
                      <Dropdown>
                        <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                          <img className='item-Categories' src={makeup} alt="" /> Makeup
                        </Dropdown.Toggle>
                          <Dropdown.Menu className='sub-menu'>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                          </Dropdown.Menu>
                      </Dropdown>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-1">
                      <Dropdown>
                        <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                          <img className='item-Categories' src={makeup} alt="" /> Makeup
                        </Dropdown.Toggle>
                          <Dropdown.Menu className='sub-menu'>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                          </Dropdown.Menu>
                      </Dropdown>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-1">
                      <Dropdown>
                        <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                          <img className='item-Categories' src={makeup} alt="" /> Makeup
                        </Dropdown.Toggle>
                          <Dropdown.Menu className='sub-menu'>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                          </Dropdown.Menu>
                      </Dropdown>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-1">
                      <Dropdown>
                        <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                          <img className='item-Categories' src={makeup} alt="" /> Makeup
                        </Dropdown.Toggle>
                          <Dropdown.Menu className='sub-menu'>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                          </Dropdown.Menu>
                      </Dropdown>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                            item
                    </Dropdown.Item>  
              </Dropdown.Menu>
              </Dropdown>
            </li>
            <li><Link to="/">Makeup</Link></li>
            <li><Link to="/">Perfume</Link></li>
            <li><Link to="/">Care</Link></li>
            <li><Link to="/">Brands</Link></li>
          </ul>*/