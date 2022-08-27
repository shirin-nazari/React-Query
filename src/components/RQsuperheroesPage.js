import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { useSuperHeroesData } from '../hooks/useSuperHeroesData'
const fetchSuperHeroes = () => axios.get('http://localhost:4000/superheroes')
function RQsuperheroesPage() {

    const onSuccess = (data) => {
        console.log('Perform side effect after data fetching ', data);
    }
    const onError = (error) => {
        console.log('Perform side effect after encountering error ', error);
    }
    const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData(onSuccess, onError)
    console.log({ isLoading, isFetching });
    if (isLoading || isFetching) {
        return <h2>Loading...</h2>
    }
    if (isError) {
        return <h2>{error}</h2>
    }
    return (
        <>
            <h2>RQsuperheroesPage</h2>
            <button onClick={refetch}>fetch Hero</button>
            {/* {data?.data.map(hero => <div key={hero.name}>{hero.name}</div>)} */}
            {data.map(heroName => <div key={heroName}>{heroName}</div>)}
        </>
    )
}

export default RQsuperheroesPage