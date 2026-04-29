"use client";

import { useEffect, useState } from "react";
import {
  getCategories,
  createCategory,
  deleteCategory,
} from "../api/api_calls";

interface Category {
  id: number;
  name: string;
}

interface Props {
  selectedCategory: Category | null;
  setSelectedCategory: (category: Category | null) => void;
}

export { type Category };

export default function CategoriesSidebar({ selectedCategory, setSelectedCategory }: Props) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategoryName, setNewCategoryName] = useState("");

  async function fetchCategories(selectLatest = false) {
    const data = await getCategories();
    const cats = Array.isArray(data) ? data : [];

    setCategories(cats);

    if (cats.length > 0 && (!selectedCategory || selectLatest)) {
      setSelectedCategory(selectLatest ? cats[cats.length - 1] : cats[0]);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCreateCategory = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createCategory(newCategoryName);
    setNewCategoryName("");
    fetchCategories(true);
  };

  const handleDeleteCategory = async (id: number) => {
    await deleteCategory(id);
    setSelectedCategory(null);
    fetchCategories();
  };

  return (
    <div className="w-75 bg-white border p-2 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4 text-black">Categories</h2>

      {/* Create category */}
      <form onSubmit={handleCreateCategory} className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="New category"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
          required
          className="flex-1 px-2 py-1 border rounded text-black"
        />
        <button className="bg-green-900 text-white px-3 py-1 rounded">
          +
        </button>
      </form>

      {/* Categories */}
      <div className="flex flex-col gap-2">
        {categories.map((category) => (
          <div key={category.id} className="flex gap-1">
            <button
              onClick={() => setSelectedCategory(category)}
              className={`flex-1 px-2 py-1 rounded text-white ${
                selectedCategory?.id === category.id
                  ? "bg-blue-800"
                  : "bg-blue-950"
              }`}
            >
              {category.name}
            </button>

            <button
              onClick={() => handleDeleteCategory(category.id)}
              className="bg-red-500 text-white px-2 rounded"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}