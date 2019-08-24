import React from 'react';

const HomePage = () => {
  return (
	    <div className="homepage">
	    	<header>
	    		<h1>Home Page</h1>
	    	</header>
	    	<h3>Hello "userName"</h3>

	    	<form className="formHomePage">
		    	<label htmlFor="create">Create a new How-To-Guide:</label>
		    	<button className="createButton" name="create">Create</button>

		    	<label htmlFor="edit">Edit a existing How-To-Guide:</label>
		    	<button className="editButton" name="edit">edit</button>

		    	<label htmlFor="search">Search for a How-To-Guide:</label>
		    	<input type="search" id="searchHomePage" name="search" />
		     	<button className="searchButton" name="search">Search</button>
	     	</form>
	      	<section className="sectionHomePage">
	       the section area for rendering
	      </section>
	    </div>
  );
};

export default HomePage;