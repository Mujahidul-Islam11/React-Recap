import { useEffect } from "react";
import { useState } from "react";

const Articles = () => {
    const [articles, setArticles] = useState([]);
    useEffect(()=>{
        fetch("./../../public/article.json")
        .then(res => res.json())
        .then(data => setArticles(data))
    }, [])
    return (
        <div>
           {
            articles?.map(article => 
            <div key={article?.id}>
            
            </div>)
           } 
        </div>
    );
};

export default Articles;