import React, { useState } from "react";

function Calculator() {
  const [result, setresult] = useState("");
  const clickHandle = (e) => {
    setresult(result.concat(e.target.value));
  };
  const clearScreen = () => {
    setresult("");
  };

  const calculate = () => {
    setresult(eval(result).toString());
  };
  return (
    <div className="bg-gray-900 text-white w-screen h-screen justify-center flex items-center">
      <div className="w-64 h-auto bg-gray-900 rounded-2xl border-4 shadow-xl border-gray-100">
        {/* {Screen} */}
        <div className="screen p-2">
          <input
            type="text"
            value={result}
            className="shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] text-black placeholder-black text-right px-1 outline-none rounded-lg bg-gray-100 text-2xl w-full text-black"
            placeholder="0"
          />
        </div>
        {/* {Brand} */}
        <div className="brand flex justify-center mb-2 shadow-md text-gray-500 bg-gray-200 bg-opacity-90">
          <h1 className="text-gray-900 text-xs font-bold">Devknus</h1>
        </div>
        {/* {Keyboard} */}
        <div className="keyboard">
          <div className=" m-2 flex justify-between ">
            <input
              type="button"
              onClick={clearScreen}
              value="C"
              className="bg-red-300 shadow-md rounded-lg w-12 h-12 text-black text-center font-medium flex justify-center items-center outline-none "
            />
            <input
              type="button"
              onClick={clickHandle}
              value="<"
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-black text-center font-medium flex justify-center items-center outline-none "
            />
            <input
              type="button"
              onClick={clickHandle}
              value="%"
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-black text-center font-medium flex justify-center items-center outline-none "
            />
            <input
              type="button"
              onClick={clickHandle}
              value="/"
              className="bg-pink-300 shadow-md rounded-lg w-12 h-12 text-black text-center font-medium flex justify-center items-center outline-none "
            />
          </div>
          <div className=" m-2 flex justify-between ">
            <input
              type="button"
              onClick={clickHandle}
              value="7"
              className="bg-gray-200  shadow-md rounded-lg w-12 h-12 text-black text-center font-medium flex justify-center items-center outline-none "
            />
            <input
              type="button"
              onClick={clickHandle}
              value="8"
              className="bg-gray-200  shadow-md rounded-lg w-12 h-12 text-black text-center font-medium flex justify-center items-center outline-none "
            />
            <input
              type="button"
              onClick={clickHandle}
              value="9"
              className="bg-gray-200  shadow-md rounded-lg w-12 h-12 text-black text-center font-medium flex justify-center items-center outline-none "
            />
            <input
              type="button"
              onClick={clickHandle}
              value="*"
              className="bg-green-300 shadow-md rounded-lg w-12 h-12 text-black text-center font-medium flex justify-center items-center outline-none "
            />
          </div>
          <div className=" m-2 flex justify-between ">
            <input
              type="button"
              onClick={clickHandle}
              value="4"
              className="bg-gray-200  shadow-md rounded-lg w-12 h-12 text-black text-center font-medium flex justify-center items-center outline-none "
            />
            <input
              type="button"
              onClick={clickHandle}
              value="5"
              className="bg-gray-200  shadow-md rounded-lg w-12 h-12 text-black text-center font-medium flex justify-center items-center outline-none "
            />
            <input
              type="button"
              onClick={clickHandle}
              value="6"
              className="bg-gray-200  shadow-md rounded-lg w-12 h-12 text-black text-center font-medium flex justify-center items-center outline-none "
            />
            <input
              type="button"
              onClick={clickHandle}
              value="-"
              className="bg-indigo-300 shadow-md rounded-lg w-12 h-12 text-black text-center font-medium flex justify-center items-center outline-none "
            />
          </div>
          <div className=" m-2 flex justify-between ">
            <input
              type="button"
              onClick={clickHandle}
              value="1"
              className="bg-gray-200  shadow-md rounded-lg w-12 h-12 text-black text-center font-medium flex justify-center items-center outline-none "
            />
            <input
              type="button"
              onClick={clickHandle}
              value="2"
              className="bg-gray-200  shadow-md rounded-lg w-12 h-12 text-black text-center font-medium flex justify-center items-center outline-none "
            />
            <input
              type="button"
              onClick={clickHandle}
              value="3"
              className="bg-gray-200  shadow-md rounded-lg w-12 h-12 text-black text-center font-medium flex justify-center items-center outline-none "
            />
            <input
              type="button"
              onClick={clickHandle}
              value="+"
              className="bg-purple-300 shadow-md rounded-lg w-12 h-12 text-black text-center font-medium flex justify-center items-center outline-none "
            />
          </div>
          <div className=" m-2 flex justify-between ">
            <input
              type="button"
              onClick={clickHandle}
              value="0"
              className="bg-gray-200  shadow-md rounded-lg w-12 h-12 text-black text-center font-medium flex justify-center items-center outline-none "
            />
            <input
              type="button"
              value="00"
              onClick={clickHandle}
              className="bg-gray-200  shadow-md rounded-lg w-12 h-12 text-black text-center font-medium flex justify-center items-center outline-none "
            />
            <input
              type="button"
              value="."
              onClick={clickHandle}
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-black text-center font-medium flex justify-center items-center outline-none "
            />
            <input
              type="button"
              onClick={calculate}
              value="="
              className="bg-orange-300 shadow-md rounded-lg w-12 h-12 text-black text-center font-medium flex justify-center items-center outline-none "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
