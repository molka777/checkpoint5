import React from 'react';
import './App.css';
import Profile from './Profile/Profile';
class App extends React.Component {

  state = {
    date: ''
  }
  componentDidMount() {
    setInterval(() => {
      let dateNow = new Date()
      this.setState({ date: `${dateNow.getHours()}:${dateNow.getMinutes()}` })
    }, 1000)


  }
  render() {
    return (
      <div>

        {this.state.date}
        <Profile />

      </div>
    );

  }

}

export default App;
