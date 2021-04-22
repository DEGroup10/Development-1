const jwt = require('jsonwebtoken');

exports.requireSignin = ( req, res, next) => {

    if(req.headers.authorization){
        const token = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
       
    }else{
        return res.status(400).json({ message: 'Authorization Required'});
    }
   
    next();
}

exports.userMiddleware = (req, res, next) => {
    if(req.user.role !== 'user'){
        return res.status(400).json({ message: 'user access denied'});
    }
    next();
}


exports.adminMiddleware = (req, res, next) => {
    if(req.user.role == 'admin'){
        return res.status(400).json({ message: 'Admin access denied'});
    }
    next();
}



exports.requireStoreSignin = (req, res, next) => {
 
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const store = jwt.verify(token, process.env.JWT_SECRET);
     req.store = store;
    }else{
      return res.status(400).json({messeage:"Authorization required"});
  }

  next();
};


exports.storeMiddleware = (req,res,next)=>{
  if(req.store.role !== "store") {
    return res.status(400).json({message:" Store Access denied"})
   
  }
  next();
  
}
