import useIntersectingMouseMove from './useIntersectingMouseMove'
import createMemo from './createMemo'

const toFixed = num => (num / 14).toFixed(2)

const handleFixed = (x, y) => [toFixed(x), toFixed(y)]

// const useAnimatedText = ref => {
//   const [x, y] = useMouseMove()
//   const intersection = useObserver(ref)
//   const { isIntersecting } = intersection || true

//   const [fixedX, fixedY] = [toInt(x), toInt(y)]
//   const createFixed = createMemo(toFixed)
//   const mouseX = createFixed(fixedX)
//   const mouseY = createFixed(fixedY)

//   const ifIsIntersecting = d => (isIntersecting ? d : '0')

//   return [ifIsIntersecting(mouseX), ifIsIntersecting(mouseY)]
// }

const useAnimatedText = ref => {
  const [x, y] = useIntersectingMouseMove(ref)
  const handleMemoFixed = createMemo(handleFixed)
  const [mouseX, mouseY] = handleMemoFixed(+x, +y)
  return [mouseX, mouseY]
}

export default useAnimatedText
