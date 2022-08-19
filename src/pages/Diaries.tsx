import { Link, Outlet } from "react-router-dom"
import { Diary } from "../@types/diary"
import diariesData from "../utils/diaries.json"
import { DiaryCard } from "../components/DiaryCard/DiaryCard"
import { css } from "@emotion/react"

export const Diaries = () => {
    return (
        <div>
            <div>Diaries</div>
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
                            dinner={diary.meals?.dinner} />

                    </Link>
                })}
            </div>

            {/* <Outlet /> */}

        </div>
    )
}

const styles = {
    diariesContainer: css({
        display: "flex",
        flexDirection: "column",
        gap: "30px"
    })
}
