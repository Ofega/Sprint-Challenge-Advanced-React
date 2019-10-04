import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { PieChart } from './components/PieChart';


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
      <AppWrapper>

        <PieChart 
          labels={this.state.labels} 
          data={this.state.data} 
          colors={this.state.colors} 
        />
      </AppWrapper>
    )
  }
}

export default App;

const AppWrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, .9);

  .app-header {
    color: white;
    text-align: center;
    margin-bottom: 5rem;
    max-width: 500px;

    h2 {
      margin-bottom: .5rem;
      font-size: 3.5rem;
    }

    p {
      font-size: 1.7rem;
    }
  }
`