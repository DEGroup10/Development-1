import React, { useState,useEffect} from 'react'
import Modal from '../../components/UI/Modal'
import { Layout } from '../../components/Layout'
import Input from '../../components/UI/Input';
import {Row,Col, Container, Form} from 'react-bootstrap'
import linearCategory from '../../helpers/linearCategories'
import { useDispatch, useSelector } from 'react-redux';
import { createPage } from '../../actions/page.action';


const NewPage = (prpos) =>{

    const [createModal,setCreateModal] = useState(false);
    const [title,setTitle] = useState('');
   const category = useSelector(state=> state.category);
   const [categories, setCategories] = useState([])
   const [categoryId,setCategoryId] = useState('');
   const [desc,setDesc] = useState('');
   const [type, setType] = useState('');
   const [banners, setBanners] = useState([]);
   const [products,setProducts] = useState([]);
   const dispatch = useDispatch();
   const page = useSelector(state => state.page)
    useEffect(()=>{
        // console.log('category',category);
       setCategories(linearCategory(category.categories));  

     
    },[category]);

    useEffect(()=>{
          console.log(page);
          if(!page.loading){
              setCreateModal(false);
              setCategoryId('');
              setDesc('');
              setBanners([]);
              setProducts([]);
          }
    },[page])

    const onCategoryChange = (e) =>{
        const category =  categories.find(category => category.value == e.target.value);
        // const category =  categories.find(category => category._id == e.target.value);
        setCategoryId(e.target.value);
        setType(category.type);
        // console.log(category.type);
        // console.log(category); 
    }

    const handleBannerImages = (e) =>{
        // console.log(e);
        setBanners([...banners, e.target.files[0]]);
    }
    const handleProductImages = (e) =>{
        // console.log(e);
        setProducts([...products, e.target.files[0]]);
    }

    const submitPageFrom = (e) =>{
        // e.target.preventDefault();
        // e.target.preventDefault();

        if(title === ""){
            alert('Title is required');
            setCreateModal(false);
            return;
        }

        const form = new FormData();
        form.append('title',title);
        form.append('description',desc);
        form.append('category', categoryId);
        form.append('type',type);
        banners.forEach((banner,index)=>{
                form.append('banners',banner);
        });
        products.forEach((product,index)=>{
            form.append('products',product);
    });

    dispatch(createPage(form));


    // alert("Done")

    // setCreateModal(false);

    
    // console.log({title,desc,categoryId,type,banners,products});
    }

    const renderCreatePageModal = () =>{

        
        return (
            <Modal
            show={createModal}
            modaltitle = {"Create New Page"}
            handleclose = {()=>setCreateModal(false)}
            onSubmit = {submitPageFrom}
            >

            <Container>
            <Row>
            <Col>
               {/* <select value={categoryId} 
               onChange = {onCategoryChange}
               className = "form-control form-control-sm"
               >
               <option value="">Select Category</option>
               {
                   categories.map(cat=> 
                   <option key={cat._id} value={cat._id}>{cat.name}</option>
                       )
               }
               </select> */}

            <Input

                type = "select"
                value= {categoryId}
                onChange = {onCategoryChange}
                options = {categories}
                placeholder = {"Select Category"}
            />
            </Col>
        </Row>
        <Row>
            <Col>
                <Input 
                value={title}
                onChange = {(e)=> setTitle(e.target.value)}
                placeholder ={"Page Title"}
                className= "form-control-sm"
                ></Input>
            </Col>
        </Row>


        <Row>
            <Col>
                <Input 
                value={desc}
                onChange = {(e)=> setDesc(e.target.value)}
                placeholder ={"Page Desc"}
                className= "form-control-sm"
                ></Input>
            </Col>
        </Row>

        {
            banners.length > 0 ?
            banners.map((banner,index)=>
            <Row key={index}>
            <Col>{banner.name}</Col>
            </Row>

            ):null
        }
        
        <Row>

       
            <Col>
                <Input 
                  className="form-control form-control -sm"
                type = "file"
                name = "Banners"
                onChange = {handleBannerImages}
                ></Input>
            </Col>
        </Row>

        {
            products.length > 0 ?
            products.map((product,index)=>
            <Row key={index}>
            <Col>{product.name}</Col>
            </Row>

            ):null
        }
        

        <Row>
            <Col>
                <Input 
                className="form-control form-control -sm"
                type = "file"
                name = "products"
                onChange = {handleProductImages}
                ></Input>
            </Col>
        </Row>
            </Container>
            
            
            </Modal>

        );
    }
    return(
        <Layout sidebar>
        {
            page.loading ? 
           <p>Creating Page... please Wait</p>
            :
            <>
            
            {renderCreatePageModal()}
          <button onClick={()=> setCreateModal(true)}>Create</button>
          </>
        }
        
        </Layout>
    )
}

export default NewPage