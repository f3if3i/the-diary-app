import { Outlet } from "react-router-dom"
import { Layout } from "./components/layout/Layout"

function App() {
    return (
        <div className="App">
            <Layout>
                <Outlet />
            </Layout>
        </div>
    )
}

export default App
