import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [orders, setOrders] = useState([]);

  function addOrder() {
    if (name === "" || item === "" || price === "") {
      return;
    }
    const newOrder = { name: name, item: item, price: Number(price) };
    setOrders([...orders, newOrder]);
    setName("");
    setItem("");
    setPrice("");
  }

  let total = 0;
  for (let i = 0; i < orders.length; i++) {
    total = total + orders[i].price;
  }

  return (
    <div style={{ backgroundColor: "#f0f0f0", padding: "20px", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "40px", color: "blue" }}>Amal Tailor Order Book</h1>
      <p style={{ fontSize: "20px", color: "green" }}>Write all orders like notebook!</p>

      <div style={{ backgroundColor: "white", padding: "15px", margin: "10px", borderRadius: "10px" }}>
        <p>Customer Name</p>
        <input
          placeholder="Example: Mohammed"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "10px", width: "250px", fontSize: "18px", borderRadius: "8px" }}
        />

        <p>Item - Shirt / Pant</p>
        <input
          placeholder="Example: Shirt"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          style={{ padding: "10px", width: "250px", fontSize: "18px", borderRadius: "8px" }}
        />

        <p>Price (BD)</p>
        <input
          placeholder="Example: 5"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ padding: "10px", width: "250px", fontSize: "18px", borderRadius: "8px" }}
        />

        <br />
        <br />
        <button
          onClick={addOrder}
          style={{ padding: "12px 20px", fontSize: "20px", backgroundColor: "blue", color: "white", borderRadius: "8px", border: "none" }}
        >
          Add Order
        </button>

        <h2 style={{ color: "green", fontSize: "25px" }}>
          Total Orders: {orders.length} - Total Money: BD {total}
        </h2>

        {orders.map((o, index) => (
          <div key={index} style={{ backgroundColor: "#f0f0f0", padding: "10px", margin: "5px", borderRadius: "8px", fontSize: "18px" }}>
            {o.name} - {o.item} - BD {o.price}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
