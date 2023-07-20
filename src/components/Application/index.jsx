import React from 'react'
import { ContainerApp, ContentChar, HeaderApp } from './style'
import { CardComponent } from '../Cards'


export function Application() {
  const [char, setChar] = React.useState([])
  const [page, setPage] = React.useState(1)
  const [countPages, setCountPages] = React.useState('')

  async function carregarDadosApi() {
    const apiUrl = `https://rickandmortyapi.com/api/character?page=${page}`
    const response = await fetch(apiUrl)
    const body = await response.json()
    setChar(body.results)
    setCountPages(body.info.pages)
  }

  React.useEffect(() => {
    carregarDadosApi()
  }, [page])


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
        {
          (!(page === countPages)) && <button onClick={() => setPage(page + 1)}>Carregar mais</button>
        }

      </ContentChar>
    </ContainerApp>
  )
}

