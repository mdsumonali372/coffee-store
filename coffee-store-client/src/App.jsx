import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./App.css";
import Card from "./components/Card";

function App() {
  const loaderData = useLoaderData();
  const [coffees, setCoffees] = useState(loaderData);
  return (
    <>
      <h1 className="text-5xl text-center text-purple-600">
        Hot Coffee {coffees.length}
      </h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 px-20">
        {coffees.map((coffee) => (
          <Card
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></Card>
        ))}
      </div>
    </>
  );
}

export default App;
