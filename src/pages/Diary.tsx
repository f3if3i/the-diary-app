import { useParams } from "react-router-dom"

export const Diary = () => {
    const params = useParams()
    return (
        <div>Diary # {params.diaryId}</div>
    )
}
