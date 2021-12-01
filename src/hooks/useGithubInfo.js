import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useGitHubInfo() {
  const [ghInfo, setGhInfo] = useState({ stars: null, forks: null })
  const [err, setErr] = useState({})

  useEffect(() => {
    const getInfo = async () => {
      try {
        const res = await axios.get('https://api.github.com/repos/toddmath/Portfolio-Website')
        const { stargazers_count, forks_count } = res.data
        setGhInfo({ stars: stargazers_count, forks: forks_count })
      } catch (error) {
        console.log('Error fetching github repo metadata', error.message)
        setErr({ error })
      }
    }

    if (!ghInfo.stars || !ghInfo.forks) {
      getInfo()
    }
  }, [ghInfo.stars, ghInfo.forks])

  return { ...ghInfo, err }
}
