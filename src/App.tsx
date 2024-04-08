import { Stars } from './components/Stars'
import './App.css'

function App() {
  return (
    <>
      <Stars />
      <Stars count={-1} />
      <Stars count={0} />
      <Stars count={1} />
      <Stars count={2} />
      <Stars count={3} />
      <Stars count={4} />
      <Stars count={5} />
      <Stars count={6} />
      <Stars count={7} />
    </>
  )
}

export default App
