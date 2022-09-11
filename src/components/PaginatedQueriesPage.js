import { useQuery } from "react-query"
import axios from 'axios'
import { useState } from "react"

const fetchColors = (pageNumber) => axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`)
const PaginatedQueriesPage = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const { isLoading, isError, isFetching, error, data } = useQuery(['colors', pageNumber], () => fetchColors(pageNumber), {
        keepPreviousData: true
    });
    if (isLoading) {
        return <h2>is Loading... </h2>
    }
    if (error) {
        return <h2>{error.massage}</h2>
    }

    return (
        <>
            <div>
                {data?.data.map(color => {
                    return (
                        <div key={color.id}>
                            <h2>
                                {color.id} -{color.label}
                            </h2>
                        </div>
                    )
                })}
            </div>
            <div>
                <button onClick={page => setPageNumber(page => page - 1)} disabled={pageNumber === 1}>Prev Page</button>
                <button onClick={page => setPageNumber(page => page + 1)} disabled={pageNumber === 4}>NextPage Page</button>
            </div>
            {isFetching && 'loading...'}
        </>
    )
}

export default PaginatedQueriesPage