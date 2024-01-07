
const Props = ({name,age,component}) => {
  return (
    <div className="border text-center p-10 rounded-lg">
        I am a prop Component {component}
        <p>{name}</p>
        <p>{age}</p>

    </div>
  )
}

export default Props