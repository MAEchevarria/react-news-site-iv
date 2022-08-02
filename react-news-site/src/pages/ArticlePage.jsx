import {useParams} from 'react-router-dom'
import Article from '../components/Article'
import { fetchArticlesById } from '../api/ArticlesAPI'
import {useState, useEffect} from 'react'

function ArticlePage ({articles}){
    let {articleID} = useParams()

    const[article, setArticle] = useState(null)

    useEffect(() => {
        fetchArticlesById(articleID)
            .then((response) => {
                // console.log(response)
                setArticle(response.data.hits[0])
            })
    }, [articleID])




    // -1 because we added 1 in the url to make it restful
    // const article = articles[articleID-1] 

    return (
        <div>
            <Article {...article} />
        </div>
    )
}
export default ArticlePage