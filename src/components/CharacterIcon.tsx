import {Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {Theme as DefaultTheme} from '@material-ui/core/styles/createMuiTheme'

const useStyles = makeStyles<DefaultTheme, StyleProp>(theme => ({
  root: {
    fontSize: '20rem',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: theme.palette.grey.A400,
    boxShadow: `inset 0 0 ${theme.spacing(3, 1)} ${theme.palette.grey.A100}`,
    borderRadius: theme.spacing(3),
    lineHeight: '1em',
    width: theme.spacing(42)
  },
  small: {
    padding: theme.spacing(0),
    boxShadow: `inset 0 0 ${theme.spacing(2, 0.5)} ${theme.palette.grey.A100}`,
    fontSize: '10rem',
    lineHeight: '1em',
    width: theme.spacing(21)
  }
}))

type StyleProp = {
  size: number
}

type IconSize = 'normal' | 'small'
type CharacterIconProps = {
  size?: IconSize
  character: string
}

export default function CharacterIcon({character, size = 'normal'}: CharacterIconProps) {
  // const classes = useStyles({size: size === 'small' ? 0.5 : 1})
  const classes = useStyles({size: 1})
  let className = [classes.root]

  if (size === 'small') {
    className.push(classes.small)
  }

  return (
    <Typography variant='body1' className={className.join(' ')}>{character}</Typography>
  )
}
