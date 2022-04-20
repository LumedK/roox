import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PageListOfUsers } from './pages/PageListOfUsers'
import PageUserProfile from './pages/PageUserProfile'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Page404 from './pages/Page404'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<PageListOfUsers />} />
                    <Route path=":id" element={<PageUserProfile />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)
