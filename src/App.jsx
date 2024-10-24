import './App.css'

function App() {
function HandleClick(){
  alert('Button Clicked');
}

function HandleClick2(){
  alert('added button click')
}

  return (
    <>
      <h1>React core concept</h1>
      <button onClick={HandleClick}>Click me</button>
      <button onClick={HandleClick2}>Click here</button>
      <button onClick={()=>{alert('Third click here')}}>Third click</button>
    </>
  )
}

export default App
