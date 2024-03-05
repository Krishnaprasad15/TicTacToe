// import Counter from './components/counter'
import './App.css'
import Board from './components/Board'

const App=()=> {
  return (
    <div>
      {/* <Counter/> */}
      <h1 style={{textAlign:'center',fontSize:'60px', color:'#AA14F0'}}>TIC - TAC - TOE</h1>
      <Board/>
    </div>
  )
}

export default App
