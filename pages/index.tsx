import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

interface QuoteArray {
  image: string, quote: string, character: string
}

const Home: NextPage = () => {
  const [quoteData, setQuoteData] = useState<QuoteArray>()
  const [loading, setLoading] = useState(true)
  const [filterString, setFilterString] = useState('')

  const handleFetch = () => {
    let url;
    if(filterString.length > 1){
      url = 'https://thesimpsonsquoteapi.glitch.me/quotes?character='+filterString
    }else{
      url = 'https://thesimpsonsquoteapi.glitch.me/quotes'
    }
    fetch(url)
      .then(response => response.json())
      .then((data) => setQuoteData(data['0']))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }

  //We load a random quote on page load
  useEffect(() => {
    handleFetch()
  }, [])

  return (
    <>
      {
        loading ?
        <p>Loading...</p> :
        <>
          <div>
            <img src={quoteData!.image} />
            <p>{quoteData!.quote}</p>
            <span>{quoteData!.character}</span>
          </div>
          <input placeholder='Filter by character name' onChange={(e) => {
            setFilterString(e.target.value)
          }} />
          <button onClick={handleFetch}>New quote</button>
        </>
      }
    </>
  )
}

export default Home
