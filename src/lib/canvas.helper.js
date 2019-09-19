import { lerp } from 'canvas-sketch-util/math'

const defaults = {
  count: 25, margin: 5
}

export const makeGrid = (dimensions, options = defaults) => {
  const { count, margin } = options
  const points = []

  for (let x = 0; x < count; x++) {
    for (let y = 0; y < count; y++) {
      const u = count <= 1 ? 0.5 : x / (count - 1)
      const v = count <= 1 ? 0.5 : y / (count - 1)

      points.push({
        position: [
          lerp(margin, dimensions[0] - margin, u),
          lerp(margin, dimensions[1] - margin, v)
        ]
      })
    }
  }

  return points
}
