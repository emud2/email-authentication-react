var React = require('react');
var validator = require('email-validator');
var EmailField = require('./EmailField.jsx');
var NameField = require('./NameField.jsx');

var LeadCapture = React.createClass({
  onSubmit: function(e) {
    if(!this.refs.fieldEmail.state.valid) {
      alert('Email invalid!');
    } else {
      // send email to email host or server
      var httpRequestBody = {
        email: this.refs.fieldEmail.state.value,
        firstName: this.refs.fieldName.state.value
      };

      this.refs.fieldEmail.clear();
      this.refs.fieldName.clear();
    }
  },
  render: function() {
    return (
      <div className='col-sm-3'>
        <div className='panel panel-deafult'>
          <div className='panel-body'>
            <NameField type='First' ref='fieldName'/>
            <br />
            <EmailField ref='fieldEmail'/>
            <button className='btn btn-primary' onClick={this.onSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LeadCapture;
