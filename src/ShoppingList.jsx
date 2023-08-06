import { useState } from "react";
import { v4 as uuid } from "uuid";
import ShoppingListForm from "./ShoppingListForm";
import ValidatedShoppingListForm from "./ValidatedShoppingListForm";
import ValidatedShoppingListForm2 from "./ValidatedShoppingListForm2";

function ShoppingList() {
  const [items, setItems] = useState([
    {
      id: uuid(),
      product: "Bananas",
      quantity: 8,
    },
    {
      id: uuid(),
      product: "Eggs",
      quantity: 12,
    },
  ]);
  const addItem = (item) => {
    setItems((currItems) => {
      return [...currItems, { ...item, id: uuid() }];
    });
  };
  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map((i) => (
          <li key={i.id}>
            {i.product} - {i.quantity}
          </li>
        ))}
      </ul>
      <ValidatedShoppingListForm2 addItem={addItem} />
    </div>
  );
}

export default ShoppingList;
