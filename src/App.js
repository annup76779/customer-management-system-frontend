import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/layout/layout-component";
import Dashboard from "./pages/dashboard/dashboard-component";
import { Signin } from "./pages/signin/signin-component";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signin" element={<Signin />} />
                <Route path="/" element={<Layout />}>
                    <Route path="/dashboard" element={<Dashboard />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
