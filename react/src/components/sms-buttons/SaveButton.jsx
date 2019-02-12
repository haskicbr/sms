import React from 'react';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import lightGreen from '@material-ui/core/colors/lightGreen';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import Tooltip from '@material-ui/core/Tooltip'

const styles = theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    wrapper: {
        margin: theme.spacing.unit,
        position: 'relative',
    },
    buttonSuccess: {
        backgroundColor: lightGreen[500],
        '&:hover': {
            backgroundColor: lightGreen[700],
        },
    },
    fabProgress: {
        color: lightGreen[500],
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
    },
    buttonProgress: {
        color: lightGreen[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },

    absolute: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 3,
    },
});

class SaveButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            success: false,
        };


        console.log(this.props.handleSaveMessage)

        this.handleSaveMessage = props.handleSaveMessage;
    }


    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    handleButtonClick = () => {
        this.setState({loading: true});

        this.handleSaveMessage().finally(() => {
            this.setState({loading: false});
        })
    };

    render() {
        const {loading, success} = this.state;
        const {classes} = this.props;
        const buttonClassName = classNames({
            [classes.buttonSuccess]: success,
        });

        return (

            <div className={classes.wrapper}>
                <Tooltip title="Save sms" aria-label="Save sms">
                    <Fab disabled={success} color="primary" className={buttonClassName}
                         onClick={this.handleButtonClick}
                         size="small"
                    >
                        {success ? <CheckIcon color="primary"/> : <SaveIcon/>}
                    </Fab>
                </Tooltip>
                {loading && <CircularProgress size={40} className={classes.fabProgress}/>}
            </div>

        );
    }
}

export default withStyles(styles)(SaveButton);