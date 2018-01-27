exports.authenticate = function(req, res, next){
  if(req.headers.authorization === 'password'){
    next();
  }else{
    return res.status(400).jsonp({message:'You may be unauthorized to do this request! Please add the token'});
  }
};
