import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import { useState } from "react";

export default function App() {
  const [items, SetItems] = useState([]);

  function handleAddItem(item) {
    SetItems(() => [...items, item]);
  }


  function handleDeleteItem(id) {

    SetItems(items => items.filter(item => item.id !== id))
  }


  function handleToggleCheckBox(id) {
    SetItems(items => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))

  }

  function handleClearIems() {
    const confirmed = window.confirm('Are you sure want to clear all items?')
    if (confirmed) SetItems([])
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList onToggleCheckBox={handleToggleCheckBox} onDeleteItem={handleDeleteItem} onCLearItems={handleClearIems} items={items} />
      <Stats items={items} />
    </div>
  );
}
