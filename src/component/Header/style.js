import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
export default makeStyles((theme) => ({
    container: {
        background : theme.palette.primary.main,
        color:'white',
        marginBottom : 20,
        fontWeight: 'light',
        padding:'5px 0px'
    }
}))