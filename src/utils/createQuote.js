import { v4 as uuidv4 } from 'uuid'

function createQuote(quote) {
  return {
    ...quote,
    id: uuidv4(),
  }
}

export default createQuote
