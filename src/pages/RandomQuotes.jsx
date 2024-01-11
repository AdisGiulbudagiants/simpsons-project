import { useSelector, useDispatch } from 'react-redux'
import { fetchQuote, selectQuote } from '../redux/slices/RandomSlice'

const RandomQuotes = () => {
  const quotes = useSelector(selectQuote)
  const dispatch = useDispatch()

  function handleAddRandomQuote() {
    dispatch(fetchQuote('https://thesimpsonsquoteapi.glitch.me/quotes'))
  }

  console.log(quotes)
  return (
    <div>
      <button onClick={handleAddRandomQuote}>Press here</button> <br />
      {quotes.length === 0 ? (
        <h1>Please click the button</h1>
      ) : (
        <h1>{quotes.map((el) => el.quote)}</h1>
      )}
      <img src={quotes.map((el) => el.image)} alt="character" />
      <h1>{quotes.map((el) => el.character)}</h1>
    </div>
  )
}

export default RandomQuotes
