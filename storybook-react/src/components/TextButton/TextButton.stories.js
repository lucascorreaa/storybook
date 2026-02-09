import { fn } from 'storybook/test'

import TextButton from './index'

export default {
    title: "Components/TextButton",
    component: TextButton,
    argTypes: {
        label: { control: "text" }
    }
}

export const Default = {
    args: {
        label: "storybook TextButton"
    }
}