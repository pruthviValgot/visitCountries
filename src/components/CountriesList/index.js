import './index.css'

const CountriesList = props => {
  const {details, addVisitedCountry} = props
  const {id, name, isVisited} = details

  const btnText = isVisited ? 'Visited' : 'Visit'

  const addCountry = () => {
    addVisitedCountry(id)
  }

  return (
    <li className="country-list-item">
      <p className="country-name">{name}</p>
      {isVisited === true ? (
        <p className="para">{btnText}</p>
      ) : (
        <button className="button" type="button" onClick={addCountry}>
          {btnText}
        </button>
      )}
    </li>
  )
}

export default CountriesList
