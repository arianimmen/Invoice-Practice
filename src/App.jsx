import { useState } from "react";
import Header from "./components/Header";
import InvoiceMainData from "./components/InvoiceMainData";
import InvoiceOverview from "./components/InvoiceOverview";
import { InvoiceAmount } from "./components/InvoiceOverview";
import "./tailwind.css";

function App() {
  // All list
  const [allItems, setAllItems] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );

  const handleDelete = (id) => {
    const items = [...allItems];
    setAllItems(() => {
      const updatedItems = items.filter((item) => item.id != id);
      localStorage.setItem("data", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  return (
    <div className="p-2 md:p-9 container mx-auto max-w-screen-2xl w-full ">
      <Header />
      <div className="relative flex flex-col items-center">
        <InvoiceOverview>
          <InvoiceAmount allItems={allItems} />
        </InvoiceOverview>
        <InvoiceMainData
          setAllItems={setAllItems}
          allItems={allItems}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
