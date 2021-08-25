import {Container, List, ListItem, ListItemText, TextField} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Layout from '../../components/Layout'
import {useState} from 'react'
import Link from '../../components/Link'
import {GetStaticProps} from 'next'

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center'
  },
  search: {
    // display: 'block'
  }
}))

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

export default function Admin() {
  const [search, setSearch] = useState<string>('')
  const classes = useStyles()

  function filteredList() {
    let list = Array.from(CHARACTERS)

    if (search) {
      const term = search.toUpperCase()
      list = list.filter(char => char === term)
    }

    return list.map(char => (
      <ListItem button key={char} component={Link} href={`/manage/${char.toLowerCase()}`}>
          <ListItemText primary={char}/>
      </ListItem>
    ))
  }

  return (
    <Layout>
      <Container maxWidth='sm' className={classes.root}>
        <TextField label='Search...' className={classes.search} fullWidth
                   onChange={event => setSearch(event.target.value.trim())}/>
        <List component='nav'>
          {filteredList()}
        </List>
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    notFound: process.env.NODE_ENV !== 'development',
    props: {},
  }
}
