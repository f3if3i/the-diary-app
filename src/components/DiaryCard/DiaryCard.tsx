import { css } from "@emotion/react"
import { FC } from "react"

type DiaryCardProps = {
    title: string,
    content: string,
    image?: string,
    mood: string,
    location: string,
    breakfast?: string,
    lunch?: string,
    dinner?: string
    className?: string,

}

export const DiaryCard: FC<DiaryCardProps> = (props) => {
    return (
        <div css={styles.container}>DiaryCard</div>
    )
}


const styles = {
    container: css({
        width: "100%"
    })
}