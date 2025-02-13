import "./App.css";
import Random from "./components/Random"
import Tag from "./components/Tag"

function App() {

  return (
    <div className="w-full h-full sm:h-screen flex flex-col background text-center pb-14">
      <h1 className="bg-white rounded-lg px-4 py-3 text-4xl font-bold mt-10 w-11/12 mx-auto">RANDOM GIFS</h1>
      <div className="flex sm:flex-row flex-col justify-center gap-y-4 items-center sm:items-start w-full">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;

