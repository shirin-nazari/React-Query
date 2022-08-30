import axios from "axios"

const fetchSuperHeroes = (heroId) => axios.get(`http://localhost:4000/superheroes/${heroId}`)
const DynamicParallelPage = ({ heroId }) => {
    return (
        <div>Dyanamic</div>
    )
}
export default DynamicParallelPage