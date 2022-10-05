import { Container, Content } from './styles'
import axios from "axios"
import { useEffect, useState } from 'react'

export function HomeBox() {

  const [ufs, setUfs] = useState([])
  const [cities, setCities] = useState([])
  const [municipios, setMunicipios] = useState("0")
  const [selectedCities, setSelectedCities] = useState("0")



  useEffect(() => {
    axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/")
      .then((response) => {
        setUfs(response.data)
      })


  }, [])

  useEffect(() => {

    if (municipios === "0") {
      return;
    }

    axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${municipios}/municipios`
    )
      .then((response) => {
        setCities(response.data)
      })
  }, [municipios])



  function handleMunicipios(event) {
    const uf = event.target.value;
    setMunicipios(uf)
  }

  console.log(selectedCities)

  function handleSelectCity(event) {
    const city = event.target.value;
    setSelectedCities(city)
  }



  return (
    <Container >
      <Content>
        <h1>Selecione um estado ou/e cidade</h1>
        <div>
          <select name='uf' id='uf' onChange={handleMunicipios}>
            <option value="0" >Selecione a UF</option>
            {ufs.map((uf) => (
              <option value={uf.sigla} >{uf.nome}</option>
            ))}
          </select>

          <select name='city' id='city' value={selectedCities} onChange={handleSelectCity}>
            <option value="0" >Selecione a cidade</option>
            {cities.map((city) => (
              <option value={city.id} >{city.nome}</option>
            ))}
          </select>
        </div>

        <button>Ir Para</button>
      </Content>
    </Container >
  );
}