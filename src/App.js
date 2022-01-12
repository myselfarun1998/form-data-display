import React from 'react';
export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      city: '',
      phone: ' ',
      age: ' ',
      show: false,
    };
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitCheck = (e) => {
    e.preventDefault();
    if (!this.state.name) {
      alert(' name field is empty.');
    } else if (this.state.phone.length < 10 || !this.state.phone) {
      alert('Phone number is not long enough.');
    } else if (!this.state.city) {
      alert('Enter the city.');
    } else if (!this.state.age) {
      alert('Enter the age.');
    } else {
      alert(
        `         name=${this.state.name}
         phone =${this.state.phone}
         city=${this.state.city}
         age=${this.state.age} `
      );
      this.setState({
        show: true,
      });
    }
  };

  render() {
   
    return (
      <>
      <h2> Form Info Display Task</h2>
        <form onSubmit={this.submitCheck}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={this.onChange}
            placeholder="enter the name"
          />
          <br />
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            onChange={this.onChange}
            placeholder="enter the Phone Number"
          />
          <br />
          <label>city</label>
          <input
            className="txt"
            type="text"
            name="city"
            placeholder="enter the city"
            onChange={this.onChange}
          />
          <br />
          <label>Age</label>
          <input
            className="txt"
            type="text"
            name="age"
            placeholder="enter the age"
            onChange={this.onChange}
          />

          <br />
          <button type="submit">submit</button>
        </form>

        {this.state.show ? (
          <div className="border">
            <p>Name: {this.state.name}</p>
            <p>Phone: {this.state.phone}</p>
            <p>city: {this.state.city}</p>
            <p>Age: {this.state.age}</p>

            <div>{this.myfun}</div>
          </div>
        ) : (
          ''
        )}
      </>
    );
  }
}
