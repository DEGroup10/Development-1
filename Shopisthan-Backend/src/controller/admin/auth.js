
const Admin = require('../../models/admin/auth')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Store = require('../../models/store/store')

exports.signup = (req, res) => {
    Admin.findOne({ email: req.body.email })
        .exec(async (error, admin) => {

            if (admin) return res.status(400).json({
                message: "Admin already registered"
            });

            const {
                firstName,
                lastName,
                email,
                password
            } = req.body;
            // const hash_password = await bcrypt.hash(password, 10);
        
            const _admin = new Admin({
                firstName,
                lastName,
                email,
                password,
                username: firstName+lastName,
                role: 'admin'
            });
             const salt = await bcrypt.genSalt(10);
            _admin.password = await bcrypt.hash(password,salt);
            _admin.save((error, data) => {
                if (error) {
                    return res.status(400).json({
                        error
                    })
                }
                if (data) {
                    return res.status(201).json({
                        message: "Admin created Successfully...!"
                    })
                }
            })
        });
}



// exports.signin = (req, res) => {
//     Admin.findOne({ email: req.body.email })
//         .exec((error, admin) => {
//             if (error) return res.status(400).json({ error })
//             if (admin) {

//                 if (admin.authenticate(req.body.password) && admin.role === 'admin') {
//                     const token = jwt.sign({ _id: admin._id, role: admin.role }, process.env.JWT_SECRET);
//                     const { _id, firstName, lastName, email, role, fullName } = admin;
//                     res.cookie('token', token);
//                     res.status(200).json({
//                         token,
//                         admin: {
//                             _id, firstName, lastName, email, role, fullName
//                         }
//                     })
//                 } else {
//                     return res.status(400).json({
//                         message: "Invalid Password"
//                     })
//                 }
//             }
//             else {
//                 return res.status(400).json({ message: "Something went worng" })
//             }
//         })
// }



exports.signout = (req, res) => {
    res.clearCookie('token');
    res.status(200).json({
        message: 'SignOut Successfully...!'
    })
}



exports.signin = async(req,res)=>{

    const {email,password} = req.body;
    try{
        let store = await Store.findOne({shopEmail:email})
        if(!store){

            let admin = await Admin.findOne({email:email})
            if(admin){
              
                const admincheckpassword = await bcrypt.compare(password,admin.password);
                if (admincheckpassword && admin.role === 'admin') {
                    const token = jwt.sign({ _id: admin._id, role: admin.role }, process.env.JWT_SECRET);
                    const { _id, firstName, lastName, email, role, fullName } = admin;
                    res.cookie('token', token);
                    return res.status(200).json({
                        token,
                        admin: {
                            _id, firstName, lastName, email, role, fullName
                        }
                    })
                } else {
                    return res.status(400).json({
                        message: "Invalid Password"
                    })
                }
            }

            return res.status(400).json({message:"Email not vaild"})
        }

        const checkpassword = await bcrypt.compare(password,store.password);
        if(!checkpassword){
            return res.status(400).json({message:"Invaild password"})
        }
        const token = jwt.sign({ _id: store._id, role: store.role}, process.env.JWT_SECRET );


         store = await Store.findOne({shopEmail:email})
         .populate("shopCategory","name _id")
         .select("-password")
         .exec();
        res.status(200).json({
                        token,
                        store
                    })

    }catch(err){
        return res.status(400).json({error:err})
    
    }
}




