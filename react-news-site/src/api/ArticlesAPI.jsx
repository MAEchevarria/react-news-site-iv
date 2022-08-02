import axios from "axios"

// const apiCall = () => {
//     const date = Math.floor(Date.now() / 1000) - 86400
//     return axios.get('http://hn.algolia.com/api/v1/search_by_date?', {
//         params: {
//             tags: 'story',
//             // tags: ('story', 'poll'),
//             hitsPerPage: 50,
//             numericFilters: 'created_at_i<' + date
//         }
//     })
// }

// async function getData() {
//     try {
//         const jsonResponse = await apiCall()
//         console.log(jsonResponse)
//         // console.log(jsonResponse.data.hits)
//         setArticles(jsonResponse.data.hits)
//     }
//     catch (error) {
//         console.error('Warning! Error occurred', error)
//     }
// }
async function fetchArticlesById(articleID) {
    let response = await axios.get('http://hn.algolia.com/api/v1/search?', {
        params: {
            tags: 'story_'+articleID
        }
    })
    return response
}
const fetchArticlesBySection = (articles) => {

}
const fetchArticles = (filters = null) => {

}
export {
    fetchArticlesById,
    fetchArticlesBySection,
    fetchArticles
}