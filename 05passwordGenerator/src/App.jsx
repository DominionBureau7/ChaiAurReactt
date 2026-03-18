import { useState, useCallback, useEffect, useRef} from 'react'
// import './App.css'

function App() {

  // Dependencies below or conditions for password generation.
  const [length, setLength] = useState(8);// We destructure it so "length" stores the current password length and "setLength" is used to update it, which tells React to re-render the component.
  const [numberAllowed, setnumberAllowed] = useState(false);// "numberAllowed" holds the current value, and "setnumberAllowed" updates it.
  const [charAllowed, setcharAllowed] = useState(false);// Updating it with "setcharAllowed" triggers React to regenerate the password.
  const [password, setpassword] = useState("");// When setpassword() updates this value, React updates the UI automatically.

  // useRef hook 
  const passwordRef = useRef(null);// useRef creates a persistent reference to the input element.


//___________________________Random Password Creation Loop_______________________________
  const passwordGenerator = useCallback(() => {
    // TODO: implement password generation logic
    let pass = "";
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "0123456789"//A B C ... z 0 1 2 3 4 5 6 7 8 9
    if(charAllowed) str += "!@#$%^&*"//letters + numbers + symbols
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()* str.length + 1)
      pass += str.charAt(char)
      
    }
    setpassword(pass)//stores password in memory.
  }, [length,numberAllowed,charAllowed]);// useCallback(()=>{function},[dependencies])

//_________________________Copy Password Function________________________________
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(password)
  },[password])

//__________________________useEffect (Auto Password Generator)___________________________
//useEffect(() => {code to run}, [dependencies])

  useEffect(() => {passwordGenerator()}, [length,numberAllowed,charAllowed,//Watch these values,If any of them changes, React runs the effect again.
  passwordGenerator])//=React rules say: If a function is used inside useEffect, it must be added to dependencies.

  return (
   <>
   <h1 className='text-4xl text-center text-white'>Password Generator</h1>
   {/*****************Main container************/}
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px4 my-8 text-orange-600 bg-gray-900'>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text"
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='Password.....'
      readOnly
      ref = {passwordRef}/>
      <button
      onClick={copyPasswordToClipboard} 
      className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'>Copy</button>
    </div>

    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range" 
        min={6}
        max={20}
        value={length}
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}}/>
        <label>Length : {length}</label>{/*insert JavaScript value inside JSX.*/}
      </div>

      <div className='flex items-center gap-x-1'>
        <input type="checkbox" 
        defaultChecked={numberAllowed}
        id='numberInput'
        onChange = {() =>{
          setnumberAllowed((prev) => !prev);//If true → false/If false → true
        }}
        />
        <label htmlFor="numberInput">Numbers</label>{/**connects the label to the checkbox.*/}
      </div>

      <div className='flex items-center gap-x-1'>
        <input type="checkbox" 
        defaultChecked = {charAllowed}
        id='characterInput'
        onChange={() => {
          setcharAllowed((prev) => !prev);
        }}
        />
        <label htmlFor="characterInput">Characters</label>{/**connects the label to the checkbox.*/}
      </div>
    </div>
   </div>
   </>
  )
}

export default App

/*
Component Flow Summary for understanding this project :

1. useState Hooks
   - length → stores desired password length
   - numberAllowed → whether numbers can be included
   - charAllowed → whether special characters can be included
   - password → stores the generated password

2. useRef Hook
   - passwordRef → references the input field so the password text can be selected and copied.

3. passwordGenerator (useCallback)
   - Generates a random password based on the selected options
   - Uses length, numberAllowed, and charAllowed to build the character pool
   - Updates the password state using setpassword()

4. useEffect
   - Automatically runs passwordGenerator() whenever:
     length, numberAllowed, or charAllowed changes
   - Ensures the password always matches the current settings

5. copyPasswordToClipboard (useCallback)
   - Selects the password inside the input field using passwordRef
   - Copies the password to the system clipboard

6. JSX UI (return)
   - Displays the generated password in a read-only input
   - Provides:
        • slider → controls password length
        • checkbox → toggle numbers
        • checkbox → toggle special characters
        • copy button → copies password to clipboard
*/