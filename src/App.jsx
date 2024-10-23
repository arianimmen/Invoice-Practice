import Header from "./components/Header";
import InvoiceOverview from "./components/InvoiceOverview";
import "./tailwind.css";

function App() {
  return (
    <div className="p-2 md:p-9 container mx-auto max-w-screen-2xl w-full">
      <Header />
      {/* main */}
      <div className="relative flex flex-col items-center">
        <InvoiceOverview />

        {/* Main__Body */}
        <div className="bg-slate-100 h-52 relative top-10 w-full  rounded-2xl"></div>
      </div>
    </div>
  );
}

export default App;
