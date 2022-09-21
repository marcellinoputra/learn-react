import React from 'react';

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Masukan Nama Buah Favorit' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('nama sudah di submit: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Buah:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type={'submit'} value="Submit" />
        </form>
      </div>
    );
  }
}

export default Forms;
