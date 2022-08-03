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

async function fetchArticlesBySection(section){
    const date = Math.floor(Date.now() /1000 ) - 86400
    const sectionTags = {
        home: 'search?tags=front_page',
        new: 'search_by_date?tags=story',
        past: `search_by_date?tags=story&numericFilters=created_at_i<${date}`,
        comments: 'search_by_date?tags=comment',
        ask: 'search_by_date?tags=ask_hn',
        show: 'search_by_date?tags=show_hn',
    }
    let searchParams = sectionTags[section]
    let response = await axios.get('http://hn.algolia.com/api/v1/'+searchParams)
    console.log(response)
    return response
}   

async function fetchArticles(filters = null){

}
export {
    fetchArticlesById,
    fetchArticlesBySection,
    fetchArticles
}