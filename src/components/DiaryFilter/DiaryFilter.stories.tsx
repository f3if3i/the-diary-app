import { DiaryFilter } from "./DiaryFilter"
import { ComponentStory, ComponentMeta } from "@storybook/react"
// import { }

export default {
    title: "Component Library/DiaryFilter",
    component: DiaryFilter,
    decorators: [
        (Story) => (
            <div style={{
                // margin: "3em",
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


export const Primary: ComponentStory<typeof DiaryFilter> = () =>
    <DiaryFilter
    />
