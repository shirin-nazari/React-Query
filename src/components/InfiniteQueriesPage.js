import { useQuery } from "react-query"
import axios from 'axios'
import { useState } from "react"

const fetchColors = () => axios.get(`http://localhost:4000/colors`)

const InfiniteQueriesPage = () => {

    const { isLoading, isError, isFetching, error, data } = useQuery(['colors'], fetchColors);
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
        </>
    )

}

export default InfiniteQueriesPage