import { Container, Content } from './styles'

export function HomeBox() {
  return (
    <Container >
      <h1>Seletor de ufs e cidades</h1>
      <Content>
        <select name='uf' id='uf'>
          <option value="0" >Selecione a UF</option>
        </select>

        <select name='city' id='city'>
          <option value="0" >Selecione a cidade</option>
        </select>

      </Content>
    </Container>
  )
}

