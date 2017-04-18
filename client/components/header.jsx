import React from 'react';
import { Link, IndexLink } from 'react-router';

class Header extends React.Component {

	render() {
      return (
         <div className="app-header">
            <h1> TODO List APP </h1>
            <div className="app-navbar">
            	<ul>
	               <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
	               <li><Link to="/about" activeClassName="active">About</Link></li>
	               <li><Link to="/contact" activeClassName="active">Contact</Link></li>
	               <li className="app-clock"><ClockTicker /></li>
            	</ul>
            </div>
         </div>
      );
   }

}

class ClockTicker extends React.Component {

	constructor() {
		super();
		
		this.state= {
			hours: '00',
			minutes: '00',
			seconds: '00'
		}

		this.setTime = this._setTime.bind(this);
	}

	componentWillMount() {
	    this.setTime();
	}

  	componentDidMount() {
		setInterval(() => {
			this.setTime();
		}, 1000);
  	}

	_setTime() {
		var currentdate = new Date();
    	var hours = currentdate.getHours();    

		if( hours >= 24 ){ hours -= 24; }
		if( hours < 0   ){ hours += 12; }

		hours = hours + "";
		if( hours.length == 1 ){ hours = "0" + hours; }

		var minutes = currentdate.getMinutes();
		minutes = minutes + "";
		if( minutes.length == 1 ){ minutes = "0" + minutes; }

		var seconds = currentdate.getSeconds();
		seconds = seconds + "";
		if( seconds.length == 1 ){ seconds = "0" + seconds; }

		this.setState({
			hours: hours,
			minutes: minutes,
			seconds: seconds
		});
	}

	render() {
      	return (
      		<div>
      			{this.state.hours}:{this.state.minutes}:{this.state.seconds}
      		</div>
      	)
   	}
}


export default Header;
