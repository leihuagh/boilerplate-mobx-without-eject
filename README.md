# MobX Without Ejecting

You can view the full video explanation here: https://youtu.be/v3sJUzFXhz4

Packages we'll be installing:

- react-app-rewired
- react-app-rewire-mobx
- babel-plugin-styled-components

In `config-overrides.js`:

```javascript
import { injectBabelPlugin } from 'react-app-rewired'
import rewireMobX from 'react-app-rewire-mobx'

export default (config, env) => {
  config = injectBabelPlugin('babel-plugin-styled-components', config)
  config = rewireMobX(config, env)

  return config
}
```

In `package.json` modify the scripts to be:

```json
{
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test --env=jsdom",
    "eject": "react-app-rewired eject"
  }
}
```
