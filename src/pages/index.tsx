import {Card, CardContent, Container, Grid, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Layout from '../components/Layout'
import {useEffect, useRef, useState} from 'react'
import keyboardKey from 'keyboard-key'

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center'
  },
  column: {
    minHeight: '80vh'
  },
  icon: {
    verticalAlign: 'middle',
    margin: '0 4px'
  },
  display: {
    fontSize: '20rem',
    color: theme.palette.grey.A400,
    boxShadow: `inset 0 0 ${theme.spacing(3, 1)} ${theme.palette.grey.A100}`,
    padding: theme.spacing(3, 2),
    borderRadius: theme.spacing(3),
    lineHeight: '0.8em',
    width: theme.spacing(40)
    // fontFamily: "'Roboto Mono', monospace"

  }
}))

export default function Home() {
  const [letter, setLetter] = useState<string>('A')
  const audioRef = useRef<HTMLAudioElement>()
  const classes = useStyles()

  function handleKeypress(event: KeyboardEvent) {
    event.preventDefault()

    const code = keyboardKey.getCode(event)

    if ((code >= 48 && code <= 57) || (code >= 65 && code <= 105)) {
      const letter = keyboardKey.getKey(event).toUpperCase()


      setLetter((oldLetter) => {
        if (oldLetter === letter) {
          audioRef.current.load()
        }

        return letter
      })
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeypress)

    return () => document.removeEventListener('keydown', handleKeypress)
  })

  return (
    <Layout>
      <Container maxWidth='sm' className={classes.root}>
        <Grid container spacing={0} direction='column' alignItems='center' justify='center' className={classes.column}>
          <Grid item>
            <Typography variant='body1' className={classes.display}>{letter}</Typography>
          </Grid>
        </Grid>
      </Container>
      <audio ref={audioRef} src={`/sounds/human/${letter.toLowerCase()}.mp3`} controls={false} autoPlay={true}>
        Your browser does not support the audio element.
      </audio>
    </Layout>
  )
}
