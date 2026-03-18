import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
function MyApp(){
  return(
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}
// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank',

//     },
//     children: "Click me to visit Google!"
// }
const anotherElement = (
  <a href='https:google.com' target='_blank'>Visit Google</a>
)
const anotherUser = "Chai aur react"


const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target:'_blank'},
  'Click me to visit google.',
   anotherUser

)


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <MyApp /> */}
    {/* reactElement() = wont work because the syntax required here is different than customreact.js */}
    {/* anotherElement = will work */}
    {reactElement} {/* will work now as the syntax here is like the required one(jsx). */}
    <App />
  </>
)