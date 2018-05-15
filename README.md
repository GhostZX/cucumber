# cucumber
REST API using Java and Cucumber
We are going to use the Spotify public API, that is defined at https://developer.spotify.com/

## Implementation Steps
The endpoints in scope are:
- GET /v1/artists/{id}
- PUT /v1/me/following

1. Design the scenarios based on Gherkin.

2. The API is authenticated, so the automated tests need to use a token generated at the Spotify console (https://beta.developer.spotify.com/console/put-following/)

3. Implement the scenarios using REST Assured library
