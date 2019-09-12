import React from "react"
import "typeface-roboto"
import Header from "../components/header"
import Footer from "../components/footer"
import Container from "@material-ui/core/Container"
import indexModule from "../styles/index.module.scss"

const layout = props => {
  return (
    <div className={indexModule.root}>
      <Header />
      <Container
        maxWidth="md"
        style={{ paddingTop: "5rem", minHeight: "calc(100% - 10vh)" }}
      >
        {props.children}
      </Container>
      <Footer />
    </div>
  )
}

export default layout
