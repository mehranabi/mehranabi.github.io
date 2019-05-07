import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Appbar from './Appbar'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
})

class Layout extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Appbar
          title={this.props.title}
          subtitle={this.props.subtitle}
          menu={this.props.menu}
        />
        <div className={classes.content}>{this.props.children}</div>
      </div>
    )
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Layout)
