import React from 'react';
import axios from 'axios';

class App extends React.Component {

  state = {
    labels: [],
    data: [],
    colors: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(response => {
        this.setState({
          labels: [...new Set(response.data.map(item => item.country))],
        }, () => {
          this.setState({
            data: this.state.labels.map(label => {
              const totalSearches = response.data.filter(item => item.country === label)
                .reduce((acc, cv) => acc + cv.searches, 0)

              return totalSearches;
            }),
            colors: this.state.labels.map(() => this.dynamicColors())
          })
        })
      })
  }

  dynamicColors = () => {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);

    return `rgb(${r},${g},${b})`;
  };

  render() {
    return (
      <div className="app-wrapper">
        
      </div>
    )
  }
}

export default App;
