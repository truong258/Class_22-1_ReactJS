// import logo from "./logo.svg";
// import { useState, useEffect } from "react";
// import "./App.css";
// import { Welcome } from "./component/Welcome";
// import NewHeader from "./component/Header";
// import Lifecycle from "./component/Lifecycle";
// function App() {
//   const [randomNumber, setRandomNumber] = useState(0);
//   const [inputValue, setInputValue] = useState(0);
//   const [numberOfGuesing, setnumberOfGuesing] = useState(0);
//   const [correct, setCorrect] = useState(false);
//   const [message, setmessage] = useState("");
//   useEffect(() => {
//     randomFunction();
//   }, []);
// nếu là mảng rỗng thì chỉ gọi duy nhất 1 lần đầu tiên khi mouting (khởi tạo) component
// nếu có giá tri (depen) thi nó sẽ gọi mỗi khi giá trị đó thay đổi
// const randomFunction = () => {
//   console.log(Math.random());
//   let random = Math.floor(Math.random() * 100 + 1);
//   setRandomNumber(random);
// };
// useEffect(() => {
//   if (numberOfGuesing > 7) {
//     alert("bạn thua rồi");
//     newGame();
//   }
// }, [numberOfGuesing]);

// const onChangeValue = (event) => {
//   setInputValue(parseInt(event.target.value));
//   console.log(event);
// };
// const guess = () => {
//   setnumberOfGuesing(numberOfGuesing + 1);
//   if (inputValue === randomNumber) {
//     setCorrect(true);

//     newGame();
//     alert("đoán đúng rồi");
//   } else {
//     if (inputValue > randomNumber) {
//       setmessage("Số bạn đoán lớn quá");
//     }
//     if (inputValue < randomNumber) {
//       setmessage("Số bạn đoán nhỏ quá");
//     }
//     setCorrect(false);
//   }
// };

// const newGame = () => {
//   randomFunction();
//   setInputValue(0);
//   setnumberOfGuesing(0);
// };
// return (
//   <div>
//     {/* Header */}
//     <div
//       style={{ backgroundColor: correct ? "green" : "gray" }}
//       className="jumbotron text-center"
//     >
//       <h1>Getting random number</h1>
//       <p>
//         Tôi đã chọn một số random trong khoảng 1 đến 100, bạn có thể đoán
//         được?
//       </p>
//       <p>{randomNumber}</p>
//     </div>
//     {/* Body */}
//     <div className="body">
//       <button onClick={newGame}>New game</button>
//       <hr />
//       <p className="font-weight-bold">
//         Số lần bạn đã đoán là: {numberOfGuesing}
//       </p>
//       <p className="font-weight-bold">Số bạn đoán là</p>
//       <input value={inputValue} type="number" onChange={onChangeValue} />
//       <button onClick={guess} className="btn-success">
//         Đoán
//       </button>
//     </div>
//   </div>
// );
// }
// import và export
// lifecycle
// export default App;
import "./App.css"
import { useState, useEffect } from "react"

function App() {

  const [randomNumber, setRandomNumber] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [numberOfGuesing, setNumberOfGuesing] = useState(0);
  const [correct, setCorrect] = useState(false);
  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");


  const RandomFunction = () => {
    let random = Math.floor(Math.random() * 100 + 1);
    setRandomNumber(random);
  }
  const onChangeValue = (event) => {
    setInputValue(parseInt(event.target.value));
  }
  const Guest = () => {
    setNumberOfGuesing(numberOfGuesing + 1);
    if (inputValue === randomNumber) {
      alert("Đoán đúng rồi");
      Newgame();
    } else {
      if (inputValue > randomNumber) {
        setMessage("số bạn đoán quá lớn");
      } else {
        setMessage("số bạn đoán quá nhỏ");
      }
    }
  }
  useEffect(() => {
    if (numberOfGuesing > 7) {
      alert("bạn thua rồi");
      Newgame();
    }
  }, [numberOfGuesing]);

  const Newgame = () => {
    RandomFunction();
    setInputValue(0);
    setNumberOfGuesing(0);
    setMessage("");
    setMessage2("bạn đã chọn được số rồi");
    // <p>bạn đã chọn được số rồi</p>
  };
  return (

    < div >
      {/*Header*/}
      <div>
        <h1>Guesting random number</h1>
        <p>Tôi đã chọn 1 số random từ 1 đến 100 bạn có thể đoán được không?</p>
        {/* <p>{randomNumber}</p> */}
        <p>{message2}</p>
      </div >
      {/*Body*/}
      <div className="body">
        <buton className="button" onClick={Newgame}>NewGame</buton>
        <p>Số lần bạn đoán là: {numberOfGuesing}</p>
        <p>số bạn đoán là:</p>
        <input value={inputValue} type="number" onChange={onChangeValue}></input>
        <button onClick={Guest}>Đoán</button>
        <p>{message}</p>
      </div>
    </div >
  )
};



export default App;


