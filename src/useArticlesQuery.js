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
        let url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}&page=${pageNumber}&pageSize=${PAGE_SIZE}&domains=techcrunch.com,`;
        axios({
            method: 'GET',
            url: url,
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setArticles(prevArticles => {
                return [...new Set([...prevArticles, ...res.data.articles])]
            })
            setHasMore(pageNumber < Math.ceil(res.data.totalResults/PAGE_SIZE))
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