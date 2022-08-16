import { Link, Outlet } from "react-router-dom"

export const Diaries = () => {
    const diaries: number[] = [0, 1, 2, 3, 4, 5]
    return (
        <div>
            <div>DiaryList</div>
            <div>
                {diaries.map((diary: number): React.ReactNode => {
                    return <Link
                        to={`/diaries/${diary}`}
                        key={diary}
                    >
                        {diary}
                    </Link>
                })}
            </div>

            <Outlet />

        </div>
    )
}
