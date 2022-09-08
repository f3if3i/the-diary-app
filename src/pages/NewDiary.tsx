import { FormControl, FormErrorMessage, Heading, Input, Textarea } from "@chakra-ui/react"
import { css } from "@emotion/react"
import { Formik, Field } from "formik"
import * as Yup from "yup"
import { Layout } from "../components/layout/Layout"

type FormValueType = {
    title: string,
    content: string
}

export const NewDiary = () => {


    const initialValues = {
        title: "",
        content: ""
    }

    const validationSchema = Yup.object({
        title: Yup.string()
            .max(30, "Must be 30characters or less")
            .required("Required"),
        content: Yup.string()
            .max(30, "Must be 30characters or less")
            .required("Required"),
    })

    const onSubmit = (values: FormValueType) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
        }, 400)
    }



    return (
        <Layout>
            <h1>NewDiary</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ handleSubmit, errors, touched }) => (
                    <form onSubmit={handleSubmit} css={styles.container}>
                        <div css={styles.stateContainer}>
                            <div>Temp</div>
                        </div>
                        <div css={styles.inputContainer}>
                            <Heading size="2xl" mb="48px">Tell us your story today!</Heading>
                            <div css={styles.contentContainer}>
                                <div css={styles.textInputContainer}>
                                    <FormControl isInvalid={!!errors.title && touched.title}>
                                        <Field
                                            as={Input}
                                            id="title"
                                            name="title"
                                            variant="flushed"
                                            placeholder="Title..."
                                            size="lg"
                                            minWidth="544px"
                                            bg="white.500"
                                            borderRadius="6px"
                                            pl="20px"
                                        />
                                        <FormErrorMessage>{errors.title}</FormErrorMessage>
                                    </FormControl>
                                    <FormControl isInvalid={!!errors.content && touched.content}>
                                        <Field
                                            as={Textarea}
                                            id="content"
                                            name="content"
                                            variant="flushed"
                                            placeholder="Details..."
                                            size="lg"
                                            minHeight="50vh"
                                            minWidth="544px"
                                            bg="white.500"
                                            borderRadius="6px"
                                            p="20px"
                                        />
                                        <FormErrorMessage>{errors.content}</FormErrorMessage>
                                    </FormControl>
                                </div>
                                <div css={styles.newsContainer}>
                                    <div>news area</div>
                                </div>
                            </div>

                        </div>


                    </form>
                )}
            </Formik>

        </Layout>
    )
}



const styles = {
    container: css({
        width: "100%",
        display: "grid",
        gridTemplateColumns: "330px 1fr",
        gap: "30px"
    }),
    inputContainer: css({
        padding: "46px",
        width: "100%",
        borderRadius: "28px",
        background: "linear-gradient(339.7deg, rgba(57, 136, 254, 0.034) -10.18%, rgba(21, 102, 223, 0) 38.49%), rgba(244, 244, 244, 0.54)"

    }),
    contentContainer: css({
        display: "grid",
        gridTemplateColumns: "1.2fr 0.6fr",
        gap: "30px"

    }),
    textInputContainer: css({
        display: "flex",
        flexDirection: "column",
        gap: "30px"
    }),
    newsContainer: css({

    }),
    stateContainer: css({

    })
}