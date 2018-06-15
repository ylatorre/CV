import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import AsidePres from '../components/AsidePres'
import Button from '../components/Button'

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)

storiesOf('AsidePres', module)
  .add('Main Aside', () => <AsidePres />)
