# First Job Finder Application

## User Stories

### As a user, I want to log into the application

Done when:

* The user can enter a correct username and password
* The user receives an error when either username or password are left blank
* The the login fields with errors are indicated in the UI
* The user cannot enter an incorrect username and password
* The user is notified that an incorrect username / password combination has been entered

### As a user, I want to view my dashboard screen after I have correctly entered login information

Done when:

* The user is shown the application dashboard upon successful login

### As a user, I want to search for jobs

Done when:

* The user can navigate to the job search page
* The user can enter any number of space-separated keywords into the search box
* The job search results are displayed in a grid below the job search box, with 10 records per page
* A status message indicating that no search has been performed appears below the search box until the user submits their search
* A status message indicating that no search results were present for the specified search terms

### As a user, I want to filter my job search results

Done when:

* The user can click the **X** on a job's keyword to remove all jobs containing that keyword from the job search results

### As a user, I want to sort my job search results

Done when:

* The user can click on a column heading in the job search results to sort by the following job summary fields: post date, company, position name

### As a user, I want to save jobs from my job search results

Done when:

* If the job is not already in the user's *Saved Jobs* collection, the user can click on a job's *Save for later* button, and add the job to their *Saved Jobs* collection

### As a user, I want to view a job's details

Done when:

* The user can navigate to a job's details page
* The user can view all of the job's details on the job details page
* The user can click on a job's *Save for later* button to add it to their *Saved Jobs* collection if the job is not already in their collection.
* The user can tell if the job is already in their *Saved Jobs* collection

### As a system, I want to provide guidance to users viewing a job's details

Done when:

* The system displays a component that will load and display job application guidance based upon the job's keywords
* The system indicates that the guidance component is currently loading data
* The system displays the loaded guidance data inside of the guidance component

### As a user, I want to see the number of jobs in my Saved Jobs collection next to the *Saved Jobs* navigation item

Done when:

* The user is shown the number of saved jobs as a pill-button next to the *Saved Jobs* navigation item

### As a user, I want to view the list of my saved jobs

Done when:

* The user can navigate to the **Saved Jobs** page
* The user can see their saved jobs collection
* The user can sort their saved jobs by: post date, company, position name
* The user can view 10 records at a time, or proceed to the next/previous page of saved jobs

### As a user, I want to remove a job from my list of saved jobs

Done when:

* The user can click the *Remove saved job* button on the **Saved Jobs** screen

### As a user, I want to view a saved job's details

Done when:

* The user can navigate to the **Job Details** screen from the **Saved Jobs** screen