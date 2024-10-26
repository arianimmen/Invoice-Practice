import { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

function InvoiceMainData({ setAllItems, allItems, handleDelete }) {
  // State for the Add Item Logic
  const [isAddClick, setIsAddClick] = useState(false);

  // States for out Inputs
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleDescription = (e) => {
    const value = e.target.value;
    setDescription(value);
  };

  const handleQuantity = (e) => {
    const value = e.target.value;
    if (value < 0) {
      alert("Quantity should be at least 0");
    } else setQuantity(Number(value));
  };

  const handlePrice = (e) => {
    const value = e.target.value;
    if (value < 0) {
      alert("Price should be at least 0");
    } else setPrice(Number(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      description,
      quantity,
      price,
      id: Date.now(),
    };
    if (price === 0 || quantity === 0 || description == "") {
      alert("Please Complete the fields correctly!");
    } else {
      setAllItems((pre) => {
        const updatedItems = [...pre, newItem];
        localStorage.setItem("data", JSON.stringify(updatedItems));
        return updatedItems;
      });
      handleClose(e);
    }
  };

  const handleClose = (e) => {
    e.preventDefault();
    setIsAddClick((pre) => !pre);
    setPrice("");
    setQuantity("");
    setDescription("");
  };

  return (
    <div className="bg-slate-100 relative top-24 w-full  rounded-2xl px-7">
      {/* content */}
      <div className="mt-28 mb-6 relative overflow-x-auto items-center  flex flex-col  ">
        {allItems.length === 0 ? (
          <span className="m-4">Your List is Empty!</span>
        ) : (
          <table className="w-full border-separate border-spacing-y-2">
            <thead>
              <tr>
                <th className="p-3 text-sm md:text-base pl-28 min-[416px]:pl-0 min-[375px]:pl-12  min-[330px]:pl-24 ">
                  Description
                </th>
                <th className="p-3 text-sm md:text-base">Qty</th>
                <th className="p-3 text-sm md:text-base">Price</th>
                <th className="p-3 text-sm md:text-base relative right-2">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {allItems.map((item) => (
                <TableItem
                  item={item}
                  key={item.id}
                  handleDelete={handleDelete}
                />
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td className="flex justify-center">
                  <div className="flex flex-col justify-end items-end pt-6">
                    <span className="text-xs mb-1 whitespace-nowrap">TOTAL AMOUNT:</span>
                    <span className="font-bold text-xl text-blue-600 whitespace-nowrap">
                      ${" "}
                      {allItems.reduce(
                        (accumulator, item) =>
                          accumulator + item.price * item.quantity,
                        0
                      )}
                    </span>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        )}

        <button
          className={`bg-blue-500 text-white px-4 py-2 rounded-md ${
            isAddClick ? "hidden" : ""
          }`}
          onClick={() => setIsAddClick((pre) => !pre)}
        >
          Add Item
        </button>
        {isAddClick ? (
          <InvoiceMainDataInputForm
            handleDescription={handleDescription}
            description={description}
            handleQuantity={handleQuantity}
            quantity={quantity}
            handlePrice={handlePrice}
            price={price}
            handleSubmit={handleSubmit}
            handleClose={handleClose}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default InvoiceMainData;

function TableItem({ item, handleDelete }) {
  return (
    <tr className="even:bg-slate-50 rounded-lg">
      <td className="pl-28 min-[416px]:pl-0  min-[375px]:pl-12  min-[330px]:pl-24 text-center text-sm md:text-base min-w-20 p-3 whitespace-nowrap rounded-tl-lg rounded-bl-lg">
        {item.description}
      </td>
      <td className="text-center text-sm md:text-base min-w-20 p-3 whitespace-nowrap">
        {item.quantity}
      </td>
      <td className="text-center text-sm md:text-base min-w-20 p-3 whitespace-nowrap">
        $ {item.price}
      </td>
      <td className="text-center text-sm md:text-base min-w-20 p-3 whitespace-nowrap rounded-tr-lg rounded-br-lg flex items-center justify-center">
        <div className="w-full"> $ {item.price * item.quantity}</div>
        <TrashIcon
          onClick={() => handleDelete(item.id)}
          className="size-4 cursor-pointer text-red-500 ml-auto"
        />
      </td>
    </tr>
  );
}

function InvoiceMainDataInputForm({
  handleDescription,
  description,
  handleQuantity,
  quantity,
  handlePrice,
  price,
  handleSubmit,
  handleClose,
}) {
  return (
    <form
      className="w-full bg-white rounded-lg flex flex-col md:flex-row lg:justify-center md:flex-wrap mb-4 mt-6"
      onSubmit={handleSubmit}
    >
      <div className="text-center text-sm md:text-base min-w-20 p-3 whitespace-nowrap rounded-tl-lg rounded-bl-lg">
        <input
          type="text"
          className="px-4"
          placeholder="Enter Description"
          value={description}
          onChange={handleDescription}
        />
      </div>

      <div className="text-center text-sm md:text-base min-w-20 p-3 whitespace-nowrap">
        <input
          type="number"
          className="px-4"
          placeholder="Enter Quantity"
          value={quantity}
          onChange={handleQuantity}
        />
      </div>

      <div className="text-center text-sm md:text-base min-w-20 p-3 whitespace-nowrap">
        <input
          type="number"
          className="px-4"
          placeholder="Enter Price"
          value={price}
          onChange={handlePrice}
        />
      </div>

      <div className="text-center text-sm md:text-base min-w-20 p-3 whitespace-nowrap rounded-tl-lg rounded-bl-lg flex items-center gap-x-4">
        <button
          type="reset"
          className="bg-slate-200 py-2 px-4 rounded-md"
          onClick={handleClose}
        >
          Cancel
        </button>
        <button
          className="bg-blue-500 py-2  px-4 rounded-md text-white"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
