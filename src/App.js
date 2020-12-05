import React, { Component } from 'react';
import './App.css';
import Chart from './components/Chart';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
   // this.getchartData(); // this should be this.getChartData();
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['Positive', 'Negative', '', '', '', ''],
        datasets:[
          {
            label:'Sentiment Analysis',
            data:[
              177594,
              150457
            ],
            backgroundColor:[
              'rgba(255, 0, 0, 0.6)',
              'rgba(222, 125, 300, 0.6)'
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Chart chartData={this.state.chartData} location="twitter.csv file" legendPosition="bottom"/>
      </div>
    );
  }
}

export default App;
