import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import App from './App.jsx';
import ToDo from './container/ToDo.jsx';
import About from './container/About.jsx';
import Contact from './container/Contact.jsx';

ReactDOM.render((
   <Router history = {browserHistory}>
      	<Route path = "/profile" component = {App}>
			<IndexRoute component = {ToDo} />
			<Route path = "about" component = {About} />
			<Route path = "contact" component = {Contact} />
      	</Route>
   	</Router>
	
), document.getElementById('app'));
