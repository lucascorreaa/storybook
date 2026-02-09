import IconButton from "./index"

export default {
    title: "Components/IconButton",
    component: IconButton,
    argTypes: {
        src: { control: "text" },
        alt: { control: "text" }
    }
}

export const Default = {
    args: {
        src: "https://avatars.githubusercontent.com/u/91700610?v=4",
        alt: "avatar github" 
    }
}