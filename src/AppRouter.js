import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import InMemoryJwtManager from "./utils/InMemoryJwtManager";
import Members from "./pages/Members";
import SecuredRoute from "./components/SecuredRoute";
import RedirectableRoute from "./components/RedirectableRoute";

function AppRouter() {

    // track whether the uses is logged in
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}>
                    {/* unprotected route */}
                    <Route index element={<Home />} />

                    {/* routes that redirect upon logging in */}
                    <Route path='/login' element={
                        // if loggedIn, /login displays the <Home /> component if ever reached (shouldn't be able to though)
                        // otherwise if not logged in, the <Login /> component is rendered instead
                        <RedirectableRoute predicate={loggedIn} isTrue={<Home />} isFalse={<Login setLoggedIn={setLoggedIn} />} />
                    } />

                    <Route path='/register' element={
                        <RedirectableRoute predicate={loggedIn} isTrue={<Home />} isFalse={<Register />} />
                    } />

                    {/* routes that require being logged in to view */}
                    <Route path="/member" element={
                        // custom components can have opening and closing tags
                        <SecuredRoute loggedIn={loggedIn}>
                            {/* we access the nested components using the 'children' prop */}
                            <Members />
                        </SecuredRoute>
                    } />
                </Route>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;