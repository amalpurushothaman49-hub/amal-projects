import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [shirts, setShirts] = useState("");
  const [price, setPrice] = useState("");
  const [total, setTotal] = useState(0);

  function calculate() {
    const t = Number(shirts) * Number(price);
    setTotal(t);
  }

  return (
    <div style={{ backgroundColor: "#f0f0f0", padding: "20px", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "40px", color: "blue" }}>Amal Tailor Bill Calculator</h1>
      <p style={{ fontSize: "20px", color: "green" }}>Calculate bill for your customer!</p>

      <div style={{ backgroundColor: "white", padding: "15px", margin: "10px", borderRadius: "10px" }}>
        <p>Customer Name</p>
        <input
          placeholder="Type customer name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "10px", width: "250px", fontSize: "18px", borderRadius: "8px" }}
        />

        <p>Number of Shirts</p>
        <input
          placeholder="Example: 3"
          value={shirts}
          onChange={(e) => setShirts(e.target.value)}
          style={{ padding: "10px", width: "250px", fontSize: "18px", borderRadius: "8px" }}
        />

        <p>Price per Shirt (BD)</p>
        <input
          placeholder="Example: 5"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ padding: "10px", width: "250px", fontSize: "18px", borderRadius: "8px" }}
        />

        <br />
        <br />
        <button
          onClick={calculate}
          style={{ padding: "12px 20px", fontSize: "20px", backgroundColor: "blue", color: "white", borderRadius: "8px", border: "none" }}
        >
          Calculate Bill
        </button>

        <h2 style={{ color: "green", fontSize: "30px" }}>
          {name ? name + " - " : ""}Total: BD {total}
        </h2>
      </div>
    </div>
  );
}

export default App;
