import { useEffect, useState } from 'react'

export default function useGitHubInfo() {
  // eslint-disable-next-line no-unused-vars
  const [gitHubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
    error: '',
  })

  useEffect(() => {
    const abortController = new AbortController()
    const { signal } = abortController

    const apiCall = async path => {
      try {
        const request = await fetch(path, { signal, method: 'GET' })
        const response = await request.json()
        const { stargazers_count, forks_count } = response
        setGitHubInfo({ stars: stargazers_count, forks: forks_count })
      } catch (error) {
        if (!signal?.aborted) {
          console.error(error)
        }
        setGitHubInfo({ error: error.message })
      }
    }

    apiCall('https://api.github.com/repos/toddmath/Portfolio-Website')

    return () => {
      abortController.abort()
    }
  }, [setGitHubInfo])

  return gitHubInfo
}
