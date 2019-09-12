import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "../styles/footer.module.scss"

const Footer = () => {
  const res = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <div className={footerStyles.footer}>
      <p>Created by {res.site.siteMetadata.author}, copyright 2019</p>
    </div>
  )
}

export default Footer
