import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"

const PokedexIdPage = () => {

  const { id } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const [pokemon, getPokemon] = useFetch(url)

  useEffect(() => {
    getPokemon()
  }, [id])

  const pokemonType = pokemon?.types[0].type.name;

  const width0 = {
    width: (pokemon?.stats[0].base_stat)/150 * 250
  };

  const width1 = {
    width: (pokemon?.stats[1].base_stat)/150 * 250
  };

  const width2 = {
    width: (pokemon?.stats[2].base_stat)/150 * 250
  };

  const width3 = {
    width: (pokemon?.stats[3].base_stat)/150 * 250
  };

  const width4 = {
    width: (pokemon?.stats[4].base_stat)/150 * 250
  };

  const width5 = {
    width: (pokemon?.stats[5].base_stat)/150 * 250
  };

  console.log(pokemon);
  // {`PokedexIdPage__abilities_li ${pokemonType}`}
  return (
    <div className="PokedexIdPage__container">
      <div className="PokedexPage__header">
        <div className="header__color_1"></div>
        <div className="header__color_2"></div>
        <img className="header__img_1" src="../img/pokedex_title.svg" alt="Pokeball" />
        <img className="header__img_2" src="../img/pokeball.svg" alt="Pokeball" />
      </div>
      <div className="PokedexIdPage__info">
        <div className={`PokedexIdPage__info_background ${pokemonType}`}>
          <img className="PokedexIdPage__info_img" src={pokemon?.sprites.other['official-artwork'].front_default} alt="Pokémon image" />
        </div>
        <p className={`PokedexIdPage__info_number ${pokemonType}`}>N° {pokemon?.id}</p>
        <div className={`PokedexIdPage__info_name ${pokemonType}`}>
          <hr className="PokedexIdPage__info_hr_1" />
          <h2 className="PokedexIdPage__info_h2">{pokemon?.name.charAt(0).toUpperCase() + pokemon?.name.slice(1)}</h2>
        </div>
        <div className="PokedexIdPage__info_measures">
          <p className="measures__weight"><span className="measures__span_1">Weight</span><span className="measures__span_2">{pokemon?.weight}</span></p>
          <p className="measures__height"><span className="measures__span_1">Height</span><span className="measures__span_2">{pokemon?.height}</span></p>
        </div>
        <div className="PokedexIdPage__info_types_and_abilities">
          <div className="PokedexIdPage__info_types">
            <h3 className="PokedexIdPage__info_types_h3">Type</h3>
            <ul className="PokedexIdPage__info_types_ul">
                {
                  pokemon?.types.map(typeInfo => (
                    <li className={`PokedexIdPage__info_types_li ${typeInfo.type.name}`} key={typeInfo.type.url}>{typeInfo.type.name.charAt(0).toUpperCase() + typeInfo.type.name.slice(1)}</li>
                  ))
                }
              </ul>
          </div>
          <div className="PokedexIdPage__info_abilities">
            <h3 className="PokedexIdPage__info_abilities_h3">Abilities</h3>
            <ul className="PokedexIdPage__info_abilities_ul">
                {
                  pokemon?.abilities.map(abilityInfo => (
                    <li className="PokedexIdPage__info_abilities_li" key={abilityInfo.ability.url}>{abilityInfo.ability.name.charAt(0).toUpperCase() + abilityInfo.ability.name.slice(1)}</li>
                  ))
                }
              </ul>
          </div>
        </div>
        <div className="PokedexIdPage__info_stats">
          <div className="PokedexIdPage__info_stats_div_1">
            <h2 className="PokedexIdPage__info_stats_h2">Stats</h2>
            <hr className="PokedexIdPage__info_stats_hr" />
            <img className="PokedexIdPage__info_stats_img" src="./img/pokeball_light.svg" alt="" />
          </div>
          <div className="PokedexIdPage__info_stats_div_2">
            <ul className="PokedexIdPage__info_stats_ul">
              <li className="PokedexIdPage__info_stats_li">
                <div className="PokedexIdPage__info_stats_li_div_1">
                  <p className="PokedexIdPage__info_stats_li_p_1">{pokemon?.stats[0].stat.name.toUpperCase()}</p>
                  <p className="PokedexIdPage__info_stats_li_p_2">{pokemon?.stats[0].base_stat}/150</p>
                </div>
                <div className="PokedexIdPage__info_stats_li_div_2">
                  <div className="PokedexIdPage__info_stats_li_div_2_div_1"></div>
                  <div className="PokedexIdPage__info_stats_li_div_2_div_2" style={width0}></div>
                </div>
              </li>

              <li className="PokedexIdPage__info_stats_li">
                <div className="PokedexIdPage__info_stats_li_div_1">
                  <p className="PokedexIdPage__info_stats_li_p_1">{pokemon?.stats[1].stat.name.charAt(0).toUpperCase() + pokemon?.stats[1].stat.name.slice(1)}</p>
                  <p className="PokedexIdPage__info_stats_li_p_2">{pokemon?.stats[1].base_stat}/150</p>
                </div>
                <div className="PokedexIdPage__info_stats_li_div_2">
                  <div className="PokedexIdPage__info_stats_li_div_2_div_1"></div>
                  <div className="PokedexIdPage__info_stats_li_div_2_div_2" style={width1}></div>
                </div>
              </li>

              <li className="PokedexIdPage__info_stats_li">
                <div className="PokedexIdPage__info_stats_li_div_1">
                  <p className="PokedexIdPage__info_stats_li_p_1">{pokemon?.stats[2].stat.name.charAt(0).toUpperCase() + pokemon?.stats[2].stat.name.slice(1)}</p>
                  <p className="PokedexIdPage__info_stats_li_p_2">{pokemon?.stats[2].base_stat}/150</p>
                </div>
                <div className="PokedexIdPage__info_stats_li_div_2">
                  <div className="PokedexIdPage__info_stats_li_div_2_div_1"></div>
                  <div className="PokedexIdPage__info_stats_li_div_2_div_2" style={width2}></div>
                </div>
              </li>

              <li className="PokedexIdPage__info_stats_li">
                <div className="PokedexIdPage__info_stats_li_div_1">
                  <p className="PokedexIdPage__info_stats_li_p_1">{pokemon?.stats[3].stat.name.charAt(0).toUpperCase() + pokemon?.stats[3].stat.name.slice(1)}</p>
                  <p className="PokedexIdPage__info_stats_li_p_2">{pokemon?.stats[3].base_stat}/150</p>
                </div>
                <div className="PokedexIdPage__info_stats_li_div_2">
                  <div className="PokedexIdPage__info_stats_li_div_2_div_1"></div>
                  <div className="PokedexIdPage__info_stats_li_div_2_div_2" style={width3}></div>
                </div>
              </li>

              <li className="PokedexIdPage__info_stats_li">
                <div className="PokedexIdPage__info_stats_li_div_1">
                  <p className="PokedexIdPage__info_stats_li_p_1">{pokemon?.stats[4].stat.name.charAt(0).toUpperCase() + pokemon?.stats[4].stat.name.slice(1)}</p>
                  <p className="PokedexIdPage__info_stats_li_p_2">{pokemon?.stats[4].base_stat}/150</p>
                </div>
                <div className="PokedexIdPage__info_stats_li_div_2">
                  <div className="PokedexIdPage__info_stats_li_div_2_div_1"></div>
                  <div className="PokedexIdPage__info_stats_li_div_2_div_2" style={width4}></div>
                </div>
              </li>

              <li className="PokedexIdPage__info_stats_li">
                <div className="PokedexIdPage__info_stats_li_div_1">
                  <p className="PokedexIdPage__info_stats_li_p_1">{pokemon?.stats[5].stat.name.charAt(0).toUpperCase() + pokemon?.stats[5].stat.name.slice(1)}</p>
                  <p className="PokedexIdPage__info_stats_li_p_2">{pokemon?.stats[5].base_stat}/150</p>
                </div>
                <div className="PokedexIdPage__info_stats_li_div_2">
                  <div className="PokedexIdPage__info_stats_li_div_2_div_1"></div>
                  <div className="PokedexIdPage__info_stats_li_div_2_div_2" style={width5}></div>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </div>
      <div className="PokedexIdPage__movements">
        <div className="PokedexIdPage__movements_div">
          <h2 className="PokedexIdPage__movements_h2">Movements</h2>
          <hr className="PokedexIdPage__movements_hr" />
          <img className="PokedexIdPage__movements_img" src="./img/pokeball_light.svg" alt="Pokeball" />
        </div>
        <ul className="PokedexIdPage__movements_ul">
          {
            pokemon?.moves.map(movementInfo => (
              <li className={`PokedexIdPage__abilities_li ${pokemonType}`} key={movementInfo.move.url}>{movementInfo.move.name.charAt(0).toUpperCase() + movementInfo.move.name.slice(1)}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default PokedexIdPage