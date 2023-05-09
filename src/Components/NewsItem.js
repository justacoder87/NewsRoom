import React from "react";

  const NewsItem=(props)=>{
    let { title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className="my-3">
        <div className="card" /*style={{width: '18rem'}}*/>
          <div style={{dispaly:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
            <span className="badge rounded-pill bg-black">{source}</span>
          </div>
          <img src={imageUrl ? imageUrl : "https://thumbs.dreamstime.com/z/today-s-news-shows-current-newspaper-d-rendering-130556865.jpg"}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-black">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-danger">Read More</a>
          </div>
        </div>
      </div>
    )
  }
export default NewsItem;
