//Authorization: Bearer <token>
export default function VerifiJWT(req,res,next){
 const bearerHeader =  req.headers['authorization']

 if (typeof bearerHeader !== 'undefined') {
       const BearerToken = bearerHeader.split(' ')[1]
       req.token = BearerToken
       next()
 }else{
    res.sendStatus(403)
 }
}