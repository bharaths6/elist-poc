import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    const initInfo = {
      name: '', exp: '', designation: '', skillset: '',
    };
    this.state = Object.keys(props.info).length ? props.info : initInfo;
  }

  handleChange(key, value) {
    this.setState({ [key]: value });
  }

  handleUpdate(e) {
    const { userAction } = this.props;
    userAction(this.state);
    e.preventDefault();
    window.history.go(-1);
  }

  render() {
    const {
      name, exp, designation, skillset,
    } = this.state;

    return (
      <form>
        <div>
          <FormControl>
            <InputLabel htmlFor="my-input">Name</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              value={name}
              onChange={(e) => this.handleChange('name', e.target.value)}
            />
          </FormControl>
        </div>
        <div>
          <FormControl>
            <InputLabel htmlFor="my-input">Experience</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              value={exp}
              onChange={(e) => this.handleChange('exp', e.target.value)}
            />
          </FormControl>
        </div>
        <div>
          <FormControl>
            <InputLabel htmlFor="my-input">Designation</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              value={designation}
              onChange={(e) => this.handleChange('designation', e.target.value)}
            />
          </FormControl>
        </div>
        <div>
          <FormControl>
            <InputLabel htmlFor="my-input">Skillset</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              value={skillset}
              onChange={(e) => this.handleChange('skillset', e.target.value)}
            />
          </FormControl>
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => this.handleUpdate(e)}
          >
            Save
          </Button>
        </div>
      </form>
    );
  }
}

EditForm.defaultProps = {
  info: {},
};
EditForm.propTypes = {
  info: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  userAction: PropTypes.func.isRequired,
};

export default EditForm;
