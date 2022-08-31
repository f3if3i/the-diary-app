import { DiaryFilter } from "./DiaryFilter"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { useState } from "react"

export default {
    title: "Component Library/DiaryFilter",
    component: DiaryFilter,
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
} as ComponentMeta<typeof DiaryFilter>


export const Primary: ComponentStory<typeof DiaryFilter> = () => {
    const [isSelected, setIsSelected] = useState<number>(1)

    return (
        <DiaryFilter setSelectedMonth={setIsSelected} selectedMonth={isSelected} />)
}