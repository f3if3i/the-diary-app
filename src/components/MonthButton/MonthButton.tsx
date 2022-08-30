import { Heading } from "@chakra-ui/react"
import { css } from "@emotion/react"

type MonthButtonProps = {
    isSelected: boolean
    month: number
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const MonthButton = ({ isSelected, month, onChange }: MonthButtonProps): JSX.Element => {
    return (
        <label htmlFor={month.toString()}>
            <input
                onChange={onChange}
                checked={isSelected}
                css={styles(isSelected).inputContainer}
                name="monthButton"
                type="radio"
                id={month.toString()}
                value={month.toString()}
            />
            <div css={styles(isSelected).container} >
                <Heading size="md">{month}</Heading>
            </div>
        </label>)

}

const styles = (toggle: boolean) => {
    return ({
        container: css([{
            width: "46px",
            height: "46px",
            background: "#D9D9D9",
            color: "#000000",
            borderRadius: "28px",
            border: "2px solid #000000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            ":hover": {
                color: "white",
                background: "#000000",
            }
        },
        toggle && {
            background: "#000000",
            color: "white"
        }]),
        inputContainer: css({
            display: "none"
        })
    })
}