import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import AcUnitRounded from '@material-ui/icons/AcUnitRounded';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    typographyStyles: {
        flex: 1,
    },
});
const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.typographyStyles}>
                    Header
                </Typography>
                <AcUnitRounded />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
