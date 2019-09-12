import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const page404 = () => {
  return (
    <div>
      <Layout>
        <h1>Page Not Found</h1>
        <p>
          <Link to="/">Head home</Link>
        </p>
      </Layout>
    </div>
  )
}

export default page404
