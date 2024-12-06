import PackageContent from './PackageContent.jsx'
import { useState, useEffect } from "react";  

export default function Package() {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch("/data/cgv_content.json")
            .then(data => data.json())
            .then(jsonData => setList(jsonData.packageList))
            .catch(error => console.log(error));
    }, [])

    return (
        <section class="package-content-list">
            {list && list.map(object =>
        <PackageContent title={object.title}
                        list={object.list}/>
            )}
        </section>
    )
}