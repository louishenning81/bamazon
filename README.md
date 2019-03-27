# bamazon - your own command line shopping site

This is Louis Henning's bamazon homework assignment.

In this assignment, we're called to create a mySQL data schema, create items to update the table that you created, and then reference that table in a command line store called bamazon.   In this repository, I created files for the manager view and supervisor view, but didn't have time to create those different views.  Please ignore these.  Beyond this, for the customer view, I completed the assignment and included the giphy below to outline how I did this.

I had some issues when completing this assignment with the following:
1. debugging the sql query that updates the stock quantity.  This should have been straight forward but I couldn't get it to work until I created objects inside of an array.  I need to look further at how to do this.
2. getting the table to overwrite with the new quantity.  I was having issues with the new table data appending to the old table because I initially had created the table as a global variable.


<https://media.giphy.com/media/euMbIigzj3q64qd86A/giphy.gif>