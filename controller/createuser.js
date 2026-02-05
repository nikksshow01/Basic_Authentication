import User from "../model/user.js";

const create_User = async(req,res,next) => {
    try{
        const {name, email, password} = req.body;
        const user = await User.create({name, email, password});
        res.status(201).json(user);
    }
    catch (err){
        next(err);
    }
};
export default create_User;