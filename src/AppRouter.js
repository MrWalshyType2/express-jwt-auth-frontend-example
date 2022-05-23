import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import InMemoryJwtManager from "./utils/InMemoryJwtManager";
import Members from "./pages/Members";

function AppRouter() {

    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}>
                    <Route index element={<Home />} />
                    <Route path='/register' element={loggedIn ? <Home /> : <Register />} />
                    <Route path='/login' element={loggedIn ? <Home /> : <Login setLoggedIn={setLoggedIn} />} />
                    {loggedIn &&
                        <Route path='/member' element={<Members />} />
                    }
                </Route>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;