import Counter from './counter';
import './App.css'
import Team from './team';
import Users from './users';
import Friends from './friends';

function App() {
function HandleClick(){
  alert('Button Clicked');
}

function HandleClick2(){
  alert('added button click')
}
const AddNumber=(num)=>{
alert(num + 5)
}

  return (
    <>
      <h1>React core concept</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={HandleClick}>Click me</button>
      <button onClick={HandleClick2}>Click here</button>
      <button onClick={()=>{alert('Third click here')}}>Third click</button>
      <button onClick={()=>{AddNumber(5)}}>Add number</button>
    </>
  )
}

export default App
