const jwt = require('jsonwebtoken')




exports.requireSignin = (req, res, next) => {
 
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const admin = jwt.verify(token, process.env.JWT_SECRET);
     req.admin = admin;
    }else{
      return res.status(400).json({messeage:"Authorization required"});
  }

  next();
};



exports.adminMiddleware = (req,res,next)=>{

  if(req.admin.role !== 'admin'){
    return res.status(400).json({message:" Admin Access denied"})

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