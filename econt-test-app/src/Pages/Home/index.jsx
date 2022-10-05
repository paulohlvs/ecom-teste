import React, { useEffect, useState} from 'react';
import TableCuston from '../../components/TableCuston'




export function Home() {

  const [listEstados, setListEstados] = useState([]);

  useEffect(() => {

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados',).then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw res;
    }).then(data => {
    
      setListEstados(data)
    }).catch(error => {
      console.log("Erro:", error)
    })


  }, [])


  return (
    <>
      <TableCuston listaDeEstados={listEstados}/>
    </>
  );
}