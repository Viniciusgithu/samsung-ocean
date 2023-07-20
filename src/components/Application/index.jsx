import React from 'react'
import { ContainerApp, ContentChar, HeaderApp } from './style'
import { CardComponent } from '../Cards'


export function Application() {
  const [char, setChar] = React.useState([])

  React.useEffect(() => {
    async function Api() {
      const apiUrl = `https://rickandmortyapi.com/api/character`
      const response = await fetch(apiUrl)
      const body = await response.json()
      setChar(body.results)
    }
    Api()
  }, [])


  return (
    <ContainerApp>
      <HeaderApp>
        <h1>Rick and Morty</h1>
      </HeaderApp>
      <ContentChar>
        <div>
          {
            char && char.map(({ image, name, species, gender }, index) => {
              return (
                <CardComponent
                  key={index}
                  image={image}
                  name={name}
                  species={species}
                  genre={gender}
                />
              )
            })
          }
        </div>
        <button>Carregar mais</button>
      </ContentChar>
    </ContainerApp>
  )
}

