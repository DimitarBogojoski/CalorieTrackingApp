import {Link,Route,Routes} from "react-router-dom";
import DailyLimitPage from "./pages/DailyLimitPage.jsx"
import FoodEntryPage from "./pages/FoodEntryPage.jsx"
import DashboardPage from "./pages/DashboardPage.jsx"

const linkStyle = {
    color: "black",
    textDecoration: "none",
    fontWeight: "bold"
};

function App() {
  return (
      <div>
          <nav style={{ display: "flex", gap: "15px", marginBottom: "20px", backgroundColor: "#b3bd00"}}>
              <h1>Calorieta</h1>
              <Link to={"/daily-limit"} style={linkStyle}>Daily Limit</Link>
              <Link to={"/food-entry"} style={linkStyle}>Food Entry</Link>
              <Link to={"/dashboard"} style={linkStyle}>Dashboard</Link>
          </nav>

          <Routes>
              <Route path={"/daily-limit"} element={<DailyLimitPage />} />
              <Route path={"/food-entry"} element={<FoodEntryPage />}  />
              <Route path={"/dashboard"} element={<DashboardPage />}  />
              <Route path="*" element={<DashboardPage />}  />
          </Routes>
      </div>
  );
}

export default App
