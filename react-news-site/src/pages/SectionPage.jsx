import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import ArticleList from '../components/ArticleList'
import {fetchArticlesBySection} from '../api/ArticlesAPI'

function SectionPage (){

    const [sectionArticles, setSectionArticles] = useState([])
    const {sectionName} = useParams()

    useEffect( () => {
        fetchArticlesBySection(sectionName)
            .then((response) => {
                setSectionArticles(response.data.hits)
            })
        // setSectionArticles(response.data.hits)
        // const filteredArticles = articles.filter(article => article.section.toLowerCase() == sectionName.toLowerCase())
        // setSectionArticles(filteredArticles)
                // console.log(filteredArticles)
    }, [sectionName])
    

    return(
        <div>
        {sectionArticles 
            ? <ArticleList articles={sectionArticles} />
            : 'no articles found'
        }
        </div>
    )
}

export default SectionPage