import { useState, useRef } from "react";

// function App() {
//   const [length, setLength] = useState(8);
//   const [numbers, setNumbers] = useState(false);
//   const [char, setChar] = useState(false);
//   const [pass, setPass] = useState("");

//   const passwordRef = useRef(null)

//   const passWordGen = useCallback(() => {
//     let password = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUWXYZabcdefghijklmnopqrstuvwxyz";
//     if (numbers) str += "0123456789";
//     if (char) str += "!@#$%^&*()";

//     for (let index = 1; index <= length; index++) {
//       const elementPass = Math.floor(Math.random() * str.length + 1);
//       password += str.charAt(elementPass);
//     }
//     setPass(password);
//   }, [length, numbers, char, setPass]);

//   const copyPasswordToClipboard = useCallback(() => {
//     passwordRef.current?.select();
//     passwordRef.current?.setSelectionRange(0, 999);
//     window.navigator.clipboard.writeText(pass)
//   }, [pass])

//   useEffect(() => {
//     passWordGen();
//   }, [length, char, numbers, passWordGen]);

//   return (
//     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
//       <h1 className="text-white text-center my-3">Password generator</h1>
//       <div className="flex shadow rounded-lg overflow-hidden mb-4">
//         <input
//           type="text"
//           value={pass}
//           className="outline-none w-full py-1 px-3"
//           placeholder="Password"
//           readOnly
//           ref={passwordRef}
//         />
//         <button
//           onClick={copyPasswordToClipboard}
//           className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
//         >
//           copy
//         </button>
//       </div>
//       <div className="flex text-sm gap-x-2">
//         <div className="flex items-center gap-x-1">
//           <input
//             type="range"
//             min={6}
//             max={100}
//             value={length}
//             className="cursor-pointer"
//             onChange={(e) => {
//               setLength(e.target.value);
//             }}
//           />
//           <label>Length: {length}</label>
//         </div>
//         <div className="flex items-center gap-x-1">
//           <input
//             type="checkbox"
//             defaultChecked={numbers}
//             id="numberInput"
//             onChange={() => setNumbers((prev) => !prev)}
//           />
//           <label htmlFor="numberInput">Numbers</label>
//         </div>
//         <div className="flex items-center gap-x-1">
//           <input
//             type="checkbox"
//             defaultChecked={char}
//             id="characterInput"
//             onChange={() => setChar((prev) => !prev)}
//           />
//           <label htmlFor="characterInput">Characters</label>
//         </div>
//       </div>
//     </div>
//   );
// }

function App(){
  const [name, setName] = useState('')
  const inputRef = useRef()

  console.log(name)

  function focus(){
    inputRef.current.focus()
  }

  return(
    <>
      <div>
        <input ref={inputRef} type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
        <p>My Name is {name} </p>
        <button onClick={focus}>Focus</button>
      </div>
    </>
  )
}

export default App;
