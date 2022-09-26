import { Button, FormControl, FormErrorMessage, Heading, Icon, Input, Select, Text, Textarea } from "@chakra-ui/react"
import { css } from "@emotion/react"
import { Formik, Field } from "formik"
import { useState } from "react"
import * as Yup from "yup"
import { Layout } from "../components/layout/Layout"
import { MoodSelector } from "../components/MoodSelector/MoodSelector"
import { formatDate } from "../utils/getDate"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { LOCATION } from "../constants/location"
import { capitalize } from "../utils/capitalize"
import { IconType } from "react-icons"
import { WEATHER } from "../constants/weather"
import { WiDayCloudyGusts } from "react-icons/wi"
import { MdFreeBreakfast } from "react-icons/md"
import { MdLunchDining } from "react-icons/md"
import { MdDinnerDining } from "react-icons/md"

type FormValueType = {
    title: string,
    content: string
}

export const NewDiary = () => {
    const [selectedMood, setSelectedMood] = useState("")
    const today = formatDate(new Date())

    const initialValues = {
        title: "",
        content: "",
        mood: "",
        location: "",
        weather: "",
        breakfast: "",
        lunch: "",
        dinner: ""
    }

    const validationSchema = Yup.object({
        title: Yup.string()
            .max(30, "Must be less than 120 characters")
            .required("Required"),
        content: Yup.string()
            .min(3, "Must be more than 30 characters")
            .max(1500, "Must be less than 1500 characters")
            .required("Required"),
        mood: Yup.string()
            .required("Required"),
        location: Yup.string(),
        weather: Yup.string(),
        breakfast: Yup.string(),
        lunch: Yup.string(),
        dinner: Yup.string(),
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
                            <div css={styles.moodContainer}>
                                <Heading size="lg" mb="24px">{today}</Heading>
                                <div css={styles.moodTitleContainer}>
                                    <Heading size="md">Mood</Heading>
                                    {!!errors.mood && touched.mood && <Text fontSize="sm" color="red.500">{errors.mood}</Text>}
                                </div>
                                <MoodSelector selectedMood={selectedMood} setSelectedMood={setSelectedMood} />
                            </div>
                            <div css={styles.geoContainer}>
                                <Heading size="md" mb="2px">Location and Weather</Heading>
                                <SelectEntry id="location" name="location" options={LOCATION} icon={HiOutlineLocationMarker} />
                                <SelectEntry id="weather" name="weather" options={WEATHER} icon={WiDayCloudyGusts} />
                            </div>
                            <div css={styles.geoContainer}>
                                <Heading size="md" mb="2px">Meals</Heading>
                                <InputEntry id="breakfast" name="breakfast" icon={MdFreeBreakfast} />
                                <InputEntry id="lunch" name="lunch" icon={MdLunchDining} />
                                <InputEntry id="dinner" name="dinner" icon={MdDinnerDining} />
                            </div>
                            <Button colorScheme='teal' variant='solid' type="submit">Submit</Button>
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

        </Layout >
    )
}

type SelectEntryProps = {
    id: string
    name: string
    options: { [key: string]: string }
    icon: IconType
}

const SelectEntry = ({ id, name, options, icon }: SelectEntryProps) => {
    const title = capitalize(name)
    const [inputState, setInputState] = useState(false)

    const handleClick = () => {
        if (inputState === false) {
            setInputState(!inputState)
        }
    }

    return (
        <div css={inputButtonStyle(inputState).geoInputButton} onClick={handleClick}>
            {inputState ?
                <FormControl >
                    <Field
                        as={Select}
                        id={id}
                        name={name}
                        placeholder={`Select ${title}`}
                        borderRadius="36px"
                        textAlign="center"
                        focusBorderColor="black.900"
                        fontWeight="bold"
                    >
                        {Object.keys(options).map((key) => {
                            return (
                                <option key={key} value={key}>{options[key]}</option>
                            )
                        })}
                    </Field>
                </FormControl> :
                <div css={styles.buttonInnerText}>
                    <Icon as={icon} mr="6px" w={6} h={6} />
                    <Heading fontSize="lg">{title}</Heading>
                </div>}
        </div>
    )
}

type InputEntryProps = {
    id: string
    name: string
    icon: IconType
}

const InputEntry = ({ id, name, icon }: InputEntryProps) => {
    const title = capitalize(name)
    const [inputState, setInputState] = useState(false)

    const handleClick = () => {
        if (inputState === false) {
            setInputState(!inputState)
        }
    }

    return (
        <div css={inputButtonStyle(inputState).geoInputButton} onClick={handleClick}>
            {inputState ?
                <FormControl >
                    <Field
                        as={Input}
                        id={id}
                        name={name}
                        placeholder={`${title}`}
                        borderRadius="36px"
                        px="60px"
                        focusBorderColor="black.900"
                        fontWeight="bold"
                    >
                    </Field>
                </FormControl> :
                <div css={styles.buttonInnerText}>
                    <Icon as={icon} mr="6px" w={6} h={6} />
                    <Heading fontSize="lg">{title}</Heading>
                </div>}
        </div>
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

    }),
    moodContainer: css({
        padding: "36px",
        background: "linear-gradient(243.56deg, rgba(57, 254, 124, 0.034) 2.8%, rgba(74, 21, 223, 0) 58.8%), linear-gradient(289.19deg, rgba(244, 244, 244, 0.54) 61.48%, rgba(244, 244, 244, 0) 118.45%)",
        borderRadius: "28px",
        marginBottom: "36px"
    }),
    moodTitleContainer: css({
        display: "flex",
        alignItems: "flex-end",
        gap: "18px",
        marginBottom: "16px"
    }),
    buttonInnerText: css({
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }),
    geoContainer: css({
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        marginBottom: "26px"
    })
}

const inputButtonStyle = (inputLocation: boolean) => {
    if (!inputLocation) {
        return ({
            geoInputButton: css({
                borderRadius: "48px",
                padding: "20px",
                textAlign: "center",
                background: "linear-gradient(339.7deg, rgba(57, 136, 254, 0.034) -10.18%, rgba(21, 102, 223, 0) 38.49%), rgba(244, 244, 244, 0.54)",
                ":hover": {
                    border: "3px black solid",
                    padding: "17px",
                }
            }
            )
        })
    } else {
        return ({
            geoInputButton: css({
                borderRadius: "48px",
                background: "linear-gradient(339.7deg, rgba(57, 136, 254, 0.034) -10.18%, rgba(21, 102, 223, 0) 38.49%), rgba(244, 244, 244, 0.54)",
                padding: "10px",
            }
            )
        })
    }
}