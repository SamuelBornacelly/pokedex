import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch";
import { useEffect, useRef, useState } from "react";
import PokeCard from "../components/PokedexPage/PokeCard";
import SelectType from "../components/PokedexPage/SelectType";

const PokedexPage = () => {

  const [inputValue, setInputValue] = useState('')
  const [typeSelected, setTypeSelected] = useState('allPokemons')

  const trainer = useSelector(store => store.trainer)

  const inputSearch = useRef()


  const url = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`
  const [ pokemons, getPokemons, getTypePokemon  ] = useFetch(url)

  useEffect(() => {
    if (typeSelected === 'allPokemons') {
      getPokemons()
    } else {
      getTypePokemon(typeSelected)
    }
  }, [typeSelected])

  const handleSearch = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }

  const pokeFiltered = pokemons?.results.filter(poke => poke.name.includes(inputValue))

  return (
    <div className="PokedexPage__container">
      <div className="PokedexPage__header">
        <div className="header__color_1"></div>
        <div className="header__color_2"></div>
        <img className="header__img_1" src="../img/pokedex_title.svg" alt="Pokeball" />
        <img className="header__img_2" src="../img/pokeball.svg" alt="Pokeball" />
      </div>
      <p className="PokedexPage__p">Hi <span className="PokedexPage__span">{trainer}</span>, here you can find your favorite pokémons.</p>
      <div className="PokedexPage__div_1">
        <form className="PokedexPage__form" onSubmit={handleSearch}>
          <input className="PokedexPage__form_input" ref={inputSearch} type="text" />
          <button className="PokedexPage__form_button">Search</button>
        </form>
        <SelectType className="PokedexPage__SelectType"
        setTypeSelected={setTypeSelected}
        />
      </div>
      <div className="PokedexPage__div_2">
        {
          pokeFiltered?.map(poke => (
            <PokeCard className="PokedexPage__PokeCard"
              key={poke.url}
              url={poke.url}
            />
          ))
        }
      </div>
    </div>
  )
}

export default PokedexPage