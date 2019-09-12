import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const index = () => (
  <div>
    <Layout>
      <Head title="Home" />
      <h1>Hello, I'm Radisav</h1>
      <h4>I'm a full stack developer</h4>
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  </div>
)
export default index
