import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"

const SelectType = ({ setTypeSelected }) => {

  const url = 'https://pokeapi.co/api/v2/type'
   const [ types, getTypes ] = useFetch(url)

   useEffect(() => {
     getTypes()
   }, [])
   
   const handleChange = e => {
    setTypeSelected(e.target.value)
   }

  return (
    <div className="SelectType__container">
      <select className="SelectType__select" onChange={handleChange}>
        <option className="SelectType__option" value='allPokemons'>All pokemons</option>
        {
          types?.results.map(typeInfo => (
            <option key={typeInfo.url} value={typeInfo.url}>{typeInfo.name.charAt(0).toUpperCase() + typeInfo.name.slice(1)}</option>
          ))
        }
      </select>
    </div>
  )
}

export default SelectType