var React = require('react');
var Popover = require('./popover');
var DateUtil = require('./util/date');
var Calendar = require('./calendar');
var DateInput = require('./date_input');
var moment = require('moment');
var clone = require('clone');

var DatePicker = React.createClass({
  
  getDefaultProps: function() {
    return {
      weekdays: [moment.weekdaysMin()[0], moment.weekdaysMin()[1], moment.weekdaysMin()[2], moment.weekdaysMin()[3], moment.weekdaysMin()[4], moment.weekdaysMin()[5], moment.weekdaysMin()[6]],
      locale: 'nb',
      dateFormatCallendar: "MMMM YYYY"
    };
  },
  getInitialState: function() {
    return {
      focus: false,
      moment: moment
    };
  },
  componentWillMount: function() {
    var newMoment = clone(moment);
    newMoment.locale(this.props.locale);
    this.setState({moment:newMoment});
  },

  handleFocus: function() {
    this.setState({
      focus: true
    });
  },

  hideCalendar: function() {
    setTimeout(function() {
      this.setState({
        focus: false
      });
    }.bind(this), 0);
  },

  handleSelect: function(date) {
    this.setSelected(date);

    setTimeout(function(){
      this.hideCalendar();
    }.bind(this), 200);
  },

  setSelected: function(date) {
    this.props.onChange(date.moment());
  },

  clearSelected: function() {
    this.props.onChange(null);
  },  

  onInputClick: function() {
    this.setState({
      focus: true
    });
  },

  calendar: function() {

    if (this.state.focus) {
      return (
        <Popover>
          <Calendar
            weekdays={this.props.weekdays}
            locale={this.props.locale}
            moment={this.state.moment}
            dateFormat={this.props.dateFormatCallendar}
            selected={this.props.selected}
            onSelect={this.handleSelect}
            hideCalendar={this.hideCalendar}
            minDate={this.props.minDate}
            maxDate={this.props.maxDate}
            weekStart={this.props.weekStart} />
        </Popover>
      );
    }
  },

  render: function() {
    return (
      <div>
        <DateInput
          name={this.props.name}
          date={this.props.selected}
          locale={this.props.locale}
          moment={this.state.moment}
          dateFormat={this.props.dateFormat}
          focus={this.state.focus}
          onFocus={this.handleFocus}
          handleClick={this.onInputClick}
          handleEnter={this.hideCalendar}
          setSelected={this.setSelected}
          clearSelected={this.clearSelected}
          hideCalendar={this.hideCalendar}
          placeholderText={this.props.placeholderText} />
        {this.calendar()}
      </div>
    );
  }
});

module.exports = DatePicker;
