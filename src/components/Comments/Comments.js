import React, { Component } from 'react';
import { connect } from "react-redux";
import './Comments.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing(),
    },
    input: {
        display: 'none',
    },
});

class Comments extends Component{

  state = {
      feedback: {
          feels: '',
          understanding: '',
          support: '',
          comments: ''
      }
  }

// handleSubmit function to handle user's input and send it to redux
  handleSubmit = (event) => {
      event.preventDefault();
      console.log('Adding comments', this.state.comments);
      this.props.dispatch({type: 'COMMENTS', payload: this.state.comments})
      this.props.history.push('/thankyou');
  }

  // handleChange function to handle event of input fields incoming change
  handleChange = (event) => {
      this.setState({
          comments: event.target.value
      })
  }

    render(){
        const classes = this.props;
        return(
            <>
            <h1>Please provide any comments you have about today.</h1>
            <form>
                {/* <textarea rows="5" cols="80" id="TITLE">
                </textarea> */}
                <br></br>
                {/* added textarea instead of input in order to create a larger text box */}
                    <textarea 
                        rows="5" 
                        cols="80" 
                        id="TITLE"
                        className="textboxid" 
                        type="text" 
                        placeholder="Insert additional comments here"
                        value={this.comments} 
                        onChange={this.handleChange}>
                    </textarea>
                    &nbsp;
                <Button
                    onClick={(event) => this.handleSubmit(event)} 
                    variant="contained" 
                    className={classes.button}>
                        Next
                </Button>
                {/* <button onClick={(event) => this.handleSubmit(event)}>NEXT</button> */}
            </form>
            </>
        )
    }
}

const putStateOnProps = (reduxState) => ({reduxState});
export default connect(putStateOnProps)(withStyles(styles)(Comments));