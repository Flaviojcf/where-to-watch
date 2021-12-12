import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes >
                <Route path="/cadastro" element={<SignUp />}>
                </Route>
                <Route path="/login" element={<SignIn />}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

