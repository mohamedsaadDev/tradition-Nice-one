import React from "react";
import "./main.css"
import 'swiper/css/pagination';
import baner4 from "../../assets/baner/baner4.png"
import banerSlide1_1 from "../../assets/banermobile/banerslide1.1.gif"
import banerSlide1_2 from "../../assets/banermobile/banerslide1.2.png"
import banerSlide1_3 from "../../assets/baner/banerslide1.3.png"
import makeup from "../../assets/makeup.png"
import lenses from "../../assets/lenses.png"
import care from "../../assets/care.png"
import devices from "../../assets/devices.png"
import womenperfumes from "../../assets/womenperfumes.png"
import menperfumes from "../../assets/menperfumes.png"
import nicheperfumes from "../../assets/nicheperfumes.png"
import hairmist from "../../assets/hairmist.png"
import Baners from '../../components/Baners/Baners';
import DoubleBanerimg from "../../components/DoubleBanerimg/DoubleBanerimg";
import DoubleBanerimg2_1 from "../../assets/baner/DoubleBanerimg2.2.png"
import DoubleBanerimg2_2 from "../../assets/baner/DoubleBanerimg2.1.png"
import BanerOne1 from "../../assets/baner/banerone1.png"
import BanerOne2 from "../../assets/baner/banerone2.png"
import BanerOne3 from "../../assets/baner/banerone3.png"
import BanerOneMobile1 from "../../assets/banermobile/banerone1.gif"
import BanerOneMobile2 from "../../assets/banermobile/banerone2.gif"
import BanerOneMobile3 from "../../assets/banermobile/banerone3.gif"
import slidetowmobile1 from "../../assets/banermobile/banerslidetow1.png"
import slidetowmobile2 from "../../assets/banermobile/banerslidetow2.gif"
import slidetow1  from "../../assets/baner/banerslidetow1.png"
import slidetow2  from "../../assets/baner/banerslidetow2.png"
import banertow1 from "../../assets/baner/banertow1.png"
import banertow2 from "../../assets/baner/banertow2.png"
import banertow3 from "../../assets/baner/banertow3.png"
import banertow4 from "../../assets/baner/banertow4.png"
import banertow5 from "../../assets/baner/banertow5.png"
import banertowM1 from "../../assets/banermobile/banerslidethree1.png"
import banertowM2 from "../../assets/banermobile/banerslidethree2.png"
import banertowM3 from "../../assets/banermobile/banerslidethree3.gif"
import banertowM4 from "../../assets/banermobile/banerslidethree4.png"
import banertowM5 from "../../assets/banermobile/banerslidethree5.png"
import banerfor from "../../assets/banermobile/banerfor.png"
import DoubleBaner1 from "../../assets/banermobile/DoubleBanerone1.png"
import DoubleBaner2 from "../../assets/banermobile/DoubleBanerone2.png"
import { Link, Outlet } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";
import ProdectSlide from "../../components/ProdectSlide/ProdectSlide";
import BanerSlide from "../../components/BanerSlide/BanerSlide";
const Main = () => {
  return (
    <main>
      <div className='wrapper-slideOne'>
        <BanerSlide banerSlide={[banerSlide1_3]}/>
      </div>
      <div className="wrapper-slideOne-mobile">
        <BanerSlide banerSlide={[banerSlide1_1,banerSlide1_2]}/> 
      </div>
      <div className='wrapping-img-main px-3 my-2'> 
        <div className="d-flex justify-content-center">
          <Link className="wrappring-img-main" to="makeup"><img src={makeup} alt="" /></Link>
          <Link className="wrappring-img-main" to="makeup"><img src={lenses} alt="" /></Link>
          <Link className="wrappring-img-main" to="care"><img src={care} alt="" /></Link>
          <Link className="wrappring-img-main" to="devices"><img src={devices} alt="" /></Link>
        </div>
        <div className="d-flex justify-content-center">
          <Link className="wrappring-img-main" to="makeup"><img src={womenperfumes} alt="" /></Link>
          <Link className="wrappring-img-main" to="makeup"><img src={menperfumes} alt="" /></Link>
          <Link className="wrappring-img-main" to="makeup"><img src={nicheperfumes} alt="" /></Link>
          <Link className="wrappring-img-main" to="makeup"><img src={hairmist} alt="" /></Link>
        </div>
      </div>
      <div className="wrapper-banersOne">
        <Baners baners={[BanerOne1,BanerOne2,BanerOne3]}/>
      </div>
      <div className="wrapper-banersOne-mobile">
        <Baners baners={[BanerOneMobile1,BanerOneMobile2,BanerOneMobile3]}/>
      </div>
      <div className="wrapper-slideTwo">
        <BanerSlide banerSlide={[slidetow1,slidetow2]}/>
      </div>
      <div className="wrapper-slideTwo-mobile">
        <BanerSlide banerSlide={[slidetowmobile1,slidetowmobile2]}/>
      </div>
      <ProdectSlide />
      <div className="wrapper-baner Hide-Mobile">
        <Baners baners={[banertow1,banertow2,banertow3,banertow4,banertow5]}/>
      </div>
      <div className="Hide-big show-Mobile">
        <Baners baners={[banertowM1,banertowM2,banertowM3,banertowM4,banertowM5]}/>
      </div>
        <ProdectSlide />
      <div className="Hide-Mobile">
        <Baners baners={[baner4]}/>
      </div>
      <div className="show-Mobile Hide-big">
        <Baners baners={[banerfor]}/>
      </div>
      <div className="Hide-Mobile">
        <DoubleBanerimg img1={DoubleBanerimg2_1} img2={DoubleBanerimg2_2} />
      </div>
      <div className=" show-Mobile Hide-big">
        <DoubleBanerimg img1={DoubleBaner1} img2={DoubleBaner2} />
      </div>
        <ProdectSlide />
      <AboutUs/>
      <Outlet/>
    </main>
  )
}
export default Main