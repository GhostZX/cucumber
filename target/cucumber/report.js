$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GET.feature");
formatter.feature({
  "line": 1,
  "name": "Get an Artist",
  "description": "Get Spotify catalog information for a single artist identified by their unique Spotify ID",
  "id": "get-an-artist",
  "keyword": "Feature"
});
formatter.background({
  "comments": [
    {
      "line": 3,
      "value": "# GET /v1/artists/{id}"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Spotify API token is ready",
  "keyword": "Given "
});
formatter.match({
  "location": "SpotifyAPIStepsDefinitions.spotify_API_token_is_ready()"
});
formatter.result({
  "duration": 111645085,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "GET valid artist",
  "description": "",
  "id": "get-an-artist;get-valid-artist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "Send a GET HTTP request to retreive an existing artist with id \"id\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "The HTTP status code in the response header is \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "The Response body contains an object in JSON format",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "The JSON object contains following keys",
  "rows": [
    {
      "cells": [
        "external_urls",
        "value"
      ],
      "line": 13
    },
    {
      "cells": [
        "followers",
        "value"
      ],
      "line": 14
    },
    {
      "cells": [
        "genres",
        "value"
      ],
      "line": 15
    },
    {
      "cells": [
        "href",
        "value"
      ],
      "line": 16
    },
    {
      "cells": [
        "id",
        "value"
      ],
      "line": 17
    },
    {
      "cells": [
        "images",
        "value"
      ],
      "line": 18
    },
    {
      "cells": [
        "name",
        "value"
      ],
      "line": 19
    },
    {
      "cells": [
        "popularity",
        "value"
      ],
      "line": 20
    },
    {
      "cells": [
        "type",
        "value"
      ],
      "line": 21
    },
    {
      "cells": [
        "uri",
        "value"
      ],
      "line": 22
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "id",
      "offset": 64
    }
  ],
  "location": "SpotifyAPIStepsDefinitions.send_a_GET_HTTP_request_to_retreive_an_existing_artist_with_id(String)"
});
formatter.result({
  "duration": 2621974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 48
    }
  ],
  "location": "SpotifyAPIStepsDefinitions.the_HTTP_status_code_in_the_response_header_is(String)"
});
formatter.result({
  "duration": 90399,
  "status": "passed"
});
formatter.match({
  "location": "SpotifyAPIStepsDefinitions.the_Response_body_contains_an_object_in_JSON_format()"
});
formatter.result({
  "duration": 40266,
  "status": "passed"
});
formatter.match({
  "location": "SpotifyAPIStepsDefinitions.the_JSON_object_contains_following_keys(DataTable)"
});
formatter.result({
  "duration": 1260459,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 3,
      "value": "# GET /v1/artists/{id}"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Spotify API token is ready",
  "keyword": "Given "
});
formatter.match({
  "location": "SpotifyAPIStepsDefinitions.spotify_API_token_is_ready()"
});
formatter.result({
  "duration": 255408,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "GET invalid artist",
  "description": "",
  "id": "get-an-artist;get-invalid-artist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "Send a GET HTTP request to retreive an non-existing artist with id \"id\"",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "The HTTP status code in the response header is \"400\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "The Response body contains an object in JSON format",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "The JSON object contains the HTTP status code \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "The JSON object contains a short description of the cause of the error",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "id",
      "offset": 68
    }
  ],
  "location": "SpotifyAPIStepsDefinitions.send_a_GET_HTTP_request_to_retreive_an_non_existing_artist_with_id(String)"
});
formatter.result({
  "duration": 311069,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 48
    }
  ],
  "location": "SpotifyAPIStepsDefinitions.the_HTTP_status_code_in_the_response_header_is(String)"
});
formatter.result({
  "duration": 104610,
  "status": "passed"
});
formatter.match({
  "location": "SpotifyAPIStepsDefinitions.the_Response_body_contains_an_object_in_JSON_format()"
});
formatter.result({
  "duration": 204089,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 47
    }
  ],
  "location": "SpotifyAPIStepsDefinitions.the_JSON_object_contains_the_HTTP_status_code(String)"
});
formatter.result({
  "duration": 105005,
  "status": "passed"
});
formatter.match({
  "location": "SpotifyAPIStepsDefinitions.the_JSON_object_contains_a_short_description_of_the_cause_of_the_error()"
});
formatter.result({
  "duration": 52503,
  "status": "passed"
});
formatter.uri("PUT.feature");
formatter.feature({
  "line": 1,
  "name": "Follow Artists or Users",
  "description": "Add the current user as a follower of one or more artists or other Spotify users",
  "id": "follow-artists-or-users",
  "keyword": "Feature"
});
formatter.background({
  "comments": [
    {
      "line": 3,
      "value": "#PUT /v1/me/following"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Spotify API token is ready",
  "keyword": "Given "
});
formatter.match({
  "location": "SpotifyAPIStepsDefinitions.spotify_API_token_is_ready()"
});
formatter.result({
  "duration": 89215,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "PUT follow a valid artist",
  "description": "",
  "id": "follow-artists-or-users;put-follow-a-valid-artist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "Send a PUT HTTP request to follow an existing artist with id \"id\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "The HTTP status code in the response header is \"204\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "The Response body is empty",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "id",
      "offset": 62
    }
  ],
  "location": "SpotifyAPIStepsDefinitions.send_a_PUT_HTTP_request_to_follow_an_existing_artist_with_id(String)"
});
formatter.result({
  "duration": 279093,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "204",
      "offset": 48
    }
  ],
  "location": "SpotifyAPIStepsDefinitions.the_HTTP_status_code_in_the_response_header_is(String)"
});
formatter.result({
  "duration": 122769,
  "status": "passed"
});
formatter.match({
  "location": "SpotifyAPIStepsDefinitions.the_Response_body_is_empty()"
});
formatter.result({
  "duration": 61582,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 3,
      "value": "#PUT /v1/me/following"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Spotify API token is ready",
  "keyword": "Given "
});
formatter.match({
  "location": "SpotifyAPIStepsDefinitions.spotify_API_token_is_ready()"
});
formatter.result({
  "duration": 236065,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "PUT follow an invalid artist",
  "description": "",
  "id": "follow-artists-or-users;put-follow-an-invalid-artist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "Send a PUT HTTP request to follow a non-existing artist with id \"id\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "The HTTP status code in the response header is \"400\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "The Response body contains an object in JSON format",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "The JSON object contains the HTTP status code \"400\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "The JSON object contains a short description of the cause of the error",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "id",
      "offset": 65
    }
  ],
  "location": "SpotifyAPIStepsDefinitions.send_a_PUT_HTTP_request_to_follow_a_non_existing_artist_with_id(String)"
});
formatter.result({
  "duration": 116058,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 48
    }
  ],
  "location": "SpotifyAPIStepsDefinitions.the_HTTP_status_code_in_the_response_header_is(String)"
});
formatter.result({
  "duration": 249881,
  "status": "passed"
});
formatter.match({
  "location": "SpotifyAPIStepsDefinitions.the_Response_body_contains_an_object_in_JSON_format()"
});
formatter.result({
  "duration": 71845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 47
    }
  ],
  "location": "SpotifyAPIStepsDefinitions.the_JSON_object_contains_the_HTTP_status_code(String)"
});
formatter.result({
  "duration": 108558,
  "status": "passed"
});
formatter.match({
  "location": "SpotifyAPIStepsDefinitions.the_JSON_object_contains_a_short_description_of_the_cause_of_the_error()"
});
formatter.result({
  "duration": 48555,
  "status": "passed"
});
});