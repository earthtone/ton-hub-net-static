const requireComponent = require.context('.', false, /\.vue$/)

export default requireComponent.keys().reduce((components, filename) => {
  const key = filename.replace(/\.\//, '').replace(/\.vue$/, '')
  components[key] = requireComponent(filename).default
  return components
}, {})
