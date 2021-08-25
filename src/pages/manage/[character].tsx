import {Container, Grid, List, ListItem, ListItemText, TextField, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Layout from '../../components/Layout'
import {useState} from 'react'
import Link from '../../components/Link'
import {useRouter} from 'next/router'
import CharacterIcon from '../../components/CharacterIcon'
import {GetStaticProps} from 'next'

const useStyles = makeStyles(theme => ({
  root: {
    // textAlign: 'center'
  },
}))

export default function Admin({character}) {
  const classes = useStyles()

  return (
    <Layout>
      <Container maxWidth='md' className={classes.root}>
        <Grid container>
          <Grid item><CharacterIcon character={character} size='small'/></Grid>
          <Grid item>
            <h1>Hello World</h1>
          </Grid>
        </Grid>

      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    notFound: process.env.NODE_ENV !== 'development',
    props: {character: context.params.character},
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
