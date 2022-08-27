import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

// fetch bicycle data by id
const fetchBicycle = ({ queryKey }) => {
    const id = queryKey[1]
    return axios.get(`http://localhost:5000/bicycles/${id}`)
}

export const useBicycleData = id => {
    const queryClient = useQueryClient()
    return useQuery(["bicyles", id], fetchBicycle, {
        initialData: () => {
            const hero = queryClient
                .getQueryData(["bicycles"])
                ?.data?.find(hero => hero.id === parseInt(id))
            if (hero) {
                return { data: hero }
            } else {
                return undefined
            }
        }
    })
}