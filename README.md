# Client Side Programming 
A selection of beers from the BreweryDB API. The user can filter them by name and by type and view the details of each beer. 
<br><br>
Built with Node, Express and React.

### Prerequisites
<strong>server</strong><br>
.env file<br>
API_KEY=[your_api_key]<br>
CLIENT_URL=http://localhost:3000/<br>
PORT=5000<br>

<strong>client</strong><br>
.env.development<br>
REACT_APP_BASE_URL=http://localhost:5000/


## Server
I created a minimal Node and Express server for caching the data from the API. The data are stored for one day in order to keep the application synchronized with the API if any change in data should occur. There are two endpoints: one for getting all the beers and one for getting the details of a beer. 
The <em>getBeerStyles</em> function send in an alphabetically order the types of beers available. I decided to write it here in order to keep in the frontend just what is really needed.

## Client
The idea here is to keep the logic and the state of the application in the higher component. There is an array of beers which change according to the selection of the user and one <em>fullBeersArray</em> which helps in resetting all the beers when needed. When the user view the details of a beer and goes back to the homepage what he typed or selected is still there and the filtering is still active, that's the reason of the <em>searchInput</em> and <em>styleSelection</em> in the state. The <em>processSelection</em> function make both filters working gracefully together.

## User Experience
The app is responsive and the style wants to be clean and elegant. The changes in shadows and buttons size gives to the app a feeling of aliviness.


