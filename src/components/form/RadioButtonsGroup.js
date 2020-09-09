import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {makeStyles} from "@material-ui/core/styles";
import { green } from '@material-ui/core/colors';
import withStyles from "@material-ui/core/styles/withStyles";


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        border: "2px solid black",
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
    }
}));

const GreenRadio = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);


export default function RadioButtonsGroup() {

    const [selectedValue, setSelectedValue] = React.useState('a');
    const classes = useStyles();
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleChange2 = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div>
            <div className={classes.root}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                        <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className={classes.root}>
                <Radio
                    checked={selectedValue === 'a'}
                    onChange={handleChange2}
                    value="a"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'A' }}
                />
                <Radio
                    checked={selectedValue === 'b'}
                    onChange={handleChange2}
                    value="b"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'B' }}
                />
                <GreenRadio
                    checked={selectedValue === 'c'}
                    onChange={handleChange2}
                    value="c"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'C' }}
                />
                <Radio
                    checked={selectedValue === 'd'}
                    onChange={handleChange2}
                    value="d"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'D' }}
                />
                <Radio
                    checked={selectedValue === 'e'}
                    onChange={handleChange2}
                    value="e"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'E' }}
                    size="small"
                />
            </div>
            <div className={classes.root}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">labelPlacement</FormLabel>
                    <RadioGroup row aria-label="position" name="position" defaultValue="top">
                        <FormControlLabel
                            value="top"
                            control={<Radio color="primary" />}
                            label="Top"
                            labelPlacement="top"
                        />
                        <FormControlLabel
                            value="start"
                            control={<Radio color="primary" />}
                            label="Start"
                            labelPlacement="start"
                        />
                        <FormControlLabel
                            value="bottom"
                            control={<Radio color="primary" />}
                            label="Bottom"
                            labelPlacement="bottom"
                        />
                        <FormControlLabel value="end" control={<Radio color="primary" />} label="End" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className={classes.root}></div>
        </div>
    );
}
