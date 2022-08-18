import { DiaryCard } from "./DiaryCard"
import { ComponentStory, ComponentMeta } from "@storybook/react"
// import { }

export default {
    title: "Component Library/DiaryCard",
    component: DiaryCard,
    decorators: [
        (Story) => (
            <div style={{
                // margin: "3em",
                // width: "85%"
            }}>
                <Story />
            </div>
        ),
    ],
    parameters: {
        layout: "centered",
    },
} as ComponentMeta<typeof DiaryCard>


export const Primary: ComponentStory<typeof DiaryCard> = () =>
    <DiaryCard
        id="0001"
        title="Nice weather today"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt ligula nec mauris placerat porta. Duis posuere dolor sit amet ante sodales, eget aliquet eros dignissim. Suspendisse neque leo, tristique nec sem nec, finibus feugiat justo. Nam eleifend dignissim dolor sed porttitor. Quisque laoreet, nisl at mattis ornare, ligula ligula porta turpis, semper interdum augue est quis turpis. Morbi sed ex eget libero venenatis luctus ac et erat. Quisque ac dapibus dolor, nec sodales lorem. Duis sed egestas risus, at tincidunt ex. Aenean eros ligula, scelerisque eu diam quis, laoreet venenatis risus. Aliquam varius mi enim, id ultricies lorem dapibus vel. Sed turpis diam, molestie non pharetra consequat, placerat eu diam. Suspendisse ut elementum mi. Maecenas ex nulla, vehicula a est eu, dictum dapibus leo. Pellentesque gravida ligula ut ipsum volutpat, nec porttitor tellus mollis. Aliquam tempus semper ante non feugiat. Donec pretium lacus nunc, sed convallis libero bibendum rutrum."
        mood="happy"
        breakfast="Bread"
        lunch="Indian curry"
        dinner="Salad"
        location="Tokyo"
        weather="Cloudy"
    />

