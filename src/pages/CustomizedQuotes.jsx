import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaSpinner } from 'react-icons/fa'
import { setError } from '../redux/slices/errorSlice.js'
import {
  selectCustom,
  fetchCustomQuotes,
  selectIsLoadingViaAPI,
} from '../redux/slices/customizeSlice'

const CustomizedQuotes = () => {
  const [count, setCount] = useState(null)
  const quotes = useSelector(selectCustom)
  const isLoadingViaAPI = useSelector(selectIsLoadingViaAPI)
  const dispatch = useDispatch()

  function handleAddCustomQuotes() {
    try {
      return count === 0 || count === null
        ? dispatch(setError('Input must not be empty'))
        : count.toString()[0] == 0
          ? dispatch(setError('The Quantity must not start from zero'))
          : count < 0
            ? dispatch(setError("The number can't be less than zero"))
            : count > 50
              ? dispatch(setError('You will not be able to get more than 50 quotes'))
              : dispatch(
                  fetchCustomQuotes(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${count}`)
                )
    } catch (error) {
      return setError(error)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="sm:mt-10 flex flex-col items-center justify-center">
        <p className="text-center text-[2rem] mb-2 font-poppins font-semibold drop-shadow-lg text-yellow">
          Enter how many quotes you want.
        </p>
        <input
          className="320px-639px:text-[1.4rem] p-2 text-center text-[2.5rem] rounded-md border placeholder:text-center outline-none font-poppins"
          placeholder="Maximum is 50"
          type="number"
          id={quotes.map((el) => el.id)}
          onChange={(e) => setCount(e.target.value)}
        />
        <button
          className="px-5 mt-5 active:text-[2.25rem] hover:bg-white shadow-btnShadow shadow-white bg-yellow rounded-md border text-black font-caveat font-semibold text-[2.5rem]"
          onClick={handleAddCustomQuotes}
          id={quotes.map((el) => el.id)}
          disabled={isLoadingViaAPI}
        >
          {isLoadingViaAPI ? (
            <FaSpinner className="m-3 mx-auto fill-black animate-spin-slow" />
          ) : (
            'Click me'
          )}
        </button>
      </div>
      {quotes.length === 0 ? (
        ''
      ) : (
        <div id={quotes.map((el) => el.id)} className=" 320px-639px:w-[90%]  mt-5">
          {quotes.map((character) => {
            return (
              <>
                <div
                  id={character.id}
                  className=" 320px-639px:w-[100%] sm:w-[90%] mx-auto 320px-639px:p-1 sm:p-3 flex flex-col items-center justify-center mb-5 bg-white border rounded-md"
                >
                  <img
                    className="mb-3 object-cover"
                    id={character.id}
                    src={character.image}
                    alt="character"
                  />
                  <div
                    className=" 320px-639px:text-[1.2rem] 320px-639px:max-w-[100%] p-3 sm:max-w-[60%] sm:text-[1.4rem] bg-pink mb-[1rem] mx-5  border border-black rounded-md text-white text-pretty font-poppins text-center"
                    id={character.id}
                  >
                    <p>{character.quote}</p>
                  </div>
                  <div
                    className=" 320px-639px:text-[1.4rem] text-[1.8rem] bg-pink mx-5 p-3 border border-black rounded-md text-white font-poppins text-center"
                    id={character.id}
                  >
                    <p>{character.character}</p>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default CustomizedQuotes
