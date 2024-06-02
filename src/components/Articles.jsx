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
            <div key={article?.id} className="mb-16 md:w-[700px] ">
            <img className="mb-4 rounded-lg" src={article?.cover} alt="" />
            <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                    <img className="w-12 h-12" src={article?.author_img} alt="" />
                    <div>
                    <h2 className="font-bold text-[16px]">{article?.author}</h2>
                    <p className="text-gray-600">{article?.posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-gray-500">
                    <h2>{article?.reading_time}</h2>
                    <h2 className="text-xl cursor-pointer"><ion-icon name="bookmark-outline"></ion-icon></h2>
                </div>
            </div>
            <h1 className="text-3xl font-semibold my-4">{article?.title}</h1>
            <p className="text-gray-500">{article?.hashtags}</p>
            <button className="underline text-blue-700 mt-4">Mark as read</button>
            </div>)
           } 
        </div>
    );
};

export default Articles;