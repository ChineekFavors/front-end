import React from 'react';

const HomePage = () => {
  return (
	    <div>
	    	<header>
	    	<h1>Home Page</h1>
	    	</header>
	    	<h3>Hello "userName"</h3>
	    	<label htmlFor="search">Search for a How-To-Guide:</label>
	    	<input type="search" id="site-search" name="search" />
	     	<button>Search</button>
	      	<section className="homePage">
	       the section area
	      </section>
	    </div>
  );
};

export default HomePage;