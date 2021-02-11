# Ensak Connect

## Project setup
```shell
yarn install
```

### Compiles and hot-reloads for development
```shell
yarn serve
```
### Run Components in Storybook
```shell
yarn storybook
```

### Run your unit tests
```shell
yarn test:unit
```

### Compiles and minifies for production
```shell
yarn build
```

### Lints and fixes files
```shell
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Storybook Setup

### Add Figma Designs to stories
```javascript
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'My stories',
  component: Button,
  decorators: [withDesign],
}

export const myStory = () => <Button>Hello, World!</Button>

myStory.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
  },
}
```
[See More](https://storybook.js.org/addons/storybook-addon-designs)
