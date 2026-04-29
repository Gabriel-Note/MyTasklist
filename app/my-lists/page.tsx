import { useState } from "react";
import TodoClient from "../todo/TodoClient";
import Categories, { type Category } from "../components/category";


export const metadata = {
  title: "My Lists - PRAG Todo App",
};

export default function MyListsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  return (
    <div className="flex flex-row gap-4 p-6">
      <div className="flex-[0.25]">
      
        {/* LEFT SIDE */}
        <Categories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <div className="flex-1">

        {/* RIGHT SIDE - under construction*/}
        <TodoClient selectedCategory={selectedCategory} />

      </div>
    </div>
  );
}