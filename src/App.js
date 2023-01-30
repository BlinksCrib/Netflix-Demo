import './App.css'
import Form from './components/Form'
import List from './components/List'
import Banner from './components/Banner'

import { useState,useEffect } from "react"

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"))
  const setToggle = () =>{
    setTheme(theme === "dark" ? "light" : "dark")
  }
useEffect(() => {
  const currentTheme = localStorage.getItem('theme')
  if (currentTheme) {
    setTheme(currentTheme)
  } else {
    localStorage.setItem('theme', theme)
  }
}, [])

useEffect(() => {
  localStorage.setItem('theme', theme)
}, [theme])

const className = theme === 'light' ? 'light' : 'dark'

  return (
    <div className={className}>
      <button onClick={setToggle}>{theme === 'dark' ? 'light' : 'dark'}</button>
      <Form />
      <Banner />
      <List />
    </div>
  )
}

export default App
