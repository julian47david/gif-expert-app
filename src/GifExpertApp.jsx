import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["coding"]);

  return (
    <div>
      <h1 className="title">GifExpertApp</h1>

      <AddCategory setCategories={setCategories} />

      <ol>
        {categories.map((category, i) => {
          return <GifGrid 
            key={category} 
            category={category} 
          />;
        })}
      </ol>
    </div>
  );
};

export default GifExpertApp;
