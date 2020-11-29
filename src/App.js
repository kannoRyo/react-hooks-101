import React , {useState} from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <p>count:{count}</p>
      <button onClick={() =>setCount(count + 1)}>+1</button>
      <button onClick={() =>setCount(count - 1)}>-1</button>
      <button onClick={()=> count % 3 === 0 ? setCount(0) : setCount(count)}>3の倍数のみ０に戻る</button>
    </>
  );
}

export default App;
