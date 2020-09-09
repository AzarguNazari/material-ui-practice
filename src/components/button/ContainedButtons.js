import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
import {PhotoCamera} from "@material-ui/icons";
import Divider from "@material-ui/core/Divider";
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {makeStyles, ThemeProvider} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        border: "2px solid black",
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
    },
    input: {
        display: 'none',
    },
}));


export default function ContainedButtons() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button variant="contained">Default</Button>
            <Button variant="contained" color="primary">Primary</Button>
            <Button variant="contained" color="secondary">Secondary</Button>
            <Button variant="contained" disabled>Disabled</Button>
            <Button variant="contained" color="primary" href="#contained-buttons">Link</Button>
            <Button variant="contained" color="primary" disableElevation>Disable elevation</Button>

            <Divider variant="middle"/>

            <Button>Default</Button>
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button disabled>Disabled</Button>
            <Button href="#text-buttons" color="primary">Link</Button>

            <Divider variant="middle"/>

            <Button variant="outlined">Default</Button>
            <Button variant="outlined" color="primary">Primary</Button>
            <Button variant="outlined" color="secondary">Secondary</Button>
            <Button variant="outlined" disabled>Disabled</Button>
            <Button variant="outlined" color="primary" href="#outlined-buttons">Link</Button>

            <Divider variant="middle"/>

            <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                    Upload
                </Button>
            </label>
            <input accept="image/*" className={classes.input} id="icon-button-file" type="file"/>
            <label htmlFor="icon-button-file">
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera/>
                </IconButton>
            </label>


            <Divider variant="middle"/>

            <div>
                <Button size="small" className={classes.margin}>
                    Small
                </Button>
                <Button size="medium" className={classes.margin}>
                    Medium
                </Button>
                <Button size="large" className={classes.margin}>
                    Large
                </Button>
            </div>
            <div>
                <Button variant="outlined" size="small" color="primary" className={classes.margin}>
                    Small
                </Button>
                <Button variant="outlined" size="medium" color="primary" className={classes.margin}>
                    Medium
                </Button>
                <Button variant="outlined" size="large" color="primary" className={classes.margin}>
                    Large
                </Button>
            </div>
            <div>
                <Button variant="contained" size="small" color="primary" className={classes.margin}>
                    Small
                </Button>
                <Button variant="contained" size="medium" color="primary" className={classes.margin}>
                    Medium
                </Button>
                <Button variant="contained" size="large" color="primary" className={classes.margin}>
                    Large
                </Button>
            </div>
            <div>
                <IconButton aria-label="delete" className={classes.margin} size="small">
                    <ArrowDownwardIcon fontSize="inherit"/>
                </IconButton>
                <IconButton aria-label="delete" className={classes.margin}>
                    <DeleteIcon fontSize="small"/>
                </IconButton>
                <IconButton aria-label="delete" className={classes.margin}>
                    <DeleteIcon/>
                </IconButton>
                <IconButton aria-label="delete" className={classes.margin}>
                    <DeleteIcon fontSize="large"/>
                </IconButton>
            </div>

            <Divider variant="middle"/>

            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon/>}
            >
                Delete
            </Button>
            {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<Icon>send</Icon>}
            >
                Send
            </Button>
            <Button
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<CloudUploadIcon/>}
            >
                Upload
            </Button>
            <Button
                variant="contained"
                disabled
                color="secondary"
                className={classes.button}
                startIcon={<KeyboardVoiceIcon/>}
            >
                Talk
            </Button>
            <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<SaveIcon/>}
            >
                Save
            </Button>
            <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<SaveIcon/>}
            >
                Save
            </Button>

            <Divider variant="middle"/>

            <IconButton aria-label="delete">
                <DeleteIcon/>
            </IconButton>
            <IconButton aria-label="delete" disabled color="primary">
                <DeleteIcon/>
            </IconButton>
            <IconButton color="secondary" aria-label="add an alarm">
                <AlarmIcon/>
            </IconButton>
            <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon/>
            </IconButton>

            <Divider aria-label="delete"/>

            {/*<ColorButton variant="contained" color="primary" className={classes.margin}>*/}
            {/*    Custom CSS*/}
            {/*</ColorButton>*/}
            {/*<ThemeProvider theme={theme}>*/}
            {/*    <Button variant="contained" color="primary" className={classes.margin}>*/}
            {/*        Theme Provider*/}
            {/*    </Button>*/}
            {/*</ThemeProvider>*/}
            {/*<BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin}>*/}
            {/*    Bootstrap*/}
            {/*</BootstrapButton>*/}

        </div>
    );
}
