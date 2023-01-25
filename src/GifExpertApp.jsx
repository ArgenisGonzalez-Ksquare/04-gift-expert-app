import { useState } from "react";
import { AddCategory, GiftGrid } from "./components/";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    const newList = [...categories];
    const newList2 = newList.map((element) => `${element.toLowerCase()}`);

    if (newList2.includes(newCategory.toLowerCase())) return;
    setCategories([newCategory, ...categories]);
  };

  const Items = categories.map((category) => {
    return <GiftGrid key={category} category={category} />;
  });

  return (
    <>
      <h1> GIft Expert App </h1>
      <AddCategory
        //setCategories={ setCategories }
        onNewCategory={(event) => onAddCategory(event)}
      />
      {Items}
    </>
  );
};
