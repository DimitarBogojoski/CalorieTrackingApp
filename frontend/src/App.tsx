import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { FoodEntry } from "./pages/FoodEntry";
import { Calculator } from "./pages/Calculator";
import { Profile } from "./pages/Profile";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />

            <Route element={<Layout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/food-entry" element={<FoodEntry />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/profile" element={<Profile />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}
