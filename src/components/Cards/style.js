import styled from 'styled-components'

export const ContainerCard = styled.div`
  width: 100%;
  height: 23.4rem;
  background-color: #3b657a;
  border-radius: 4px;
  padding: 2.5rem;
  
  .image-container {
    width: 100%;
    height: 24.3rem;
    overflow: hidden;
    border-radius: 4px;
    img {
      margin: 0 auto;
      width: 100%;
      height: 60%;
      object-fit: cover;
    }
   
    h3, p {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: .5rem;
      font-size: 1rem;
    }

  }  


`