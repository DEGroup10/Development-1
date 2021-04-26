
const Admin = require('../../models/admin/auth')
const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt')

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



exports.signin = (req, res) => {
    Admin.findOne({ email: req.body.email })
        .exec((error, admin) => {
            if (error) return res.status(400).json({ error })
            if (admin) {

                if (admin.authenticate(req.body.password) && admin.role === 'admin') {
                    const token = jwt.sign({ _id: admin._id, role: admin.role }, process.env.JWT_SECRET);
                    const { _id, firstName, lastName, email, role, fullName } = admin;
                    res.cookie('token', token);
                    res.status(200).json({
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
            else {
                return res.status(400).json({ message: "Something went worng" })
            }
        })
}



exports.signout = (req, res) => {
    res.clearCookie('token');
    res.status(200).json({
        message: 'SignOut Successfully...!'
    })
}


