import type { NextPage } from 'next'
import { useEffect, useState } from 'react'


import Filter from '../components/filter'
import QuoteComponent from '../components/quote'

interface QuoteArray {
  image: string, quote: string, character: string
}

const Home: NextPage = () => {
  const [quoteData, setQuoteData] = useState<QuoteArray>()
  const [loading, setLoading] = useState(true)
  const [filterString, setFilterString] = useState('')

  const handleFetch = () => {
    let url;

    setLoading(true)

    filterString.length > 1 ? 
      url = 'https://thesimpsonsquoteapi.glitch.me/quotes?character='+filterString : 
      url = 'https://thesimpsonsquoteapi.glitch.me/quotes'

    fetch(url)
      .then(response => response.json())
      .then((data) => setQuoteData(data['0']))
      .finally(() => {
        setFilterString('')
        setLoading(false)
      })
      .catch((error) => console.error(error))
  }

  //We load a random quote on page load
  useEffect(() => {
    handleFetch()
  }, [])

  return (
    <>
      {
        loading ?
        <span>Loading...</span> :
        <>
          <QuoteComponent 
            image={quoteData?.image} 
            quote={quoteData?.quote} 
            character={quoteData?.character} 
          />
        </> 
      }
      <Filter filterFunction={handleFetch} setFilterString={setFilterString} />
    </>
  )
}

export default Home
