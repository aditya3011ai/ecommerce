import React from "react";
import "./Category.scss";
import { useNavigate } from "react-router-dom";

function Category({ category }) {
    const navigate = useNavigate();
    const navigateTo = ()=>{
        navigate(`/category/${category.attributes.key}`)
        window.scrollTo(0,0)
    }
    return (
        <div
            className="Category"
            style={{backgroundImage: `url(${category.attributes.image.data.attributes.url})`}}
            onClick={navigateTo}
        >
            <div className="category-content center">
                <h3 className="heading">{category.attributes.title}</h3>
            </div>
        </div>
    );
}

export default Category;
