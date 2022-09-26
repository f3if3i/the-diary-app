/* eslint-disable no-unused-vars */
import { css } from "@emotion/react"
import { MOOD } from "../../constants/mood"
import { Field, useFormikContext } from "formik"
import { Dispatch, SetStateAction } from "react"

type MoodSelectorType = {
    selectedMood: string,
    setSelectedMood: Dispatch<SetStateAction<string>>

}

export const MoodSelector = ({ selectedMood, setSelectedMood }: MoodSelectorType): JSX.Element => {
    return (
        <div css={styles.container}>
            <div css={styles.moodContainer}>
                <MoodButtonGroup setSelectedMood={setSelectedMood} selectedMood={selectedMood} />
            </div>
        </div>
    )
}

type MoodButtonGroupType = {
    setSelectedMood: Dispatch<SetStateAction<string>>
    selectedMood: string

}
const MoodButtonGroup = ({ setSelectedMood, selectedMood }: MoodButtonGroupType): JSX.Element => {
    const { setFieldValue } = useFormikContext()

    const handleSelect = (mood: string) => {
        setSelectedMood(mood)
    }

    return (
        <div id="mood-radio-group">
            <div css={styles.moodButtonContainer} role="group" aria-labelledby="mood-radio-group">
                {Object.keys(MOOD).map(mood =>
                    <label key={mood} >
                        <Field
                            type="radio"
                            name="mood"
                            value={mood}
                            css={styles.radioButtonInput}
                            onChange={(e: { target: { value: string } }) => {
                                handleSelect(e.target.value)
                                setFieldValue("mood", e.target.value)
                            }}
                            checked={mood === selectedMood}
                        />
                        <div css={radioButtonStyles(selectedMood === mood).radioButton}>{MOOD[mood]}</div>
                    </label>
                )
                }
            </div>
        </div>
    )
}

const styles = {
    container: css({
    }),
    moodContainer: css({
        // display: "flex",
    }),
    moodButtonContainer: css({
        display: "flex",
        flexWrap: "wrap",
        gap: "20px"

    }),
    radioButtonInput: css({
        display: "none"
    }),

}

const radioButtonStyles = (isSelected: boolean) => {
    return ({
        radioButton: css([{
            padding: "2px 20px",
            background: "#FFFFFF",
            borderRadius: "20px",
            border: "2px #FFFFFF solid",
            fontSize: "26px",
            cursor: "pointer",
            ": hover": {
                border: "2px black solid"
            }
        },
        isSelected && {
            border: "2px black solid",
            background: "black"
        }
        ]),
    })
}