import React from 'react';
import { fetchBilloinares } from './api'
import { BillionaireList } from './BillionaireList'

export default class App extends React.Component {

  state = {
    billionaires: [],
  }

  async componentDidMount() {
    this.setState({
      billionaires: await fetchBilloinares(),
    })
  }

  render() {
    return (
      <div>
        <BillionaireList billionaires={this.state.billionaires} />
      </div>
    )
  }
}