import './index.css'
const BannerCardItem = props => {
  const {eachCard} = props
  const {headerText, description, className} = eachCard
  return (
    <>
      <li className={className}>
        <h1 className="heading">{headerText}</h1>
        <p className="para">{description}</p>
        <button type="submit" className="btn">
          Show More
        </button>
      </li>
    </>
  )
}
export default BannerCardItem
