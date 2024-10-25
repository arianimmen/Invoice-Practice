function InvoiceOverview({ allItems }) {
  return (
    <div className="absolute top-0 z-10 w-full px-2 md:px-7">
      <div
        className="bg-slate-50 p-3 flex rounded-2xl gap-x-1 md:gap-x-4 shadow-[0_1px_4px_rgba(56,119,194,0.05),_0_-4px_20px_rgba(56,119,194,0.08)]z
"
      >
        <InvoiceInfo />
        <InvoiceAmount allItems={allItems} />
        <InvoiceNumber />
      </div>
    </div>
  );
}

export default InvoiceOverview;

function InvoiceInfo() {
  return (
    <div className="w-1/2 flex flex-col gap-y-1 bg-slate-100 py-3 px-4 rounded-lg justify-center sm:w-1/3 lg:px-9">
      <span className="text-xs font md:text-base">Invoice to:</span>

      <div className="flex">
        <input
          type="text"
          placeholder="Your Name"
          className="placeholder:text-sm md:placeholder:text-base text-sm md:text-base font-bold"
        ></input>
      </div>

      <input
        type="text"
        className="text-xs md:text-base text-slate-500"
        placeholder="Address"
      ></input>
    </div>
  );
}

function InvoiceAmount({ allItems }) {
  return (
    <div className="hidden sm:flex flex-col items-end gap-y-2 bg-slate-50 border border-slate-200 py-4 px-4 rounded-lg justify-center sm:w-1/3 lg:px-9">
      <span className="text-xs">Amount due:</span>
      <div className="flex flex-col items-end">
        <span className="text-xl font-bold md:text-2xl">
          ${" "}
          {allItems.reduce(
            (accumulator, item) => accumulator + item.price * item.quantity,
            0
          )}
        </span>
        <span className="font-bold text-slate-400 md:text-xl">USD</span>
      </div>
      <span className="font-bold text-slate-400 text-sm md:text-base">
        {new Date().toLocaleDateString("en-US", {
          day: "2-digit",
          year: "numeric",
          month: "short",
        })}
      </span>
    </div>
  );
}

function InvoiceNumber() {
  return (
    <div className="w-1/2 gap-y-2 flex flex-col sm:w-1/3">
      <div className="flex flex-col text-xs py-3 px-4 rounded-lg bg-slate-100 md:text-base">
        <span className="">Invoice number:</span>
        <input type="text" className="font-bold" placeholder="Number"></input>
      </div>
      <div className="flex flex-col text-xs py-3 px-4 rounded-lg bg-slate-100 md:text-base">
        <span>Issued:</span>
        <span className="font-bold">
          {new Date().toLocaleDateString("en-US", {
            day: "2-digit",
            year: "numeric",
            month: "short",
          })}
        </span>
      </div>
    </div>
  );
}
