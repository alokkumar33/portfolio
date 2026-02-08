import Card from "./Component/Card";

function App() {
  return (
    <>
    <div className="bg-zinc-700">
      <div className="text-4xl font-bold text-green-600 bg-yellow-500 px-5 py-3 mb-6 flex items-center justify-center">
        React + Tailwind working 🚀
      </div>
      <Card username="alok bhai" btntext="clicke me" />
      <Card username="confusion" btntext="submit it"/>
    </div>  
    </>
  );
}

export default App;
