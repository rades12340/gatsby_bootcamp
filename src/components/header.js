import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { NavLink, Link, graphql, useStaticQuery } from "gatsby"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
// import MenuIcon from "@material-ui/icons/Menu"
import headerModule from "../styles/header.module.scss"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(5),
  },
  title: {
    flexGrow: 1,
    lineHeight: 1,
    display: "fit-content",
    textDecoration: "none",
    color: "white",
  },
}))

const Header = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography
          component={Link}
          to="/"
          variant="h6"
          className={classes.title}
        >
          {data.site.siteMetadata.title}
        </Typography>
        <Button
          component={Link}
          activeStyle={{ color: "#ef9207" }}
          to="/"
          color="inherit"
        >
          Home
        </Button>
        <Button
          component={Link}
          activeStyle={{ color: "#ef9207" }}
          to="/blog"
          color="inherit"
        >
          Blog
        </Button>
        <Button
          component={Link}
          activeStyle={{ color: "#ef9207" }}
          to="/about"
          color="inherit"
        >
          About
        </Button>
        <Button
          component={Link}
          activeStyle={{ color: "#ef9207" }}
          to="/contact"
          color="inherit"
        >
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
