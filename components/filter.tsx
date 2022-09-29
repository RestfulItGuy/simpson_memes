type FilterProps = {setFilterString: (value : string) => void, filterFunction: () => void}

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 50px;
`

export default function Filter(props: FilterProps){
  return(
    <Container>
      <input placeholder='Filter by character name' onChange={(e) => { props.setFilterString(e.target.value) }} />
      <button onClick={props.filterFunction}>New quote</button>
    </Container>
  )
}