import styled from "styled-components"
interface QuoteProps {
  image?: string, quote?: string, character?: string
}

const Container = styled.div`
  width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function QuoteComponent(props: QuoteProps){
  return(
    <Container>
      <img src={props.image} width='300px' height='500px' />
      <p>{"{props.quote}"}</p>
      <span> - <i>{props.character}</i></span>
    </Container>
  )
}