import React from 'react';

import style from './homePage.scss';

const HomePage = () => {
  return (
	    <div className="homepage">
	    	
	    	<header className="headerHomePage">
	    		<h1>Home Page</h1>
	    	</header>
	    	<h3 className="h3-hello">Hello "userName"</h3>

	    	<div className="formHomePage">
		    	<label htmlFor="create">Create a new How-To-Guide:</label>
		    	<button className="createButton" type="button" >Create</button>

		    	<label htmlFor="edit">Edit a existing How-To-Guide:</label>
		    	<button className="editButton" type="button">edit</button>

		    	<label htmlFor="search">Search for a How-To-Guide:</label>
		     	<button className="searchButton" type="button">Search</button>
	     	</div>

	      	<section className="sectionHomePage">
	       the section area for rendering
	      </section>
	    </div>
  );
};

export default HomePage;