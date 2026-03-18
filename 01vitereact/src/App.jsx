import Chai from "./chai"

function App() {
  // Injecting js into this :
  const username = "chai aur code"

  return (
    <>
    <Chai/>
    <h1>Chai aur react {username}</h1> {/* treating it as a variable. Also called evaluated expression, the end result of js */}
    <p>test para</p>
    </>
  )
}

export default App
