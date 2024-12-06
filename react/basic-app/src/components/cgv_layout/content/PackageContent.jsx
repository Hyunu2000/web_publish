import PackageContentItem from "./PackageContentItem.jsx";
import PackageContentTitle from "./PackageContentTitle.jsx";

export default function PackageContent({ title, list }) {
    return (
        <section class="package-content-list">
            <PackageContentTitle title={title} />
            <ul>
                {list && list.map(item =>
                    <li>
                        <PackageContentItem
                            src='/images/package1.jpg'
                            alt='package1'
                            text='PACONNIE A형'
                            price={item.price}
                        />
                    </li>
                )}
            </ul>
        </section>
    );
}