import Usegif from "../hooks/Usegif"
import Spinner from "./Spinner";

export default function Random() {

    let { gif, loading, fetchData } = Usegif();

    return (
        <div
            className="flex flex-col p-3 pb-6 justify-around items-center gap-y-5 mt-6 w-10/12  lg:w-5/12 h-[400px] rounded-xl ">
            <h1
                className="text-2xl font-bold uppercase">
                A Random Gif
            </h1>

            {
                loading ? (<Spinner />) : (<img src={gif} alt="GIF" loading="lazy" className="w-3/4 h-[270px] rounded-lg" />)
            }

            <button
                onClick={() => fetchData() }
                className="bg-white bg-opacity-50 w-2/3 font-semibold p-1 rounded-lg">
                GENERATE
            </button>
        </div>
    );
}


