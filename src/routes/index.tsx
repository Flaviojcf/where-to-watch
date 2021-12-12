import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { SignUp } from "../pages/SignUp";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes >
                <Route path="/cadastro" element={<SignUp />}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

