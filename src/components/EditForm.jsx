import React from 'react';
import PropTypes from 'prop-types';

class EditForm extends React.Component {
// const SimpleForm = (props) => {
  // const { handleSubmit, info } = props;
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
  }

  render() {
    const {
      name, exp, designation, skillset,
    } = this.state;

    return (
      <form>
          Name
        <div>
          <input
            name="Name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => this.handleChange('name', e.target.value)}
          />
        </div>
          Experience
        <div>
          <input
            name="experience"
            type="text"
            placeholder="Experience"
            value={exp}
            onChange={(e) => this.handleChange('exp', e.target.value)}
          />
        </div>
          Designation
        <div>
          <input
            name="designation"
            type="text"
            placeholder="Designation"
            value={designation}
            onChange={(e) => this.handleChange('designation', e.target.value)}
          />
        </div>
          Skillset
        <div>
          <input
            name="skillset"
            type="text"
            placeholder="Skillset"
            value={skillset}
            onChange={(e) => this.handleChange('skillset', e.target.value)}
          />
        </div>

        <div>
          <button type="button" onClick={(e) => this.handleUpdate(e)}>
            Submit
          </button>
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
// export default reduxForm({
//   form: 'simple', // a unique identifier for this form
// })(SimpleForm);
