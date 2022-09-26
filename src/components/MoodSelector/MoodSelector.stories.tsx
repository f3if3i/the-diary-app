import { MoodSelector } from "./MoodSelector"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { useState } from "react"

export default {
    title: "Component Library/MoodSelector",
    component: MoodSelector,
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
} as ComponentMeta<typeof MoodSelector>


export const Primary: ComponentStory<typeof MoodSelector> = () => {
    const [isSelected, setIsSelected] = useState<string>("")

    return (
        <MoodSelector selectedMood={isSelected} setSelectedMood={setIsSelected} />
    )
}