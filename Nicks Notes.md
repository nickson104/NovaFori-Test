# NovaFori Test

I took longer than expected producing this test application due to it being a learning experience regarding both implementing a SPA and using React.js.
It took an hour or so to get the newest visual studio so that the react with .netcore api template was available to work with, then an hour or two to set up the data layer and the basic GET endpoint for the tasks list.
Then I hit several stumbling points that took around 4-6 hours to resolve; sadly my lack of experience with react, and with the setup of this all in one app/server solution, that was the problem here. 
The app/server issue that was hit was that I had tried to give my POST method a specific name/route which meant I spent a lot of time trying to find out why this endpoint could never be hit - the setupProxy.js file would set up the context to lisen to /task but nothing else, therefore /task/CreateTask would never be hit.
However there was a bulk of time spent understanding react hooks, so that onclick could be leveraged, and context binding for methods to be called by said hooks.
Once I had figured this out and the Add task functionality had been added successfully; the rest was relatively simple as it was just repeating what I had just learned for creating tasks, some style changes and adding a redirect - this all took about an hour.
## Total time spent: about 5-8 hours

I have been building and running the solution via visual studios debug or run without debugging commands. 
However as this is an all in one application, it should be relatively straightforward to publish to IIS or even to AWS/Docker, with many guides on how to do this available (I have never done this before myself)

## Assupmtions
To better simulate a production system I made the assumption that a SQL server would be available, in this instance I used an MSSQL server; this allows for appropriate persistance of data - after all what use is a to do list that loses its items each time it starts up.
I made the assumption that the "all in one" template for react with .netcore web api would be acceptable for this application due to the scale of it. Ideally these would have been fully decoupled into separate projects and work independantly of one another.

## Technical design
I opted for a React SPA as not only is it ideal for an example such as this, the principles of SPA lend align very well with React, but it has also become somewhat of an industry standard in recent times therefore whilst there may potentially be a "better" technology out there for this; by developing the solution in React we make the product more maintainable in the future as there will be many individuals with the skills to work on the technology.