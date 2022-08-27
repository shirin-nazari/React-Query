import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
const fetchSuperHeroes = () => axios.get('http://localhost:4000/superheroes')
function RQsuperheroesPage() {
    const { isLoading, data, isError, error, isFetching } = useQuery('super-heroes', fetchSuperHeroes, { cacheTime: 5000, })
    // console.log({ isLoading, isFetching });
    if (isLoading) {
        return <h2>Loading...</h2>
    }
    if (isError) {
        return <h2>{error}</h2>
    }
    return (
        <>
            <h2>RQsuperheroesPage</h2>
            {data?.data.map(hero => <div key={hero.name}>{hero.name}</div>)}
        </>
    )
}

export default RQsuperheroesPage