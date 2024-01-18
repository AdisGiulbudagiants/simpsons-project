import { FaSpinner } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { setError } from '../redux/slices/errorSlice.js'
import {
  fetchRandomQuote,
  selectQuote,
  selectIsLoadingViaAPI,
} from '../redux/slices/randomSlice.js'

const RandomQuotes = () => {
  const quotes = useSelector(selectQuote)
  const isLoadingViaAPI = useSelector(selectIsLoadingViaAPI)
  const dispatch = useDispatch()

  function handleAddRandomQuote() {
    try {
      dispatch(fetchRandomQuote('https://thesimpsonsquoteapi.glitch.me/quotes'))
    } catch (error) {
      dispatch(setError(error.message))
    }
  }

  return (
    <div className="320px-639px:justify-start sm:h-[80vh]  flex flex-col sm:justify-center items-center">
      {quotes.length === 0 ? (
        ''
      ) : (
        <>
          <div className="h-[500px] mb-2 flex items-center justify-center ">
            <img className="object-cover" src={quotes.map((el) => el.image)} alt="character" />
          </div>
          <div className="max-w-[80%] flex flex-col justify-center items-center">
            <p className=" text-[1.4rem] bg-pink mb-[1rem] mx-5 p-3 border border-black rounded-md text-white text-pretty font-poppins text-center">
              {quotes.map((el) => el.quote)}
            </p>
            <p className="text-[1.8rem] bg-pink  mx-5 p-3 border border-black rounded-md text-white font-poppins text-center">
              {quotes.map((el) => el.character)}
            </p>
          </div>
        </>
      )}
      <button
        className="px-5 mb-5 mt-5 active:text-[2.25rem] hover:bg-white shadow-btnShadow shadow-white bg-yellow rounded-md border text-black font-caveat font-semibold text-[2.5rem]"
        onClick={handleAddRandomQuote}
        disabled={isLoadingViaAPI}
      >
        {isLoadingViaAPI ? (
          <FaSpinner className="m-3 fill-black animate-spin-slow" size={50} />
        ) : (
          'Click me'
        )}
      </button>
    </div>
  )
}

export default RandomQuotes
