const ApiError = require('../error/ApiError') 
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require('../models/model')
const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}
class UserController {
    async registration (req, res, next) {
         const {email, password, role} = req.body
         if(!email || !password) {
             return next(ApiError.badRequest('ne korektni email ili parol'))
         }
         const candidate = await User.findOne( {where: {email}})
         if(candidate ) {
             return next(ApiError.badRequest('polzovatel s takim emailom uje sushestvuet'))
         }
         const hashPassword  = await bcrypt.hash(password, 5)
         const user = await User.create({email, role, password: hashPassword})
         generateJwt = (id, email, role) => {
             process.env.SECRET_KEY, {expiresIn: '24h'}

         }
         return res.json({token})
    }
    async login(req, res, next) {
        const {email, password} = req.body
        const user =await User.findOne({where: {email}})
        if(!user) {
            return next( ApiError.badRequest("polzovaetl s takim imenem ne sushestvuet"))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword){
            return next( ApiError.badRequest("ukazan ne pravilni password"))
        }
        const token = generateJWT(user.id, user.email, user.role)
        return res.json(token)
        }
    async check (req, res, next) {
    const token = generateJWT(req.user.id, req.user.email, req.user.role)
    return res.json({token})
  }
}

module.exports  = new UserController()