import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },

    chip: {
        margin: theme.spacing.unit,
    },

    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

class Input extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        smsText: '',
        messageParts: 0,
        messageLength: 0,
        messageMaxLength: '',
    };

    handleChange = event => {

        let value = event.target.value;
        this.props.handleChangeMessage(value);
    };

    render() {
        const {classes} = this.props;


        return (
            <>

            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    autoFocus={true}
                    rows="4"
                    id="outlined-multiline-flexible"
                    label="Sms text"
                    multiline
                    fullWidth={true}
                    value={this.props.getMessage()}
                    onChange={this.handleChange}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
            </form>

            </>
        );
    }
}


export default withStyles(styles)(Input);