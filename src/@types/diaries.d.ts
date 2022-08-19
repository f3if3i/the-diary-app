import Diary from "./diary"

declare module "*/diaries.json" {
    interface Diaries {
        [diaryId: string]: Diary[]

    }
}