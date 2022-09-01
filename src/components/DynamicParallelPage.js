import axios from "axios"
import { useQueries } from "react-query"

const fetchSuperHeroes = (heroId) => axios.get(`http://localhost:4000/superheroes/${heroId}`)
const DynamicParallelPage = ({ heroId }) => {
    const queryResults = useQueries(
        heroId.map(id => {
            return {
                queryKey: ['super-hero', id],
                queryFn: () => fetchSuperHeroes(id)
            }
        })
    )
    console.log({ queryResults });
    return (
        <div>Dyanamic</div>
    )
}
export default DynamicParallelPage