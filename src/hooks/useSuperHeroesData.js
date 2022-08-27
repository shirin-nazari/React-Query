import { useQuery } from "react-query"
import axios from 'axios'

const fetchSuperHeroes = () => axios.get('http://localhost:4000/superheroes')

export const useSuperHeroesData = (onSuccess, onError) => {
    return useQuery('super-heroes', fetchSuperHeroes, {
        // The duration until inactive queries will be removed from the cache
        // cacheTime: 5000,
        // it saved in cache and don`t reload and don`t see again in network tab
        // StaleTime is the duration of the transition from fresh to stale state.
        // staleTime: 0
        // data is fetched in every mount the best option
        // refetchOnMount: true,
        //the query data is not refetch
        // refetchOnMount: false
        //the query will always refetch the data 
        // refetchOnMount: 'always'
        // if your data is automatically updating when you focus on window
        // refetchOnWindowFocus: 'always'
        // refetchInterval: 2000,
        // to pull data even when the browser is not in focus . where data changes every now
        // refetchIntervalInBackground: true
        // you don`t see data
        // enabled: false
        onSuccess,
        onError,
        // select: (data) => {
        //     const superHeroesNames = data.data.map(hero => hero.name)
        //     return superHeroesNames
        // }
    })
}