import { db } from "./db.js";

/**
 * 장바구니 추가
 */
export const addCart = async ({ id, cartList }) => { // [1, 1, 1, 1, 1]
    let result_rows = 0;

    const result = await Promise.all(
        cartList.map(async (item) => {
            const values = [item.size, item.qty, id, item.pid]
            // console.log('values --->', values);
            const sql = `
                                insert into shoppy_cart(size, qty, id, pid, cdate)
                                    values(?, ?, ?, ?, now())
                            `;
            const [result] = await db.execute(sql, values); // Promise 형태로 실행
            // console.log(result.affectedRows);    
            return result.affectedRows;
        })
    )
    // console.log('result ->', result);
    result_rows = result.reduce((acc, cur) => acc + cur, 0);
    // console.log({"result_rows": result_rows});    
    return { "result_rows": result_rows };
}

/**
 * 장바구니 전체 조회
 */
export const getItems = async ({ id }) => {
    const sql = `
                    select * from view_cart_list where id = ?
                `;
    const [result] = await db.execute(sql, [id]);
    return result;
}

/**
 * 장바구니 전체 카운트 조회
 */
export const getCount = async ({ id }) => {
    const sql = `  
                    select count(*) as count from shoppy_Cart
                        where id = ?
                `;
    const [result] = await db.execute(sql, [id]); // [[{ count : 2 }] [count 필드정보]]
    return result[0]; // 2차원 배열의 0번지 결과를 return                
}

/**
 * 장바구니 상품 수량 업데이트
 */
export const updateQty = async ({ cid, type }) => {
    const str = type === "increase" ? "qty=qty+1" : "qty=qty-1";
    const sql = `  
                    update shoppy_cart
                        set ${str}
                        where cid = ?
                `;
    const [result] = await db.execute(sql, [cid]);
    return { "result_rows": result.affectedRows };
}

/**
 * 장바구니 상품 삭제
 */
export const removeItem = async ({cid}) => {
    const sql = `
                    delete from shoppy_cart where cid = ?
                `;
    const [result] = await db.execute(sql, [cid]);
    return { "result_rows": result.affectedRows };
};
