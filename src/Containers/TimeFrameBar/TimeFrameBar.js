import React, { Component } from 'react';
import './TimeFrameBar.scss';
import { updateTimeFrame } from '../../Actions/index';
import { connect } from 'react-redux';

export class TimeFrameBar extends Component {

  handleClick = e => {
    e.preventDefault();
    this.props.updateTimeFrame(e.target.id);
  }

  render() {
    const oneHourClass = this.props.timeFrame === '1h' ? 'active' : 'inactive';
    const oneDayClass = this.props.timeFrame === '1d' ? 'active' : 'inactive';
    const oneMonthClass = this.props.timeFrame === '30d' ? 'active' : 'inactive';
    const oneYearClass = this.props.timeFrame === '365d' ? 'active' : 'inactive';
    return (
      <table id='time-frame-table'>
        <tbody>
          <tr>
            <td className={oneHourClass} onClick={this.handleClick} id='1h'>1 HR</td>
            <td className={oneDayClass} onClick={this.handleClick} id='1d'>1 D</td>
            <td className={oneMonthClass} onClick={this.handleClick} id='30d'>30 D</td>
            <td className={oneYearClass} onClick={this.handleClick} id='365d'>1 YR</td>
          </tr>
        </tbody>
      </table>
    );
  };
};

export const mapDispatchToProps = dispatch => ({
  updateTimeFrame: timeFrame => dispatch( updateTimeFrame(timeFrame)),
});

export const mapStateToProps = state => ({
  timeFrame: state.timeFrame,
});

export default connect(mapStateToProps, mapDispatchToProps)(TimeFrameBar);