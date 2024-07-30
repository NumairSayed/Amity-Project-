import React from 'react'
import { Router, Route, useParams } from 'react-router-dom';
import Form from '../components/doctor/Form';

function AddUID() {
    let { userId } = useParams();
  return (
    <div>
         <Router>
      <Switch>
        <Route path="/dynamic/:_id" component={Form} />
      </Switch>
    </Router>
    </div>
  )
}

export default AddUID