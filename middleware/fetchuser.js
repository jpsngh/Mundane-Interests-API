import jwt from "jsonwebtoken"
const JWT_SECRET = "HEY THERE"

const fetchuser = (req,res,next)=>{
    
    const token = req.header('auth-token');
    if(!token){res.status(400).send("not valid user")}

    try{
        const string = jwt.verify(token,JWT_SECRET);
        req.user = string.user
        next()
    }
    catch(error){ return {err:error.message}}
}

export default fetchuser