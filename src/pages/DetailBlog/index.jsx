import React from "react";
import { useParams } from "react-router-dom";
import { BLOG_DATA } from "../../assets/data/blogs";
import "./DetailBlog.css";

const DetailBlog = () => {
    const {id} = useParams();
    const blog = BLOG_DATA[id-1];

    return (
        <div className="detail-blog-container">
            <h1 className="detail-blog-title">{blog.title}</h1>
            <p className="detail-blog-short">{blog.description}</p>
            <img className="detail-blog-image" src={blog.image} alt="nft, marketplace, ethereum" />
            <p className="detail-blog-long">{blog.descriptionLong}</p>
            <hr className="line"/>
            <small className="detail-blog-date">{blog.date}</small>
        </div>
    )
}

export default DetailBlog;