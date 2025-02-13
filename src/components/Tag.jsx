import { useState } from "react";
import Spinner from "./Spinner";
import Usegif from "../hooks/Usegif";

export default function Tag() {

    const [search,setSearch] = useState('Mr. Bean');

    let {gif,loading,fetchData} = Usegif(search);

    return (
        <div
            className="flex flex-col p-3 pb-6 justify-around items-center gap-y-5 mt-6 w-10/12 lg:w-5/12 h-[400px
            ] rounded-xl ">
            <h1
                className="text-2xl font-bold  uppercase">
                Random {search} Gif
            </h1>

            {
                loading ? (<Spinner />) : (<img src={gif} alt="GIF" loading="lazy" className="w-3/4 h-[270px] rounded-lg" />)
            }

            <input type="text" name="search" id="search" value={search} onChange={(e)=>setSearch(e.target.value)} className="w-2/3 rounded-lg h-8 text-center outline-none text-lg" />

            <button
                onClick={()=>fetchData(search)}
                className="bg-white bg-opacity-50 w-2/3 font-semibold p-1 rounded-lg focus:border-[#8BC6EC] focus:border-2">
                GENERATE
            </button>
        </div>
    );
}


