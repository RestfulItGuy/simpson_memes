import styled from "styled-components"

const CentreContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function Layout({children}){
  return(
    <>
      <CentreContainer>{children}</CentreContainer>
    </>
  )
}