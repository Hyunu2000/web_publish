import React, { useState, useEffect } from 'react';
import ProductAvata from './ProductAvata.jsx';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ProductList() {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get('/data/products.json')
            .then((res) => setList(res.data))
            .catch((error) => console.log(error));
    }, []);

    const rows = [];
    for(let i = 0; i < list.length; i += 3) {
        rows.push(list.slice(i, i + 3));
    }

    return (
        <div>
            {
                rows.map((rowArray, index) =>
                    <div key={index} className='product-list'>
                        {rowArray.map((product) =>
                            <Link key={product.pid} to={`/products/${product.pid}`}>
                                <ProductAvata img={product.image}/>
                            </Link>
                        )
                        }
                    </div>
                )
            }
        </div>
    );
}

