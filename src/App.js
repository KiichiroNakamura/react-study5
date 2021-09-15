import React, { useEffect, useState } from "react";
import ColorfulMeaasge from "./components/ColorfulMessage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const [faceShowFlg, setFaceShowFlg] = useState(true);
  const onClickOnOff = () => {
    setFaceShowFlg(!faceShowFlg);
  };

  useEffect(() => {
    if (num > 0 && num % 3 === 0) {
      faceShowFlg || setFaceShowFlg(true);
    } else {
      faceShowFlg && setFaceShowFlg(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMeaasge color="blue">お元気ですか？</ColorfulMeaasge>
      <ColorfulMeaasge color="pink">元気です</ColorfulMeaasge>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickOnOff}>ON/OFF</button>
      <p>{num}</p>
      {faceShowFlg && <p> (^_-)-☆</p>}
    </>
  );
};

export default App;
