import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import { ChakraProvider } from "@chakra-ui/react"
import { Diaries } from "./pages/Diaries"
import { NewDiary } from "./pages/NewDiary"
import { Invalid } from "./pages/Invalid"
import { Diary } from "./pages/Diary"



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route path="diaries" element={<Diaries />}>
                            <Route path=":diaryId" element={<Diary />} />
                        </Route>
                        <Route path="new_diary" element={<NewDiary />} />
                        <Route path="*" element={<Invalid />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    </React.StrictMode>
)
