import { db } from "./db.js";

/**
 * 장바구니 추가
 */
export const addCart = async ({id, cartList}) => { // [1, 1, 1, 1, 1]
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
    return {"result_rows" : result_rows};
}

/**
 * 장바구니 전체 조회
 */
export const getItems = async ({id}) => {
    const sql = `
                    select	sc.cid,
                            sc.size,
                            sc.qty,
                            sm.id,
                            sm.zipcode,
                            sm.address,
                            sp.pid,
                            sp.pname,
                            sp.price,
                            sp.description as info,
                            concat('http://localhost:9000/', sp.upload_file->>'$[0]') as image
                        from shoppy_cart sc,
                            shoppy_member sm,
                            shoppy_product sp
                        where sc.id = sm.id 
                                and sc.pid = sp.pid
                                and sm.id = ?
                `;
    const [result] = await db.execute(sql, [id]);
    return result;
}