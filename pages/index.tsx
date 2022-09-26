import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

interface QuoteProps {
  image: string | undefined, quote: string | undefined, character: string | undefined
}

interface QuoteArray {
  image: string, quote: string, character: string
}

function QuoteComponent(props: QuoteProps){
  return(
    <div>
      <img src={props.image} />
      <p>{props.quote}</p>
      <span>{props.character}</span>
    </div>
  )
}

const Home: NextPage = () => {
  const [quoteData, setQuoteData] = useState<QuoteArray>()
  const [loading, setLoading] = useState(true)
  const [filterString, setFilterString] = useState('')

  const handleFetch = () => {
    let url;

    // setLoading(true)

    filterString.length > 1 ? 
      url = 'https://thesimpsonsquoteapi.glitch.me/quotes?character='+filterString : 
      url = 'https://thesimpsonsquoteapi.glitch.me/quotes'

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
          <QuoteComponent 
            image={quoteData?.image} 
            quote={quoteData?.quote} 
            character={quoteData?.character} 
          />
          <input placeholder='Filter by character name' onChange={(e) => { setFilterString(e.target.value) }} />
          <button onClick={handleFetch}>New quote</button>
        </>
      }
    </>
  )
}

export default Home
