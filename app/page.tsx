
export default async function Home() {
   const resp = await fetch("http://localhost:8080/tasks",{
    cache: 'no-store'
  });
  const data = await resp.json();
 
  return (
    <main className="home">
      <div className="flex flex-row bg-blue-700 mx-20 p-5 rounded-lg shadow-md mb-6 font-extrabold">
          <h1 className="text-2xl font-bold">Welcome to your Task List!</h1>
      </div>
      
      <div className="flex container mx-20 p-10 gap-6 space-x-6">

        <div className="flex flex-row bg-blue-700 p-5 rounded-lg space-x-6 shadow-md mb-6 font-bold">
          
          <p>Welcome to your simple and efficient to-do list app. This project was created to help users stay organized, manage tasks, and keep track of daily responsibilities in an easy and intuitive way.</p>
        </div>

        <div className="flex flex-row mx-20 bg-blue-700 p-5 rounded-lg space-x-6 shadow-md mb-6 font-bold">
          
          <p>Whether you're planning your day, managing school assignments, or just keeping a list of things to remember, this app is designed to make productivity straightforward and stress-free. Add tasks, mark them as complete, and stay on top of what matters most.</p>

        </div>
        </div>

        <div className="flex container mx-20 p-10 gap-6 space-x-6">
          <div className="flex bg-blue-700 p-6 rounded-lg shadow-md space-x-3.5">

            <h2 className="flex text-2xl font-extrabold ">Features</h2>
            <ul className="list-disc list-inside mt-2 font-bold">
              <li>Simple and intuitive interface for easy task management.</li>
              <li>Mark tasks as complete with a single click.</li>
              <li>Organize tasks by categories for better organization.</li>
              
            </ul>

          </div>
        </div>

    </main>
  );

}