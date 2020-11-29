import React , {useState} from 'react'

const App = () => {
  const [state, setState] = useState(multiState)

  const increaseMoney = () => {
    setState({
      ...state,
      money: state.money + 100
    })
  }

  const decreaseMoney = () => {
    setState({
      ...state,
      money: state.money - 100
    })
  }

  const changeName = (e) =>{
    const name = e.target.value
    setState({
      ...state,
      name: name
    })
  }
  return (
    <>
      <p>現在の{state.name}は、{state.money}円です。</p>
      <button onClick={increaseMoney}>+100</button>
      <button onClick={decreaseMoney}>-100</button>
      <button onClick={() => setState({money: multiState.money})}>Reset</button>
      <input type="text" value={state.name} onChange={(e) => changeName (e)}/>
    </>
  );
}

const multiState = {
  money: 1000,
  name: ''
}

export default App;
