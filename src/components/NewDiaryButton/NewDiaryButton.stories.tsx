import { NewDiaryButton } from "./NewDiaryButton"
import { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
    title: "Component Library/NewDiaryButton",
    component: NewDiaryButton,
    decorators: [
        (Story) => (
            <div style={{
                width: "330px"
            }}>
                <Story />
            </div>
        ),
    ],
    parameters: {
        layout: "centered",
    },
} as ComponentMeta<typeof NewDiaryButton>


export const Primary: ComponentStory<typeof NewDiaryButton> = () => {

    return (
        <NewDiaryButton />)
}