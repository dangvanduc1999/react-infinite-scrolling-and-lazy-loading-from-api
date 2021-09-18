import useArticlesQuery from "./useArticlesQuery";
import {useCallback, useRef, useState} from "react";
import { Spin, Input, Col, Row } from 'antd';
import "./assets/css/ArticlesPage.css";
import 'antd/dist/antd.css';
import VietnamPicture from "./assets/images/vietname.jpg";

const RenderArticle = (props) => {
    const {
        article
    } = props;
    return (
        <Row>
            <Col xs={24} sm={24} md={8} lg={6} className="article_image_wrapper">
                <img src={article["image_url"] ?? VietnamPicture} alt=""/>
            </Col>
            <Col xs={24} sm={24} md={16} lg={18} className="article_content">
                <a href={article["url"]} target="_blank" className="article_title">
                    {article["title"]}
                </a>
                <div className="article_description">
                    {article["description"]}
                </div>
            </Col>
        </Row>
    )
}

const ArticlesPage = (props) => {
    const [query, setQuery] = useState('')
    const [pageNumber, setPageNumber] = useState(1);
    const {
        articles,
        hasMore,
        loading,
        error
    } = useArticlesQuery(query, pageNumber);
    const observer = useRef();
    const lastArticlesElementRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore])

    console.log(pageNumber)
    console.log(query)
    return (
        <div className="articles_page_wrapper">
            <div className="articles_page_search">
                <Input.Search value={query} onChange={(event) => {
                    setQuery(event.target.value);
                    setPageNumber(1);
                }} allowClear style={{ width: 300 }} placeholder="Enter keyword ..." className="search_input"/>
            </div>
            <div className="articles_page_body">
                {
                    articles.map((article, index) => {
                        if (articles.length === index + 1) {
                            return (
                                <div className="article_item" ref={lastArticlesElementRef}>
                                    <RenderArticle article={article}/>
                                </div>
                            )
                        } else {
                            return (
                                <div className="article_item">
                                    <RenderArticle article={article}/>
                                </div>
                            )
                        }
                    })
                }
                {
                    loading ?
                        <div className="loading">
                            <Spin />
                        </div>
                        :
                        <>
                            {articles.length === 0 && <div>
                                No article
                            </div>}
                        </>
                }
            </div>
        </div>
    )
}

export default ArticlesPage;