
export default async function ContactPage() {
  const resp = await fetch("http://localhost:8080/contact", {
    cache: "no-store",
  });
  const message = await resp.text().catch(() => "Error fetching message");

  return (
    <main className="home">
      <div className="text-2xl  bg-indigo-900 rounded break-words font-bold mb-4 text-gray-100 p-3 justify-space-between">
        <h1 className="text-3xl font-extrabold mb-4 text-center">Contact Us</h1>
        <p className="text-center">Since this is a project from school, you can either try to reach us through the school, 
          send us an email at: <a href="mailto:we-wont-look-at-this@PRAG.se" className="text-blue-500 underline">
          we-wont-look-at-this@PRAG.se</a></p>
          <p className="text-center p-2">
            Or try our special kind of contact form below, which is guaranteed to <u className="text-emerald-800">maybe</u> work!
          </p>
      </div>
    <div className="flex flex-col lg:flex-row break-words border p-6 rounded-xl shadow">
      <div className="flex border p-2  bg-fuchsia-700 text-yellow-300 m-4">
        <p>If you want to reach <u className="underline font-extrabold">P</u>G, you can whip out some really tasty food and see if he can smell it.
        If that doesnt help, you can always try to have some fun and he will come running since he likes to laugh!</p>
      </div>
      <div className="flex border p-2  bg-purple-900 text-slate-300 m-4">
        <p>If you want to reach <u className="underline font-extrabold">R</u>ebecka, look for the latest fantasy novel at your nearest bookstore... 
        Put that with a can of Redbull Blueberry and she won't be able to stay away! A nice yarn and a cozy blanket might work too...</p>
      </div><div className="flex border p-2  bg-red-700 text-emerald-200 m-4">
        <p>If you want to reach <u className="underline font-extrabold">A</u>lex, make sure there's a cat or dog nearby, that way she will run to you and you 
        wont need to worry about finding her! If she doesn't appear, try mentioning a health issue and she will come and try to solve it with you!</p>
      </div><div className="flex border p-2  bg-orange-600 text-black m-4">
        <p>If you want to reach <u className="underline font-extrabold">G</u>abriel, you can go looking for him at the local climbing center! That might not always work though,
        so see if you can lure him out with talk about the latest games or training research.</p>
      </div>
    </div>
    </main>
  );
}
