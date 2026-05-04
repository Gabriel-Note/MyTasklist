export default function Reward() {
  return (
    <div className="flex flex-col flex-1 p-6 pt-0 text-white">
      <div className="bg-blue-700 mx-20 p-5 rounded-lg shadow-md mb-6 font-extrabold">
        <h1 className="text-2xl font-bold">Rewards</h1>
      </div>

      <div className="bg-blue-700 p-5 rounded-lg max-w-max shadow-md mb-6 font-bold">
        <p>
        Här kommer du kunna se alla belöningar samt ändra* och skapa nya** så
        fort det har blivit implementerat.
      </p>
      </div>
      

      <p className="mt-auto text-sm">
        *<sup>/</sup>**Om du har behörighet.
      </p>
    </div>
  );
}
