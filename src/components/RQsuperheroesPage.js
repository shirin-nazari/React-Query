import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

function RQsuperheroesPage() {
    const resualts = useQuery('super-heroes', () => {
        return axios.get('http://localhost:4000/superheroes')
    })
    return (
        <div>RQsuperheroesPage</div>
    )
}

export default RQsuperheroesPage