import React, { useState, useEffect } from 'react';
import Book from './Book.jsx';

export default function BookList() {
    const [books, setBooks] = useState([]);
    const [category, setCategory] = useState([]);
    const [type, setType] = useState('total');
    const [selectCategory, setSelectCategory] = useState('');


    useEffect(() => {
        console.log(`selectCategory ---> ${selectCategory}`);
        fetch('/data/aladin.json')
            .then(data => data.json())
            .then(jsonData => {
                setCategory(jsonData.category);
                if (type === 'total') {
                    setBooks(jsonData.books);
                } else {
                    // setBooks(jsonData);
                    // 국내 도서만 출력하고 싶다면?
                    const filterBooks = jsonData.books.filter((book) => book.type === type); // 자주 씀
                    setBooks(filterBooks);
                }
            })
            .catch(error => console.log(error));
    }, [type, selectCategory]);

    const handleClick = (event) => {
        setType(event.target.value);
    }

    const handleChangeCategory = (event) => {
        setSelectCategory(event.target.value);
    }

    return (
        <>
            <div>
                <input type="radio" name="type" value="total" onClick={handleClick} />전체 도서
                <input type="radio" name="type" value="domestic" onClick={handleClick} />국내 도서
                <input type="radio" name="type" value="overseas" onClick={handleClick} />국외 도서

                <select onChange={handleChangeCategory}>
                <option value='선택'>선택</option>
                    {category && category.map((item) =>
                        <option value={item.name}>{item.name}</option>
                    )}
                </select>
            </div>
            <ul style={{ 'display': 'grid', 'grid-template-columns': 'repeat(4, 1fr)' }}>
                {books && books.map((book) =>
                    <li style={{ 'list-style-type': 'none' }}>
                        <Book img={book.img} title={book.title} />
                    </li>
                )}
            </ul>
        </>
    );
}

