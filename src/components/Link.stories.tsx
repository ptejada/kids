import React from 'react'
import Link, {LinkProps} from './Link'
import {Meta, Story} from '@storybook/react'

export default {
  title: 'Layout/Link',
  component: Link,
  argTypes: {
    children: {
      name: 'label'
    },
    target: {
      control: 'select',
      options: ['_blank', '_self'],
    },
    color: {
      defaultValue: 'primary',
      control: 'select',
      options: ['primary', 'secondary', 'textPrimary', 'textSecondary', 'error']
    },
    underline: {
      control: 'select',
      defaultValue: 'hover',
      options: ['none', 'hover', 'always']
    }
  }
} as Meta

const Template: Story<LinkProps> = (args) => <Link {...args} />

export const Default = Template.bind({})

Default.args = {
  href: 'https://google.com',
  children: 'Example Link',
  target: '_blank'
}

export const DefaultSecond = Template.bind({})

DefaultSecond.args = {
  ...Default.args,
  children: 'Test Link'
}
