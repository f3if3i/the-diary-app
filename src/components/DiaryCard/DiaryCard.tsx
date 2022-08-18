import { css, jsx } from "@emotion/react"
import { Text, Heading, Icon } from "@chakra-ui/react"
import { WiDaySunny, WiCloudy, WiNa } from "react-icons/wi"
import { HiOutlineGlobeAlt } from "react-icons/hi"

type DiaryCardProps = {
    title: string,
    content: string,
    image?: string,
    mood: string,
    location: string,
    weather: string,
    breakfast?: string,
    lunch?: string,
    dinner?: string
    className?: string,
    id: string

}

export const DiaryCard = ({ id, title, content, image, mood, location, weather, breakfast, lunch, dinner, className }: DiaryCardProps): JSX.Element => {

    return (
        <div css={styles.cardContainer}>
            <div css={styles.diaryContainer} >
                <Heading as="h2" size="2xl" mb="20px" noOfLines={1}>
                    {title}
                </Heading>
                <Text fontSize="xl">{content}</Text>

            </div>
            <div css={styles.stateContainer} >
                <GeoInfo location={location} weather={weather} />
                <Meals breakfast={breakfast} lunch={lunch} dinner={dinner} />
            </div>

        </div >

    )
}

type GeoInfoProps = {
    location: string,
    weather: string
}

const GeoInfo = ({ location, weather }: GeoInfoProps): JSX.Element => {

    return (
        <div css={styles.geoContainer} >
            <Icon ml="8px" w="24px" h="24px" color="black.500" as={HiOutlineGlobeAlt} />
            <Text fontSize="lg">{location}</Text>
            <WeatherIcon weather={weather} />
            <Text fontSize="lg">{weather}</Text>
        </div>
    )

}


// TODO: use object to refactor
const WeatherIcon = ({ weather }: { weather: string }): JSX.Element => {
    switch (weather) {
        case "Sunny":
            return <Icon size="36px" color="black.500" as={WiDaySunny} />
        case "Cloudy":
            return <Icon w={10} h={10} color="black.500" as={WiCloudy} />
        default:
            return <Icon size="36px" color="black.500" as={WiNa} />
    }

}

type MealsProps = {
    breakfast?: string,
    lunch?: string,
    dinner?: string
}
const Meals = ({ breakfast, lunch, dinner }: MealsProps): JSX.Element | null => {
    if (breakfast || lunch || dinner) {
        return (
            <div css={styles.mealContainer}>
                <Heading as="h5" size="lg" mb="20px" noOfLines={1}>Meals</Heading>
                {breakfast ? <Text fontSize="xl" noOfLines={3}>{breakfast}</Text> : <Text fontSize="2xl">N/A</Text>}
                {lunch ? <Text fontSize="xl" noOfLines={3}>{lunch}</Text> : <Text fontSize="2xl">N/A</Text>}
                {dinner ? <Text fontSize="xl" noOfLines={3}>{dinner}</Text> : <Text fontSize="2xl">N/A</Text>}
            </div>
        )
    } else {
        return null
    }

}

const styles = {
    cardContainer: css({
        display: "flex",
        gap: "50px",
        width: "100%",
        padding: "50px",
        borderRadius: "28px",
        background: "linear-gradient(339.7deg, rgba(57, 136, 254, 0.034) -10.18%, rgba(21, 102, 223, 0) 38.49%), rgba(244, 244, 244, 0.54)"
    }),
    diaryContainer: css({
        width: "65%",
    }),
    stateContainer: css({
        padding: "0 24px"
    }),
    geoContainer: css({
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "40px 40px",
        gao: "18px",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "30px"
    }),
    geoContent: css({
        display: "flex",
        alignItems: "center",
        gap: "5px"
    }),
    mealContainer: css({
    })

}