"use client";

import { useEffect, useState } from "react";
import {
  getListNames,
  createListName,
  deleteListName,
} from "../api/api_calls";

interface ListName {
  id: number;
  name: string;
}

interface Props {
  selectedListName: ListName | null;
  setSelectedListName: (ListName: ListName | null) => void;
}

export { type ListName };

export default function ListName({ selectedListName, setSelectedListName }: Props) {
  const [ListName, setListName] = useState<ListName[]>([]);
  const [newListName, setNewListName] = useState("");

  async function fetchListNames(selectLatest = false) {
    const data = await getListNames();
    const lists = Array.isArray(data) ? data : [];

    setListName(lists);

    if (lists.length > 0 && (!selectedListName || selectLatest)) {
      setSelectedListName(selectLatest ? lists[lists.length - 1] : lists[0]);
    }
  }

  useEffect(() => {
    fetchListNames();
  }, []);

  const handleCreateListName = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createListName(newListName);
    setNewListName("");
    fetchListNames(true);
  };

  const handleDeleteListName = async (id: number) => {
    await deleteListName(id);
    setSelectedListName(null);
    fetchListNames();
  };

  return (
    <div className="w-75 bg-white border p-2 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4 text-black">Categories</h2>

      {/* Create category */}
      <form onSubmit={handleCreateListName} className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="New category"
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
          required
          className="flex-1 px-2 py-1 border rounded text-black"
        />
        <button className="bg-green-900 text-white px-3 py-1 rounded">
          +
        </button>
      </form>

      {/* ListNames */}
      <div className="flex flex-col gap-2">
        {ListName.map((listName) => (
          <div key={listName.id} className="flex gap-1">
            <button
              onClick={() => setSelectedListName(listName)}
              className={`flex-1 px-2 py-1 rounded text-white ${
                selectedListName?.id === listName.id
                  ? "bg-blue-800"
                  : "bg-blue-950"
              }`}
            >
              {listName.name}
            </button>

            <button
              onClick={() => handleDeleteListName(listName.id)}
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