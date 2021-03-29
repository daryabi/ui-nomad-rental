import React from "react"
import "./styles.css"

import Account from "./Account"
import LeftSide from "../leftSide/leftSide"
import Nav from "../nav/Nav"
// import Booking from "../components/Booking/Booking"
export default function Join() {
  return (
    <div style={{ backgroundColor: "#f8f9fa" }}>
      <Nav />
      <div className="row no-gutters">
        <div className="col-md-3 no-gutters">
          <div className="leftside d-flex justify-content-center align-content-center">
            <LeftSide />
          </div>
        </div>
        <div className="col-md-9 no-gutters">
          <div className="rightside ">
            <Account />
            {/* <Booking /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
