import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'

const Landing = () => <h2>Landing</h2>
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header /> {/* how to show a component at all times */}
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;