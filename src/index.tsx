import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from '../node_modules/react-redux/es/exports'
import { BrowserRouter, Route, Routes } from '../node_modules/react-router-dom/index'
import './index.scss'
import Page404 from './pages/Page404'
import { PageListOfUsers } from './pages/PageListOfUsers'
import PageUserProfile from './pages/PageUserProfile'
import { store } from './redux/store'

ReactDOM.render(
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
    </React.StrictMode>,
    document.querySelector('#root')
)
