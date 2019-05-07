import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Link from 'next/link'

const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing.unit,
  },
  description: {
    marginStart: theme.spacing.unit * 2,
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})

class Appbar extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <AppBar position="static" color="default">
        <Toolbar className={classes.toolbar}>
          <Typography variant="subtitle1" color="inherit">
            {this.props.title}
          </Typography>
          <Typography
            variant="subtitle2"
            color="inherit"
            className={classes.description}
          >
            {this.props.subtitle}
          </Typography>
          <div className={classes.grow} />
          <Link href="/">
            <Button
              variant="contained"
              color={this.props.menu === 'home' ? 'primary' : 'default'}
              className={classes.button}
              enab
            >
              Home
            </Button>
          </Link>
          <Link href="/about">
            <Button
              variant="contained"
              color={this.props.menu === 'about' ? 'primary' : 'default'}
              className={classes.button}
            >
              About Me
            </Button>
          </Link>
          <Link href="/projects">
            <Button
              variant="contained"
              color={this.props.menu === 'projects' ? 'primary' : 'default'}
              className={classes.button}
            >
              My Projects
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    )
  }
}

Appbar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Appbar)
