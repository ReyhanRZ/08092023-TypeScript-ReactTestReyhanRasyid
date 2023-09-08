import React from "react"
import './ListItem.css'

const ListItem = ({ title, description, url, urlToImage }) => {
    return (
        <div className="list-app">
            <div className="list-item">
                <img className="list-img" src={urlToImage} alt={urlToImage} />
                <h3><a href={url}>{title}</a></h3>
                <p>{description}</p>
            </div>
        </div>
    )
}
export default ListItem