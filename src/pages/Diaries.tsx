import { Link } from "react-router-dom"
import { Diary } from "../@types/diary"
import diariesData from "../utils/diaries.json"
import { DiaryCard } from "../components/DiaryCard/DiaryCard"
import { css } from "@emotion/react"
import { Layout } from "../components/layout/Layout"
import { DiaryFilter } from "../components/DiaryFilter/DiaryFilter"

export const Diaries = () => {
    return (
        <Layout>
            <div css={styles.container}>
                <div css={styles.diariesContainer}>
                    {diariesData.map((diary: Diary): React.ReactNode => {
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
                                date={diary.datetime} />

                        </Link>
                    })}
                </div>
                <div css={styles.controlContainer}>
                    <DiaryFilter />
                </div>
            </div>

            {/* <Outlet /> */}

        </Layout>
    )
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

    })
}
