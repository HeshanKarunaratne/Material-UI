import React from 'react';
import {
    Card,
    CardActions,
    CardContent,
    Typography,
    Button,
    CardHeader,
    Avatar,
    IconButton,
    CardMedia,
} from '@material-ui/core';
import { ShareRounded } from '@material-ui/icons';

export default function CoffeeCard(props) {
    const { avatarUrl, title, subTitle, description, imageUrl } = props;
    return (
        <Card>
            <CardHeader
                avatar={<Avatar src={avatarUrl}></Avatar>}
                action={
                    <IconButton aria-label="settings">
                        <ShareRounded />
                    </IconButton>
                }
                title={title}
                subheader={subTitle}
            />
            <CardMedia image={imageUrl} style={{ height: '150px' }} />
            <CardContent>
                <Typography variant="body2" component="p">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">BUY NOW</Button>
                <Button size="small">OFFER</Button>
            </CardActions>
        </Card>
    );
}
