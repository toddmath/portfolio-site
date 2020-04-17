import { useContext } from 'react'

import { DebugContext } from '@context'

const useDebug = () => useContext(DebugContext)

export default useDebug
