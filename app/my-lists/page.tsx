"use client";

import { useState } from "react";
import TodoClient from "../components/todo/TodoClient";
import ListNameSidebar, { ListName } from "../components/ListName";


// export const metadata = {
//   title: "My Lists - PRAG Todo App",
// };

export default function MyListsPage() {
  const [selectedListName, setSelectedListName] = useState<ListName | null>(null);

  return (
    <div className="flex flex-row gap-4 p-6">
      <div className="flex-[0.25]">
      
        {/* LEFT SIDE */}
        <ListNameSidebar
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