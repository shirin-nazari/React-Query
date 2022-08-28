import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
const fetchSuperHeroes = () => axios.get('http://localhost:4000/superheroes')
const fetchFriends = () => axios.get('http://localhost:4000/friends')
function ParallelQueryes() {
    const { data: superHeroes } = useQuery('super-heroes', fetchSuperHeroes)
    const { data: friends } = useQuery('friends', fetchFriends)
    return (
        <div>ParallelQueryes</div>
    )
}

export default ParallelQueryes