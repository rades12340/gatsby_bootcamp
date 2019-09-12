import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const about = () => {
  return (
    <div>
      <Layout>
        <h1>About</h1>
        <h4>This is about me page</h4>
        <h4>
          More information about my contacts: <Link to="/contact">Contact</Link>{" "}
        </h4>
      </Layout>
    </div>
  )
}

export default about
