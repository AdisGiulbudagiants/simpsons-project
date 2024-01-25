import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaSpinner } from 'react-icons/fa'
import { setError } from '../redux/slices/errorSlice.js'
import {
  selectCustom,
  fetchCustomQuotes,
  selectIsLoadingViaAPI,
} from '../redux/slices/customizeSlice'
import CharacterCard from '../components/CharacterCard.jsx'

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
          onChange={(e) => setCount(e.target.value)}
        />
        <button
          className="px-5 mt-5 active:text-[2.25rem] hover:bg-white shadow-btnShadow shadow-white bg-yellow rounded-md border text-black font-caveat font-semibold text-[2.5rem]"
          onClick={handleAddCustomQuotes}
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
        <div className="mt-5">
          {quotes.map((character) => {
            return (
              <CharacterCard
                key={character.id}
                quote={character.quote}
                character={character.character}
                image={character.image}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default CustomizedQuotes
