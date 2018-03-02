import React, { Component } from 'react'
import 'flexboxgrid/dist/flexboxgrid.css'
import './NowServing.css'

class NowServing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1
    };
    this.servingNext = this.servingNext.bind(this);
    this.reset = this.reset.bind(this);
  }

  servingNext() {
    this.setState({
      number: this.state.number + 1
    })
  }

  reset() {
    this.setState({
      number: 1
    })
  }

  render() {
    return (
        <div className="outer-box">
          <div className="row">
            <div className="col-xs-6">
              <div className="row now-serving">
                <div className="col-xs">
                  <div className="row">
                    <div className="col-xs">
                      <div className="row center-xs now-serving-header">NOW SERVING</div>
                      <div className="row center-xs now-serving-number">{this.state.number}</div>
                    </div>
                  </div>
                  <div className="row center-xs">
                    <a className="button" onClick={this.servingNext}><span>Next</span></a>
                    <a className="button" onClick={this.reset}><span>Reset</span></a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
    );
  }
}

export default NowServing;