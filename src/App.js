import React from 'react';
import { fetchBilloinares } from './api'
import { BillionaireList } from './BillionaireList'
import SwitchButton  from './SwitchButton'

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
        <h1>Top 20 of Billionaire in Thailand</h1>
        <BillionaireList billionaires={this.state.billionaires} />
        <SwitchButton />
      </div>
    )
  }
}