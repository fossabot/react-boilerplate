import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveData } from '../actions';

class NewCrudItem extends Component {
  static propTypes = {
    saveData: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: '',
      surname: '',
      region: '',
      errors: {},
      loading: false,
      done: false,
    };
  }

  handleChange(e) {
    const currentTarget = !!this.state.errors[e.target.name];
    if (currentTarget) {
      const errors = Object.assign({}, this.state.errors);
      delete errors[e.target.name];
      this.setState({
        [e.target.name]: e.target.value,
        errors,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const errors = {};
    if (this.state.name === '') errors.name = 'cannot be empty';
    if (this.state.surname === '') errors.surname = 'cannot be empty';
    if (this.state.region === '') errors.region = 'cannot be empty';
    this.setState({ errors });
    const isValid = Object.keys(errors).length === 0;

    if (isValid) {
      const { name, surname, region } = this.state;
      this.setState({ loading: true });
      this.props.saveData({ name, surname, region }).then(
        () => { this.setState({ done: true }); },
      );
    }
  }

  render() {
    if (this.state.done) {
      return <Redirect to="/list" />;
    }

    return (
      <form className={classnames('form', { loading: this.state.loading })} onSubmit={this.handleSubmit}>
        <h1>Add New CRUD Item</h1>
        <div className={classnames('field', { error: !!this.state.errors.name })}>
          <label htmlFor="name">Name
            <input id="name" name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
          <span>{this.state.errors.name}</span>
        </div>
        <div className={classnames('field', { error: !!this.state.errors.surname })}>
          <label htmlFor="surname">Surname
            <input id="surname" name="surname" value={this.state.surname} onChange={this.handleChange} />
          </label>
          <span>{this.state.errors.surname}</span>
        </div>
        <div className={classnames('field', { error: !!this.state.errors.region })}>
          <label htmlFor="region">Region
            <input id="region" name="region" value={this.state.region} onChange={this.handleChange} />
          </label>
          <span>{this.state.errors.region}</span>
        </div>
        <button>Save</button>
      </form>
    );
  }
}

export default connect(null, { saveData })(NewCrudItem);
