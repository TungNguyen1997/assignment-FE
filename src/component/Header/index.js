import React from 'react'
import {Typography} from '@material-ui/core'
import useStyles from './style';

export default function Header(params) {
    const classes  = useStyles();
    return (
        <Typography variant='h4' align='center' className={classes.container}>
            Blog
        </Typography>
    )
}