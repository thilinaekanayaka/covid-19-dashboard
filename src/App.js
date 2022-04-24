import './App.css';
import { Link } from "react-router-dom";
import { Extended } from './components/Extended';
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <div className="App">
      {/* <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav> */}
      <Dashboard />
      {/* <Extended /> */}
    </div>
  );
}

export default App;
