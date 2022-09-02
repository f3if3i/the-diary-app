import { Link } from "react-router-dom"
import { Diary } from "../@types/diary"
import diariesData from "../utils/diaries.json"
import { DiaryCard } from "../components/DiaryCard/DiaryCard"
import { css } from "@emotion/react"
import { Layout } from "../components/layout/Layout"
import { DiaryFilter } from "../components/DiaryFilter/DiaryFilter"
import { useEffect, useState } from "react"
import { Heading, Text } from "@chakra-ui/react"
import { NewDiaryButton } from "../components/NewDiaryButton/NewDiaryButton"

export const Diaries = () => {
    const [selectedMonth, setSelectedMonth] = useState<number>(1)
    const diariesDisplay = diaryFiltering(diariesData, selectedMonth)
    const [diaries, setDiaries] = useState(diariesDisplay)

    useEffect(() => {
        const diariesUpdated = diaryFiltering(diariesData, selectedMonth)
        setDiaries(diariesUpdated)
    }, [selectedMonth])

    return (
        <Layout>
            <div css={styles.container}>
                <div css={styles.diariesContainer}>
                    {diaries.length > 0 ? diaries.map((diary: Diary): React.ReactNode => {
                        return <Link
                            to={`/diary/${diary.id}`}
                            key={diary.id}
                        >
                            <DiaryCard
                                id={diary.id}
                                title={diary.title}
                                content={diary.content}
                                mood={diary.mood}
                                location={diary.location}
                                weather={diary.weather}
                                breakfast={diary.meals?.breakfast}
                                lunch={diary.meals?.lunch}
                                dinner={diary.meals?.dinner}
                                date={diary.datetime}
                            />
                        </Link>
                    }) : <EmptyCard />}
                </div>
                <div css={styles.controlContainer}>
                    <DiaryFilter selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
                    <Link to={"/new_diary"} ><NewDiaryButton /></Link>
                </div>
            </div>
        </Layout>
    )
}

const diaryFiltering = (diaries: Diary[], selectedMonth: number) => {
    return diaries.filter(diary => Number(diary.datetime.split("T")[0].split("-")[1]) === selectedMonth)
}

const EmptyCard = (): JSX.Element => {
    return <div css={styles.emptyCardContainer}>
        <Heading size="lg" mb="28px">Sorry, there is no diary yet...</Heading>
        <Text size="lg">Start recording your life now!</ Text>
    </div>

}

const styles = {
    container: css({
        display: "grid",
        gridTemplateColumns: "1fr 330px",
        gap: "30px"

    }),
    diariesContainer: css({
        display: "flex",
        flexDirection: "column",
        gap: "30px"
    }),
    controlContainer: css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "48px"

    }),
    emptyCardContainer: css({
        width: "100%",
        minWidth: "940px",
        maxHeight: "560",
        padding: "50px",
        borderRadius: "28px",
        background: "linear-gradient(339.7deg, rgba(57, 136, 254, 0.034) -10.18%, rgba(21, 102, 223, 0) 38.49%), rgba(244, 244, 244, 0.54)"
    })
}
