import App from "./../App"
import { Route, Routes } from "react-router-dom"
import { Diaries } from "../pages/Diaries"
import { NewDiary } from "../pages/NewDiary"
import { Invalid } from "../pages/Invalid"
import { Diary } from "../pages/Diary"

export const Routing = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="diaries" element={<Diaries />} />
                <Route path="diary" >
                    <Route path=":diaryId" element={<Diary />} />
                </Route>

                <Route path="new_diary" element={<NewDiary />} />
                <Route path="*" element={<Invalid />} />
            </Route>
        </Routes >
    )
}