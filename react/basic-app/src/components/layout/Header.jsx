import './Header.css';
                            // <Header> 태그 안의 자식들을 모두 받는다. children으로 작성
export default function Header({children}) {
    return (
        <header>
            {children}
        </header>
    );
}