import { useEffect, useState } from 'react'

export default function useGitHubInfo() {
  // eslint-disable-next-line no-unused-vars
  // const [gitHubInfo, setGitHubInfo] = useState({
  //   stars: null,
  //   forks: null,
  //   error: '',
  // })
  const [stars, setStars] = useState(0)
  const [forks, setForks] = useState(0)
  const [error, setError] = useState('')

  useEffect(() => {
    const abortController = new AbortController()
    const { signal } = abortController

    const apiCall = async path => {
      try {
        const request = await fetch(path, { signal, method: 'GET' })
        const response = await request.json()
        const { stargazers_count, forks_count } = response
        // setGitHubInfo({ stars: stargazers_count, forks: forks_count })
        setStars(stargazers_count)
        setForks(forks_count)
      } catch (error) {
        if (!signal?.aborted) {
          console.error(error)
        }
        // setGitHubInfo({ error: error.message })
        setError(error.message)
      }
    }

    apiCall('https://api.github.com/repos/toddmath/Portfolio-Website')

    return () => {
      abortController.abort()
    }
  }, [setStars, setForks, setError])

  // return gitHubInfo
  return { stars, forks, error }
}
