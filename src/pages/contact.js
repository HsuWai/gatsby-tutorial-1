import React from "react"
import {Link} from "gatsby"
import Header from "../components/header"

export default () => (
    <div>
        <Link to="/">Home</Link>
        <Header headerText="Contact US!!"/>
        <p>Email Address : info@test.com</p>
    </div>
)
