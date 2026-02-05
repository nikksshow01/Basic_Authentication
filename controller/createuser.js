import User from "../model/user.js";
import bcrypt from "bcryptjs";


const create_User = async(req,res,next) => {
    try{
        const {name, email, password} = req.body;
        
        const salt = await bcrypt.genSalt(10);

        const hashpass = await bcrypt.hash(password, salt);

        const user = await User.create({name, email, password: hashpass,});
        res.status(201).json({
            message: "User registeerd succesfully",
            user:{
                name: user.name,
                email: user.email,
            }
        });
    }
    catch (err){
        next(err);
    }
};
export default create_User;