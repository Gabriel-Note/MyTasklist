"use client";

import { useState } from "react";
import TodoClient from "../components/todo/TodoClient";
import ListName from "../components/ListName";

interface ListName {
  id: number;
  name: string;
}

export default function MyListsPage() {
  const [selectedListName, setSelectedListName] = useState<ListName | null>(null);

  return (
    <div className="flex flex-row gap-12 p-6 px-12  items-stretch">
      <div className="flex-[0.25]">
      
        {/* LEFT SIDE */}
        <ListName
          selectedListName={selectedListName}
          setSelectedListName={setSelectedListName}
        />
      </div>
      <div className="flex-1">

        {/* RIGHT SIDE - under construction*/}
        <TodoClient selectedList={selectedListName} />

      </div>
    </div>
  );
}