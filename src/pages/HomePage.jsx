import { useRef } from "react"
import { setTrainerSlice } from "../store/slices/trainer.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"


const HomePage = () => {

  const inputTrainer = useRef()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleTrainer = e => {
    e.preventDefault()
    dispatch(setTrainerSlice(inputTrainer.current.value.trim()))
    navigate('/pokedex')
  }

  return (
    <div className="HomePage__container">
      <img className="container__img" src="../img/pokedex_title.svg" alt="Pokédex" />
      <h2 className="container__h2">Hi Trainer!</h2>
      <p className="container__p">To get started, please enter your trainer nickname</p>
      <form className="container__form" onSubmit={handleTrainer}>
        <input className="container__input" ref={inputTrainer} type="text" />
        <button className="container__button">Start!</button>
      </form>
      <div className="container__footer">
        <div className="footer__color_1"></div>
        <div className="footer__color_2"></div>
        <img className="footer__img" src="../img/pokeball.svg" alt="Pokeball" />
      </div>
    </div>
  )
}

export default HomePage