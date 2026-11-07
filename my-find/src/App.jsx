import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");

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

  function deleteOrder(indexToDelete) {
    const newList = orders.filter((o, i) => i !== indexToDelete);
    setOrders(newList);
  }

  const filtered = orders.filter((o) =>
    o.name.toLowerCase().includes(search.toLowerCase())
  );

  let total = 0;
  for (let i = 0; i < orders.length; i++) {
    total = total + orders[i].price;
  }

  return (
    <div style={{ backgroundColor: "#f0f0f0", padding: "20px", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "40px", color: "blue" }}>Amal Tailor - Find Customer</h1>
      <p style={{ fontSize: "20px", color: "green" }}>Add, Search and Delete orders!</p>

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

        <p>Search Customer</p>
        <input
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "10px", width: "250px", fontSize: "18px", borderRadius: "8px" }}
        />

        <br />
        <br />
        {filtered.map((o, index) => (
          <div key={index} style={{ backgroundColor: "#f0f0f0", padding: "10px", margin: "5px", borderRadius: "8px", fontSize: "18px" }}>
            {o.name} - {o.item} - BD {o.price}
            <button
              onClick={() => deleteOrder(orders.indexOf(o))}
              style={{ marginLeft: "10px", padding: "5px 10px", backgroundColor: "red", color: "white", borderRadius: "5px", border: "none" }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
