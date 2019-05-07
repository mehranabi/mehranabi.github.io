import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../src/components/Layout'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import Head from 'next/head'

const styles = theme => ({
  content: {
    padding: theme.spacing.unit * 2,
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing.unit * 2,
    flexGrow: 1,
  },
})

class About extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <Layout title="Mehran Abghari" subtitle="Read about me" menu={'about'}>
        <Head>
          <title>About Me | Mehran Abghari - Software Developer</title>
        </Head>
        <div className={classes.content}>
          <Card square className={classes.card}>
            <Typography variant="body1">Hello, I'm Mehran Abghari</Typography>
          </Card>
        </div>
      </Layout>
    )
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(About)
