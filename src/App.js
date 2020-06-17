import React from 'react';
import './style/App.css';
import Form from './Form'
import Header from './Header'
import Food from './Food'

const APP_ID = '4d14500b'
const APP_KEY = '68443ce278156eac8d6edf8021d4e585'


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      query:'chicken',
      data: []
    }
  }

  searchFood = (event) => {
    event.preventDefault()
    fetch('https://api.edamam.com/search?&q='+this.state.query+'&app_id='+APP_ID+'&app_key='+APP_KEY+'')
      .then(response => response.json())
      .then(data => this.setState({ data: data.hits }))
    this.setState({query:''})
  }

  componentDidMount() {
    fetch('https://api.edamam.com/search?&q='+this.state.query+'&app_id=' + APP_ID + '&app_key=' + APP_KEY + '')
      .then(response => response.json())
      .then(data => this.setState({ data:data.hits }))
  }


  handleChange = (event) => {
    const {value} = event.target
    this.setState({query:value})
  }

  render(){
    console.log(this.state.data)
    return (
      <div>
      <Header />
        <Form onChange={this.handleChange} value={this.state.query} searchFood={this.searchFood} />
        <div className="recipes">
            {this.state.data.map(item => (
              <Food 
                key = {item.recipe.label}
                title = {item.recipe.label}
                calories = {item.recipe.calories}
                image = {item.recipe.image}
                ingredients={item.recipe.ingredients}
              />
            ))}      
        </div>
      </div>
    )
  }
}

export default App;
