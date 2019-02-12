import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {SaveButton, TranslateButton} from '../sms-buttons';
import {Input} from '../sms-inputs';
import {List} from '../sms-list';
import Calculate from '../calculate';
import Chip from '@material-ui/core/Chip';
import axios from 'axios';

const styles = theme => ({
    ButtonsRoot: {
        display: 'flex',
        alignItems: 'center',
    },
    buttonsWrapper: {
        margin: theme.spacing.unit,
        position: 'relative',
    },

    root: {
        flexGrow: 1,
    },
});

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            message: '',
            messageLength: 0,
            messageMaxLength: 70,
            messageParts: 0,
            messages: []
        };
    };

    componentDidMount() {
        this.setApiMessages();
    }


    handleChangeMessage = (message) => {

        let smsInfo = Calculate(message);

        this.setState({
            ...this.state,
            ...smsInfo,
            message: message,
        })
    };

    getMessage = () => this.state.message;

    setApiMessages = async () => {
        return await axios.get('/sms')
            .then((response) => {
                this.setState({
                    messages: response.data
                })
            });
    };

    saveMessage = async () => {
        let message = this.getMessage();
        let messages = this.state.messages;
        return await axios.post('/sms', {message: message}).then((response) => {

            console.log(2);
            this.setState({
                messages: [{...response.data}, ...messages]
            })
        })
    };

    render() {

        const {classes} = this.props;

        let smsInfo = <Chip
            label={`Sms length: ${this.state.messageLength} /  ${this.state.messageMaxLength}  sms parts: ${this.state.messageParts}`}
            className={classes.chip} variant="outlined"/>;

        return (
            <div className={classes.root}>

                <Grid container>
                    <Grid item xs={12} md={4}>

                    </Grid>

                    <Grid item xs={12} md={8}>
                        <div className={classes.ButtonsRoot}>
                            <Input getMessage={this.getMessage} handleChangeMessage={this.handleChangeMessage}/>
                            <TranslateButton getMessage={this.getMessage}
                                             handleChangeMessage={this.handleChangeMessage}/>
                            <SaveButton handleSaveMessage={this.saveMessage}/>
                        </div>

                        <div className={classes.ButtonsRoot}>
                            {smsInfo}
                        </div>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={12} md={4}>

                    </Grid>
                    <Grid item xs={12} md={8}>
                        <List messages={this.state.messages}/>
                    </Grid>
                </Grid>

            </div>
        );
    }
}

export default withStyles(styles)(Main);