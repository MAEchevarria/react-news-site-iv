import { useEffect, useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import AppNav from './components/AppNav'
import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage'
import SectionPage from './pages/SectionPage'
import NewsData from './data/news.json'
import {fetchArticlesById, fetchArticlesBySection, fetchArticles} from './api/ArticlesAPI'
import axios from 'axios'

function App() {

  // const[articles, setArticles] = useState(NewsData.map(( article, index) => {
  //   return {
  //     id: index,
  //     title: article.title,
  //     abstract: article.abstract,
  //     byline: article.byline,
  //     image: article.multimedia.length ? article.multimedia[0] : null,
  //     created_date: article.created_date,
  //     section: article.section
  //   }})
  // )
  const[articles, setArticles] = useState([])

  const apiCall = () => {
    // Date.now() returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
    // convert milliseconds to seconds (- seconds in days)
    // const date = Math.floor(Date.now() /1000 )
    // const date = Math.floor(Date.now() /1000 ) - 86400
    return axios.get('http://hn.algolia.com/api/v1/search_by_date?', {
      params:{
        tags: ('story', 'front_page'),
        // tags: ('story', 'poll'),
        hitsPerPage: 30,
        // numericFilters: 'created_at_i<'+date
      }
    })
  }

  async function getData() {
    try {
      const jsonResponse = await apiCall()
      setArticles(jsonResponse.data.hits)
    }
    catch(error) {
      console.error('Warning! Error occurred', error)
    }
  }

  // calls getData once on render
  useEffect(() => {
    getData()
  }, [])


  return (
    <div className="App">
      <AppNav />
      <Router> 
        <Routes>
          <Route path='/' element={<HomePage articles = {articles}/>} />
          <Route path='/articles/:articleID' element={<ArticlePage  articles = {articles} />} />
          <Route path='/sections/:sectionName' element={<SectionPage articles={articles}/> } />
        </Routes>
      </Router>   
    </div>
  )
}

export default App