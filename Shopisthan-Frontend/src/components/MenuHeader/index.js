import React, { useEffect } from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../../actions';

/**
* @author
* @function MenuHeader
**/

const MenuHeader = (props) => {

  const category = useSelector(state => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory())
  }, []);

  const renderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
    //     <nav className="NavigationBar-subcategoryList-1nX">
    // <a className="router-link-exact-active router-link-active NavigationBar-subcategoryLink-3Ua">
    //         <div className="SubCategory-root-mwE SubCategory-active-Sxz NavigationBar-subcategory-2m5">
    //             <h5 className="SubCategory-label-30F">New Mobile</h5>
    //         </div>
    //     </a>
         <li key={category.name,category.categoryImage}>
           {
            
             category.parentId ? <a   className="SubCategory-label-30F"
             href={`/${category.slug}?cid=${category._id}&type=${category.type}`}>  {category.name}</a> :
               <span>{category.name}</span>
           }
           {category.children.length > 0 ? (<ul >{renderCategories(category.children)}</ul>) : null}
        </li> 
      );
    }
    return myCategories;
  }

  return (
    <div className="menuHeader">
      <ul className="SubCategory-label-30F">
        {category.categories.length > 0 ? renderCategories(category.categories) : null}
      </ul>

    </div>
  )

}

export default MenuHeader