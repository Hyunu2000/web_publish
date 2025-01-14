import React, { useState, useEffect } from 'react';
import ProductAvata from './ProductAvata.jsx';
import axios from 'axios';

export default function ProductList() {
    const [list, setList] = useState([]); // list 변경시 실시간 업데이트

    useEffect(() => {
        axios.get('data/products.json')
            .then((res) => setList(res.data))
            .catch((error) => console.log(error));
    }, []);

    

    // 출력 리스트 생성 [ [{},{},{}], [{},{},{}], [{}] ]
    const rows = [];
    for (let i = 0; i < list.length; i += 3) {  // [ {0}, {1}, {2} ]
        rows.push(list.slice(i, i + 3));    // [ {0}, {1}, {2} ]
    }
    // console.log('rows ==>>', rows);

    return (
        <div>
            {
                rows.map((rowArray) =>
                    <div className='product-list'>
                        {rowArray.map((product) =>
                            <ProductAvata img={product.image} />
                        )
                        }
                    </div>
                )
            }
        </div>
    );
}

