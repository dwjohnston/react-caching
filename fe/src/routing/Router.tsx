import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { PageA } from '../pages/PageA';
import { PageB } from '../pages/PageB';

export type RouterProps = {
};



export const Router = (props: RouterProps) => {
    const { } = props;


    return (
        <div>
            <BrowserRouter>


                <nav>
                    <Link to = "/page-a">Page A</Link>
                    <Link to = "/page-b">Page B</Link>
                </nav>

                <Routes>
                    <Route path="/page-a" element={<PageA />} />
                    <Route path="/page-b" element={<PageB />} />
                </Routes>

            </BrowserRouter>
        </div>
    );
};
