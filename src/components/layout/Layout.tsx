import { css } from "@emotion/react"
import { ReactNode } from "react"

type LayoutProps = {
    children?: ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
    return (
        <div css={styles.container}>
            <div css={styles.contentContainer}>{children}</div>
        </div>
    )

}

const styles = {
    container: css({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

    }),
    contentContainer: css({
        maxWidth: "1300px",
        marginTop: "50px"
    })
}