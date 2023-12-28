import { Link, Route, Routes } from "react-router-dom"
import User from "./User"

const Sign = () => {
    return (
        <div>
            <h1>sign in</h1>
            <Link to='/sign/user'>login in</Link>

            <Routes>
                <Route path="/sign/user" Component={User} />
            </Routes>
        </div>
    )
}

export default Sign
