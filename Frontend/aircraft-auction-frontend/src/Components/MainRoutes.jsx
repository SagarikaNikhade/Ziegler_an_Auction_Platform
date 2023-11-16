import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import LandingPage from "./LandingPage";
import Aircraft from "../Pages/Aircraft";
import ShowAllAircraft from "../Pages/ShowAllAircraft";
import Bid from "../Pages/Bid";
import Payment from "../Pages/Payment"

const MainRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/add" element={<Aircraft/>} />
            <Route path="/get" element={<ShowAllAircraft/>} />
            <Route path="/bid/:id" element={<Bid/>} />
            <Route path="/pay" element={<Payment/>} />
        </Routes>
    )
}

export default MainRoute;