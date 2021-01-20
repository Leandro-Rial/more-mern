import React, {useContext} from 'react';
import ProductItem from '../utils/productItem/ProductItem';
import {GlobalState} from '../../../GlobalState';
import Loading from '../utils/loading/Loading';
import './products.css';

function Products() {

    const state = useContext(GlobalState)

    const [products] = state.productsAPI.products
    const [token] = state.token
    const [callback, setCallback] = state.productsAPI.callback

    return (
        <>
            <div className="products">
                {
                    products.map(product => {
                        return <ProductItem key={product._id} product={product} token={token} callback={callback} setCallback={setCallback} />
                    })
                }
            </div>
            {products.length === 0 && <Loading />}
        </>
    )
}

export default Products
