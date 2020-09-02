import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
        margin: 20,
        padding: 20,
        border: "2px solid black",
        borderRadius: 15
    },
    inline: {
        display: 'inline',
    },
}));

export default function AlignItemsList() {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Travis Howard" src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F593b2e4b31358e03e55a0e8c%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D634%26cropX2%3D2468%26cropY1%3D39%26cropY2%3D1874" />
                </ListItemAvatar>
                <ListItemText
                    primary="Summer BBQ"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                to Scott, Alex, Jennifer
                            </Typography>
                            {" — Wish I could come, but I'm out of town this…"}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="data:image/jpeg;base64,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" />
                </ListItemAvatar>
                <ListItemText
                    primary="Oui Oui"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                Sandra Adams
                            </Typography>
                            {' — Do you have Paris recommendations? Have you ever…'}
                        </React.Fragment>
                    }
                />
            </ListItem>
        </List>
    );
}
