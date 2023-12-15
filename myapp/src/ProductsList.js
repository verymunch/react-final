import {Table} from "react-bootstrap";
import {Link, Outlet} from "react-router-dom";

function ProductsList ( {candles}  ) {
    console.log( candles )
    return (
        <div>
            <h1>Our Top Products</h1>
            <Table striped hover>
                <thead>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Details</th>
                </tr>
                </thead>
                <tbody>
                {candles.map((candle) => (
                        <tr key={candle.id}>
                            <td> {candle.name}</td>
                            <td> {candle.price}</td>
                            {/*<td> {candle.details}</td>*/}
                            <td>
                                {/*<Link to={`/candles/${candle.id}`}>Details {candle.id}</Link>*/}
                                {/*<Link to="/products/:id" state={{ from: "products" }}>*/}
                                {/*    Details {candle.id}*/}
                                {/*</Link>*/}
                                <Link to={`/products/${candle.id}`} state={{ from: "products" }}>
                                    Details {candle.id}
                                </Link>
                                {/*{!window.location.pathname.includes('/products/') && <ProductsList candles={candles} />}*/}
                                {/*<Link to="/onboarding/profile" state={{ from: "occupation" }}>*/}
                                {/*    Next Step*/}
                                {/*</Link>*/}
                            </td>
                        </tr>
                    )
                )}
                </tbody>
            </Table>
            <Outlet />
        </div>
    )
}
export default ProductsList;