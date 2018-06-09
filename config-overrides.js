import { injectBabelPlugin } from 'react-app-rewired'
import rewireMobX from 'react-app-rewire-mobx'

export default (config, env) => {
  config = injectBabelPlugin('babel-plugin-styled-components', config)
  config = rewireMobX(config, env)

  return config
}
