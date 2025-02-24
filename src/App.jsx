import Debounce from "./components/Debounce.jsx";
import Throttle from "./components/Throttle.jsx";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        gap: "20px",
        background: "#2b2b2b",
      }}
    >
      <h2 style={{fontSize:'30px', color: "#b2b2b2",marginBottom:'40px' }}>Debounce and Throttling Example</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <Throttle />
        <Debounce />
      </div>
    </div>
  );
};

export default App;
