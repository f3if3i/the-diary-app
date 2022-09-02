import { Box, Heading, Icon } from "@chakra-ui/react"
import { css } from "@emotion/react"
import { useState } from "react"
import { HiPencilAlt } from "react-icons/hi"

export const NewDiaryButton = (): JSX.Element => {
    const [onHover, setOnHover] = useState(false)

    return (
        <div css={styles(onHover).container}
            // TODO: use css to refactor the hover effect
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}>
            <Box
                css={styles(onHover).container}
                as="button"
                display="flex"
                alignItems="center"
                gap="16px"
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            >
                <div css={styles(onHover).iconContainer}><Icon w={6} h={6} as={HiPencilAlt} /></div>
                <Heading borderBottom="2px" size="md">Create new diary</Heading>
            </Box>
        </div >

    )
}

const styles = (onHover: boolean) => {
    return {
        container: css({
            display: "flex",
        }),
        iconContainer: css([{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#D9D9D9",
            borderRadius: "36px",
            border: "2px #000000 solid",
            padding: "10px"
        },
        onHover && {
            backgroundColor: "#ebedf0",
        }])

    }
}