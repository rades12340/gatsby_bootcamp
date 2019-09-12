import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const contact = () => {
  return (
    <div>
      <Layout>
        <Head title="Contact" />
        <h1>Contact</h1>
        <h4>This is how you can contact me</h4>
        <h4>
          If you want to contact me, this is my twitter account{" "}
          <a href="https://twitter.com/rades_90" target="_blank">
            Radisav Savkovic
          </a>
        </h4>
      </Layout>
    </div>
  )
}

export default contact
