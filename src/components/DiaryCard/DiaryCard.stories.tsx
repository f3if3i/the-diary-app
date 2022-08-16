import { DiaryCard } from "./DiaryCard"
import { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
    title: "Component Library/DiaryCard",
    component: DiaryCard
} as ComponentMeta<typeof DiaryCard>

export const Primary: ComponentStory<typeof DiaryCard> = () => <DiaryCard  />
