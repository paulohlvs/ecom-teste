import { Input } from '../Input'
import { Container, Perfil, Section } from './styles'
import { BiSearchAlt2 } from 'react-icons/bi'
// import { Link } from 'react-router-dom'

export function Header() {
  return (
    <Container>
      <h1>Cidades Brasileiras</h1>
      <Input placeholder="Pesquisar pelo estado e/ou cidade" icon={BiSearchAlt2} />

      <Section>
        <div>
          <p>Murilo Muller</p>
          <a to="/register">Sair</a>
        </div>

        <a href="https://www.instagram.com/dj.muller_/">
          <Perfil src='https://www.github.com/mullerhub.png'></Perfil>
        </a>

      </Section>
    </Container>
  )
}