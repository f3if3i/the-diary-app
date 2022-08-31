import { Heading } from "@chakra-ui/react"
import { css } from "@emotion/react"
import { Dispatch, SetStateAction } from "react"
import { MonthButton } from "../MonthButton/MonthButton"
import { createArray } from "../../utils/createArray"

type DiaryFilterProps = {
    selectedMonth: number
    setSelectedMonth: Dispatch<SetStateAction<number>>
}

export const DiaryFilter = ({ setSelectedMonth, selectedMonth }: DiaryFilterProps): JSX.Element => {
    const handleSelect = (month: number) => {
        setSelectedMonth(month)
    }

    return <div css={styles.container}>
        <Heading size="lg" mb="30px">2022</Heading>
        <form css={styles.buttonGroupContainer}>
            {createArray(12, 1).map(month => {
                return (
                    <MonthButton key={month} month={month} isSelected={month === selectedMonth}
                        onChange={(e) => handleSelect(Number(e.target.value))} />
                )
            })}
        </form>

    </div>
}

const styles = {
    container: css({
        padding: "36px",
        background: "linear-gradient(243.56deg, rgba(57, 254, 124, 0.034) 2.8%, rgba(74, 21, 223, 0) 58.8%), linear-gradient(289.19deg, rgba(244, 244, 244, 0.54) 61.48%, rgba(244, 244, 244, 0) 118.45%)",
        borderRadius: "28px"
    }),
    buttonGroupContainer: css({
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        justifyContent: "space-between"
    })
}