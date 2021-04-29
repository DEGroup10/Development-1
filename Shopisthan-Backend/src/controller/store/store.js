

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const Store = require('../../models/store/store');
const Product = require('../../models/store/product')
const Category = require('../../models/admin/category')



exports.storeSignin = async(req,res)=>{

    const {email,password} = req.body;
    try{
        let store = await Store.findOne({shopEmail:email})
        if(!store){
            return res.status(400).json({message:"Store not found with Provided Email"})
        }

        const checkpassword = await bcrypt.compare(password,store.password);
        if(!checkpassword){
            return res.status(400).json({message:"Invaild password"})
        }
        const token = jwt.sign({ _id: store._id, role: store.role}, process.env.JWT_SECRET );
                    const { _id, userName, shopName, shopType,shopEmail, shopCategory, shopPhoneNo,shopAddress,role } = store;
                    res.status(200).json({
                        token,
                        store: {
                            _id, userName, shopName, shopType,shopEmail, shopCategory, shopPhoneNo,shopAddress,role
                        }
                    })

        


    }catch(error){
        return res.status(400).json({error})
    }
}




exports.createStore = async(req, res) => {
    const {
       userName, shopName, shopType, shopEmail,password, shopCategory,shopPhoneNo,shopAddress
    } = req.body;

    try {
        let store = await Store.findOne({shopEmail})
        if(store){
            return res.status(400).json({message:"Shop already Exists"})
        }

        store = new Store({
                userName, 
                shopName, 
                shopType,
                shopEmail, 
                password, 
                shopCategory,
                shopPhoneNo,
                shopAddress,
                createdBy: req.admin._id
        })

        const salt = await bcrypt.genSalt(10);
        store.password = await bcrypt.hash(password,salt);
        await store.save((error,store)=>{
            if (error) return res.status(400).json({ error });
               if (store) {
                   res.status(201).json({ store });
               }
        })
        // return res.status(201).json({message:"Store Reg...."})
        

    }catch(error){
        return res.status(400).json({error})
    }
    
    

}



function createCategories(categories, parentId = null) {

    const categoryList = [];
    let category;
    if (parentId == null) {
        category = categories.filter(cat => cat.parentId == undefined);
    } else {
        category = categories.filter(cat => cat.parentId == parentId);

    }
    for (let cate of category) {
        categoryList.push({
            _id: cate.id,
            name: cate.name,
            slug: cate.slug,
            parentId: cate.parentId,
            type: cate.type,
            children: createCategories(categories, cate._id)
        });
    }

    return categoryList;
};



exports.storeData = async (req, res) => {
    const categories = await Category.find({}).exec();
   
    const storeProducts = await Product.find({createdBy:req.store._id})
        .select('_id name price quantity slug description productPictures category ParCategory createdBy')
        .populate({path: 'category', select: '_id name'})
        .populate({path: 'ParCategory', select: '_id name'})
        .exec();
    res.status(200).json({
        categories,
        storeProducts
    })
}


