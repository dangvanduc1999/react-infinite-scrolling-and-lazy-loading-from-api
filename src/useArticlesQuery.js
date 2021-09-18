import {useEffect, useState} from "react";
import axios from "axios";
import {API_KEY, PAGE_SIZE} from "./constants";

export default function useArticlesQuery(query, pageNumber) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [articles, setArticles] = useState([]);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        setArticles([]);
    }, [query])

    useEffect(() => {
        let cancel
        setLoading(true);
        setError(false);
        let url = `https://newsdata.io/api/1/news?apiKey=${API_KEY}&page=${pageNumber}`;
        if (query) {
            url += `&q=${query}`
        }
        axios({
            method: 'GET',
            url: url,
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            console.log(res.data)
            setArticles(prevArticles => {
                return [...new Set([...prevArticles, ...res.data.results])]
            })
            setHasMore(res.data.nextPage)
            setLoading(false)
        }).catch(e => {
            setLoading(false)
            setError(true)
            if (axios.isCancel(e)) return
        })
        return () => cancel()
    }, [query, pageNumber])

    return { loading, error, articles, hasMore }
}