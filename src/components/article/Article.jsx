import React from 'react'
import "./article.css";

const   Article = ({imgUrl, title}) => {

  const date = new Date().toLocaleString('en-us', {month: 'short', day:'numeric', year:'numeric'});
    
  return (
    <div className='gpt3__blog-container_article'>

      <div className='gpt3__blog-container_article-image'>
        <img src={imgUrl} alt='blog image' />
      </div>
      <div className='gpt3__blog-container_article-content'>
          <div>
            <p>{date}</p>
            <h3>{title}</h3>
          </div>
          <p>Read Full Article</p>
      </div>

    </div>
  )
}

export default Article