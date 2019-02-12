import React from 'react';
import TranslateIcon from '@material-ui/icons/Translate'
import Tooltip from '@material-ui/core/Tooltip'
import Fab from '@material-ui/core/Fab';
import Translate from '../translate';


class TranslateButton extends React.Component {

    constructor(props) {

        super(props);

        this.message = props.message;
        this.handleChangeMessage = props.handleChangeMessage;
        this.getMessage  = props.getMessage;
    }

    handleTranslateMessage = () => {
        let message = Translate(this.getMessage());
        this.handleChangeMessage(message);
    };

    render() {
        return <Tooltip title="Translate sms" aria-label="Translate sms">
            <Fab onClick={this.handleTranslateMessage} color="default" size="small">
                <TranslateIcon/>
            </Fab>
        </Tooltip>
    }
}

export default TranslateButton