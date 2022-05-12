import React from 'react';
import { Routes, Route } from 'react-router-dom';

import BeeroscopePage from './Horoscope'
import ClientSearchPage from './Search'

const Main = () => {
    return (
        <Routes>
            <Route exact path='/' element={<BeeroscopePage/>}></Route>
            <Route exact path='/search' element={<ClientSearchPage/>}></Route>
        </Routes>
    );
}

export default Main;