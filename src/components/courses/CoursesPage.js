import React from 'react';

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {
        title: ""
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const course = {...this.state.course, title: event.target.value};
    this.setState({ course })
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(this.state.course.title)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
        type="text"
        onChange={this.handleChange}
        value={this.state.course.title}
        />
      </form>
    )
  }
}

export default CoursesPage;
