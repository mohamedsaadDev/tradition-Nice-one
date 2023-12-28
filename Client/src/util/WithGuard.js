import React from "react";
const WithGuard = (Component) => {
    const Wrapper =  ()=>{
        const isLoggedIn =JSON.parse(localStorage.getItem("isLoggedIn"));
        return  isLoggedIn ? <Component/> :<div className="w-100 text-center"><p className="p-3 font-weight-bold text-danger">Please login</p></div>
    }
    return Wrapper
}


export default WithGuard    