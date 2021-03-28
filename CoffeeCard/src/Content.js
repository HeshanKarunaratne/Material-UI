import React from 'react';
import CoffeeCard from './CoffeCard';
import { Grid } from '@material-ui/core';
import CoffeMakerList from './Constants';
const Content = () => {
    const getCoffeeMakerCard = coffeeMakerObj => {
        return (
            <Grid item xs={12} sm={4}>
                <CoffeeCard {...coffeeMakerObj} />{' '}
            </Grid>
        );
    };

    return (
        <Grid container spacing={4}>
            {CoffeMakerList.map(coffeMakeObj =>
                getCoffeeMakerCard(coffeMakeObj),
            )}
        </Grid>
    );
};

export default Content;
