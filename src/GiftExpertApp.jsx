import React from "react";
import { useState } from "react";
import AddCategory  from "./components/AddCategory";
import GiftGrid from './components/GiftGrid'


const GiftExpertApp = () => {
  const [categories, setCategories] = useState([""]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return; //!No te deja agregar las mismas palabras o frases, no te lo deja agregar a la lista.
    setCategories([...categories, newCategory]);
  };
  return (
    <>
      <h1>giftExpert</h1>
      <AddCategory onNewCategory={(event) => onAddCategory(event)} />
      {categories.map((category) => (
        <GiftGrid category={category} key={category} />
      ))}
    </>
  );
};

export default GiftExpertApp;

//!const api-key = 'B4BlrX9LxjpR8QYGWkpd4VFx2fByhh29'
