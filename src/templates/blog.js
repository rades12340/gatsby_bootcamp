import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Typography from "@material-ui/core/Typography"
import blogModule from "./blog.module.scss"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      publishedDate(formatString: "YYYY-MM-DD hh-m")
      body {
        json
      }
    }
  }
`
const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }
  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <div className={blogModule.content}>
        <Typography variant="h2">
          {props.data.contentfulBlogPost.title}
        </Typography>
        <Typography variant="body2">
          {props.data.contentfulBlogPost.publishedDate}
        </Typography>
        <Typography variant="subtitle1">
          {documentToReactComponents(
            props.data.contentfulBlogPost.body.json,
            options
          )}
        </Typography>
        {/* <div
          dangerouslySetInnerHTML={{
            __html: props.data.contentfulBlogPost.body.content.content.value,
          }}
          className={blogModule.content}
        ></div> */}
      </div>
    </Layout>
  )
}

export default Blog
