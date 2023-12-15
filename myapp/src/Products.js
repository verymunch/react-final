import {Col, Container, Row} from "react-bootstrap";
import useFetch from "./useFetch";
import ProductsList from "./ProductsList";
import candles from "./candles.js";

function Products () {
    let URL = " http://localhost:8000/candles";
    const {data: candles, status, error} = useFetch(URL);
    // const {data: candles, status, error} = useFetch(candles);
    return (
        <Container>
            {error && <div>Error Message: {error}</div>}
            {status && <div>Loading...</div>}
            {candles && <ProductsList candles={candles}/>}
        </Container>
    );
}

export default Products;