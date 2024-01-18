import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectCustom,
  fetchCustomQuotes,
  // selectIsLoadingViaAPI,
} from '../redux/slices/customizeSlice'

const CustomizedQuotes = () => {
  const [count, setCount] = useState(5)
  const quotes = useSelector(selectCustom)
  const dispatch = useDispatch()

  function handleAddCustomQuotes() {
    return count === 0
      ? alert("Count can't be empty")
      : count > 50
        ? alert("You can't get more than 50")
        : dispatch(fetchCustomQuotes(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${count}`))
  }

  return (
    <div>
      <input
        type="number"
        placeholder="max is 50"
        min={1}
        max={50}
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button onClick={handleAddCustomQuotes}>Click here</button> <br />
      {quotes.length === 0 ? (
        <h1>Please click the button</h1>
      ) : (
        <>
          <ul>
            <li>
              {quotes.map((el) => {
                return el.character + '\n'
              })}
            </li>
          </ul>
        </>
      )}
    </div>
  )
}

export default CustomizedQuotes
