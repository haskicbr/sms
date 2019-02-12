import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
});

class SmsList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <List className={classes.root}>

                {this.props.messages.map((message, i) => {
                    return (<ListItem key={i} alignItems="flex-start">
                        <ListItemText
                            primary={message.message}
                            secondary={
                                <React.Fragment>
                                    <Typography component="span" className={classes.inline} color="textPrimary">

                                    </Typography>
                                    {message.created_at}
                                </React.Fragment>
                            }
                        />
                    </ListItem>)
                })}

            </List>
        );
    }
}

export default withStyles(styles)(SmsList);