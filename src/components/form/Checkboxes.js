import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import {makeStyles} from "@material-ui/core/styles";
import { green } from '@material-ui/core/colors';
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {Favorite, FavoriteBorder} from "@material-ui/icons";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import clsx from "clsx";


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        border: "2px solid black",
        borderRadius: 10,
        padding: 10,
        marginTop: 10
    },
    formControl: {
        margin: theme.spacing(3),
    },
    icon: {
        borderRadius: 3,
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    checkedIcon: {
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage:
                "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
                " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
                "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#106ba3',
        },
    },
}));

const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);


// Inspired by blueprintjs
function StyledCheckbox(props) {
    const classes = useStyles();

    return (
        <Checkbox
            className={classes.root}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            inputProps={{ 'aria-label': 'decorative checkbox' }}
            {...props}
        />
    );
}


export default function Checkboxes() {

    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
        gilad: true,
        jason: false,
        antoine: false,
    });

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const handleChange2 = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const { gilad, jason, antoine } = state;
    const error = [gilad, jason, antoine].filter((v) => v).length !== 2;


    return (
        <div>
            <div className={classes.root}>
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <Checkbox
                    defaultChecked
                    color="primary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                <Checkbox disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />
                <Checkbox disabled checked inputProps={{ 'aria-label': 'disabled checked checkbox' }} />
                <Checkbox
                    defaultChecked
                    indeterminate
                    inputProps={{ 'aria-label': 'indeterminate checkbox' }}
                />
                <Checkbox
                    defaultChecked
                    color="default"
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                />
                <Checkbox
                    defaultChecked
                    size="small"
                    inputProps={{ 'aria-label': 'checkbox with small size' }}
                />
            </div>

            <div className={classes.root}>
                <FormGroup row>
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedA} onChange={handleChange2} name="checkedA" />}
                        label="Secondary"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={state.checkedB}
                                onChange={handleChange2}
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Primary"
                    />
                    <FormControlLabel control={<Checkbox name="checkedC" />} label="Uncontrolled" />
                    <FormControlLabel disabled control={<Checkbox name="checkedD" />} label="Disabled" />
                    <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Disabled" />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={state.checkedF}
                                onChange={handleChange2}
                                name="checkedF"
                                indeterminate
                            />
                        }
                        label="Indeterminate"
                    />
                    <FormControlLabel
                        control={<GreenCheckbox checked={state.checkedG} onChange={handleChange2} name="checkedG" />}
                        label="Custom color"
                    />
                    <FormControlLabel
                        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                        label="Custom icon"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                name="checkedI"
                            />
                        }
                        label="Custom size"
                    />
                </FormGroup>
            </div>

            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Assign responsibility</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
                            label="Gilad Gray"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
                            label="Jason Killian"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
                            label="Antoine Llorca"
                        />
                    </FormGroup>
                    <FormHelperText>Be careful</FormHelperText>
                </FormControl>
                <FormControl required error={error} component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Pick two</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
                            label="Gilad Gray"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
                            label="Jason Killian"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
                            label="Antoine Llorca"
                        />
                    </FormGroup>
                    <FormHelperText>You can display an error</FormHelperText>
                </FormControl>
            </div>

            <div className={classes.root}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Label Placement</FormLabel>
                    <FormGroup aria-label="position" row>
                        <FormControlLabel
                            value="top"
                            control={<Checkbox color="primary" />}
                            label="Top"
                            labelPlacement="top"
                        />
                        <FormControlLabel
                            value="start"
                            control={<Checkbox color="primary" />}
                            label="Start"
                            labelPlacement="start"
                        />
                        <FormControlLabel
                            value="bottom"
                            control={<Checkbox color="primary" />}
                            label="Bottom"
                            labelPlacement="bottom"
                        />
                        <FormControlLabel
                            value="end"
                            control={<Checkbox color="primary" />}
                            label="End"
                            labelPlacement="end"
                        />
                    </FormGroup>
                </FormControl>
            </div>

            <div className={classes.root}>
                <StyledCheckbox />
                <StyledCheckbox defaultChecked />
                <StyledCheckbox disabled />
            </div>
        </div>
    );
}
