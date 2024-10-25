import { useState } from "react";
import Header from "./components/Header";
import InvoiceMainData from "./components/InvoiceMainData";
import InvoiceOverview from "./components/InvoiceOverview";
import "./tailwind.css";

function App() {
  // All list
  const [allItems, setAllItems] = useState([]);

  return (
    <div className="p-2 md:p-9 container mx-auto max-w-screen-2xl w-full ">
      <Header />
      <div className="relative flex flex-col items-center">
        <InvoiceOverview allItems={allItems} />
        <InvoiceMainData setAllItems={setAllItems} allItems={allItems} />
      </div>
    </div>
  );
}

export default App;
