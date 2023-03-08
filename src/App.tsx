import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthForm from "./components/Auth/AuthForm";
import {Provider} from "react-redux";
import store from "./store/store";
import AuthPage from "./Pages/AuthPage/AuthPage";
import HomePage from "./Pages/HomePage/HomePage";
import PrivateRouter from "./hok/PrivateRouter";
import PersonalizationPage from "./Pages/PersonalizationPage/PersonalizationPage";


function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/registration" element={<AuthPage/>}/>
                    <Route path="/login" element={<AuthPage/>}/>
                    <Route element={<PrivateRouter />}>
                        <Route path="/" element={<HomePage/>}/>
                    </Route>
                    <Route element={<PrivateRouter />}>
                        <Route path="/personalization" element={<PersonalizationPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
