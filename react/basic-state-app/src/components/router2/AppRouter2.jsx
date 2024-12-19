import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
// import AppAirbnb from '../airbnb/AppAirbnb.jsx';
/** 파일 경로는 정확하게 입력해야 하지만 임포트 별칭으로 짧게 사용 가능하다 */
import AppBnB from '../airbnb/AppAirbnb.jsx';
import Aladin from '../aladin/AppAladin.jsx';
import Avatar from '../avatar/AppAvatar.jsx';
import Counter from '../counter/AppCounter.jsx';
import Olive from '../olive/AppOlive.jsx';
import Yes24 from '../yes24/AppBestSeller.jsx';

function Home() {
    return (
        <h1>Home</h1>
    )
}

export default function AppRoutert2() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}> {/** layout 관련 컴포넌트 */}
                        <Route index element={<Home />} />
                        <Route path='/airbnb' element={<AppBnB />} />
                        <Route path='/aladin' element={<Aladin />} />
                        <Route path='/avatar' element={<Avatar />} />
                        <Route path='/counter' element={<Counter />} />
                        <Route path='/olive' element={<Olive />} />
                        <Route path='/yes24' element={<Yes24 />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
