import { MonthButton } from "./MonthButton"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { css } from "@emotion/react"
import { useState } from "react"

export default {
    title: "Component Library/MonthButton",
    component: MonthButton,
    decorators: [
        (Story) => (
            <div style={{
            }}>
                <Story />
            </div>
        ),
    ],
    parameters: {
        layout: "centered",
    },
} as ComponentMeta<typeof MonthButton>


export const Primary: ComponentStory<typeof MonthButton> = () => {
    const [isSelected, setIsSelected] = useState<number>()

    const handleSelect = (month: number) => {
        setIsSelected(month)
    }

    return (

        <div css={styles.container}>
            <MonthButton key={12} month={12} isSelected={12 === isSelected}
                onChange={() => handleSelect(12)} />
            <MonthButton key={1} month={1} isSelected={1 === isSelected}
                onChange={() => handleSelect(1)} />
        </div>)
}

const styles = {
    container: css({
        display: "flex",
        gap: "30px"
    })
}