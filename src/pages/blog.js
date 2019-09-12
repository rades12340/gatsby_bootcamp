import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Layout from "../components/layout"
import Divider from "@material-ui/core/Divider"
import Head from "../components/head"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: "100%",
    padding: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: "1rem 0",

    "&:hover": {
      backgroundColor: "#f1f0f0",
    },
  },
}))

const BlogPage = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "YYYY MMMM DD")
          }
        }
      }
    }
  `)
  // console.log(data)
  return (
    <div>
      <Layout>
        <Head title="Blog" />
        {data.allContentfulBlogPost.edges.map(edge => (
          <Link to={`/blog/${edge.node.slug}`} key={edge.node.slug}>
            <Paper className={classes.paper}>
              <Typography variant="h3">{edge.node.title}</Typography>
              <Typography variant="subtitle1">
                {edge.node.publishedDate}
              </Typography>
            </Paper>
          </Link>
        ))}
      </Layout>
    </div>
  )
}

export default BlogPage
