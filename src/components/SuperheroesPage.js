import axios from 'axios'
import React, { useEffect, useState } from 'react'

function SuperheroesPage() {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        axios.get('http://localhost:4000/superheroes1').then((res) => {
            setData(res.data);
            setIsLoading(false)
        }).catch(err => {
            setError(err.message);
            setIsLoading(false)
        })
    }, []);
    if (isLoading) {
        return <h2>is Loading... </h2>
    }
    if (error) {
        return <h2>{error}</h2>
    }
    return (
        <div>
            <h2>
                SuperheroesPage
            </h2>
            {data.map(hero => {
                return <div key={hero.name}>{hero.name}</div>
            })}
        </div>
    )
}

export default SuperheroesPage