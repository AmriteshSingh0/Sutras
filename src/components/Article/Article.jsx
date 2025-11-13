import React, {useEffect} from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllArticles } from "../../actions/articleAction";


const Article = () => {
    const dispatch = useDispatch();

    const articleListState = useSelector((state) => state.articleListReducer);
    const { articles } = articleListState;

    useEffect(() => {
        dispatch(getAllArticles());
    }, [dispatch]);
    return (
        <Container >
            <h3 style={{textAlign:'center'}}>Articles</h3>
            {articles ? (<>
            {articles.map((article, index) => (
                
                <div className="Article-Blog" 
                style={{backgroundColor:'#fff',height:'18rem', color:'black', border:'solid 1px black', margin:'2rem 0', borderRadius:'2rem'}}>
                    <Row>
                        <Col md={4}>
                        <img src={article.imgurl} style={{margin: '1.5rem',width: '18rem', height:'15rem'}}/>
                    </Col>
                    <Col md={7} style={{padding:'2rem', display:'grid', alignItems:'center'}}>
                       <h4 style={{fontWeight:'600'}}>{article.title}</h4>
                        <p>{article.description}</p>
                    </Col>
                    </Row>
                </div>
            ))}
            </>) : "loading..."}
        </Container>
    );
};

export default Article;