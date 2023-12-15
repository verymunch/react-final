import React from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import useFetch from "./useFetch";
import ProductsList from "./ProductsList";

function ProductDetails(props) {
    const {id} = useParams();
    let url = `http://localhost:8000/candles/${id}`;
    const {data : candle, error, isPending} = useFetch( url );
    const location = useLocation()
    // const navigate = useNavigate();
    // const { from } = location.state // 'from' not working/undefined???
    console.log(location);

    // if (!id) {
    //     // Render "Not Found" message or redirect
    //     return <ProductsList/>;
    // }

    return (
        <div>
            { isPending  && <div> Loading </div>}
            { error  && <div> {error} </div>}
            { candle  && (
                <div>
                    <h2> Product Details id={candle.id} </h2>
                    <ol>
                        {/*<li key={candle.id}>*/}
                            <li>Item: {candle.name}</li>
                            <li>Price: {candle.price}</li>
                            <li>Description: {candle.description}</li>
                            {/*<li key={candle.details.id}></li>*/}
                            <li>Burn Time: {candle.details.burn_time}</li>
                        {/*</li>*/}
                    </ol>
                    {/*<button onClick={() => navigate('/products')}>Go Back</button>*/}
                </div>
            )}
        </div>
    );
}

export default ProductDetails;