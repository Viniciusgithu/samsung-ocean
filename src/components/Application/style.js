import styled from 'styled-components'

export const ContainerApp = styled.div`
 width: 100%;
 max-width: 124.6rem;
 margin: 0 auto;
 padding: 4rem 1.5rem;
`

export const HeaderApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.6rem;
  margin-bottom: 1.6rem;
  border-bottom: 2px solid #3b657a;
  h1 {
    font-size: 3.2rem;
  }

`

export const ContentChar = styled.div`
  & > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.6rem;
  }

  button {
    display: block;
    line-height: 6.5rem;
    background-color: #3b657a;
    border: none;
    border-radius: 6px;
    width: 30rem;
    margin: 0 auto;
    cursor: pointer;
    font-size: 1.8rem;
    margin-top: 4.8rem;
    color: #e9f0c9;
    transition: filter 2s;
    &:hover {
      filter: brightness(.8);
    }
  }

`