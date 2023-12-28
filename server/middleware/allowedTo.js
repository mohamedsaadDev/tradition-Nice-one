module.exports = (...roles)=>{
    return (req, res, next)=>{
        if(!roles.includes(req.currentUser.role)){
            return next(console.log("this role not authrized"))
        }
        next()
    }
}