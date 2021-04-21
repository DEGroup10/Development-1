const store = require('../../models/store/store');
const Store = require('../../models/store/store');
const jwt = require('jsonwebtoken')


exports.createStore = (req, res) => {
    
    const {
     userName, shopName, shopType, shopEmail,password, shopCategory,shopPhoneNo,shopAddress} = req.body;


    const shop = new Store({
        userName, 
        shopName, 
         shopType,
         shopEmail, 
         password, 
         shopCategory,
         shopPhoneNo,
         shopAddress,
         createdBy: req.admin._id

    });

    shop.save(((error, shop) => {
        if (error) return res.status(400).json({ error });
        if (shop) {
            res.status(201).json({ shop });
        }
    }));

}




exports.storeSignin = (req, res) => {
    store.findOne({ shopEmail: req.body.email })
        .exec((error, store) => {
            if (error) return res.status(400).json({ error })
            if (store) {

                if (store.authenticate(req.body.password) && store.role === 'store') {
                    const token = jwt.sign({ _id: store._id, role: store.role}, process.env.JWT_SECRET );
                    const { _id, userName, shopName, shopType,shopEmail, shopCategory, shopPhoneNo,shopAddress,role } = store;
                    res.status(200).json({
                        token,
                        store: {
                            _id, userName, shopName, shopType,shopEmail, shopCategory, shopPhoneNo,shopAddress,role
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

