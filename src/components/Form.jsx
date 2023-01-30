import React, { useContext, useState } from 'react'
import { MovieContext } from '../MovieContext'

const Form = () => {
    const {setSearchKey} = useContext(MovieContext)
    const [search, setSearch] = useState("")
    const handleSubmit = (e) =>{
        e.preventDefault()
        // setSearch(setSearchKey)
        setSearchKey(search)
        setSearch("")
    }
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1 style={{ color: 'red' }}>Netflix</h1>
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div style={{backgroundColor: "grey", padding:"6px", borderRadius: "20px"}}>
              <input type='text' name='' id='' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search...' style={{border: "none", outline: "none", background: "none"}} />
            </div>
            <input type='submit' value='Search' />
          </div>
        </form>
      </div>
    </>
  )
}

export default Form