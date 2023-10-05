import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"

const PokeCard = ({ url }) => {

  const [ pokemon, getPokemon ] = useFetch(url)

  const navigate = useNavigate()

  useEffect(() => {
    getPokemon()
  }, [])

  const handleNavigate = () => {
    navigate(`/pokedex/${pokemon.id}`)
  }

  const pokemonName = pokemon?.name.charAt(0).toUpperCase() + pokemon?.name.slice(1);

  const pokemonType = pokemon?.types[0].type.name;
  // {`PokeCard__header_background ${pokemonType}`}
  //  console.log(pokemonName);

  return (
    <article className={`PokeCard__container ${pokemonType}`} onClick={handleNavigate}>
      <header className="PokeCard__header">
        <div className={`PokeCard__header_background ${pokemonType}`}></div>
        <img className="PokeCard__header_img" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </header>
      <section className="PokeCard__section">
        <div className="PokeCard__section_div_1">
          <h3  className={`PokeCard__section_h3 ${pokemonType}`}>{pokemonName}</h3>
          <ul className="PokeCard__section_ul_1">
            {
              pokemon?.types.map(typeInfo => (
                <li className="PokeCard__section_li_1" key={typeInfo.type.url}>{typeInfo.type.name.charAt(0).toUpperCase() + typeInfo.type.name.slice(1)}</li>
              ))
            }
          </ul>
          <p className="PokeCard__section_p">Type</p>
        </div>
        <hr className="PokeCard__section_hr" />
        <ul className="PokeCard__section_ul_2">
          {
            pokemon?.stats.map(statInfo => (
              <li className="PokeCard__section_li_2" key={statInfo.stat.url}>
                <span className="PokeCard__span_1">{statInfo.stat.name}</span>
                <span className={`PokeCard__span_2 ${pokemonType}`}>{statInfo.base_stat}</span>
              </li>
            ))
          }
        </ul>
      </section>
    </article>
  )
}

export default PokeCard