import {useState} from "react";
function App() {
  const[search,setSearch]=useState("");
  const products = [

{name:"iphone",price:400},
{name:"samsung",price:350},
{name:"huawei",price:300},  
{name:"nokia",price:150},
];
const filtered= products.filter((p)=> p.name.toLowerCase().includes(search.toLowerCase()));
return(
  <div>
    <h1 style= {{ fontSize :"50px",color:"blue"}}> My Shop - Amal</h1>
    <p>Products in BD</p>
    <input placeholder="Search products..." value={search} onChange={(e)=> setSearch(e.target.value)} style={{padding:"10px",width:"300px",fontSize:"18px",borderRadius:"8px",border:"1px solid gray"}}/>
    {filtered.map((p)=>(
      <div key={p.name}style={{backgroundColor:"white",border:"1px solid gray",padding:"15px",margin:"10px",borderRadius:"10px"}}>
        <h3>{p.name}</h3>
        <p style={{color:"green"}}>BD {p.price}</p>
        <hr />
        </div>
    ))}
    </div>
);
}
export default App;
