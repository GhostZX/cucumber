package com.spotify.stepdefs;

import java.util.Map;
import com.spotify.stepimpl.SpotifyAPIStepsImplementation;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class SpotifyAPIStepsDefinitions {
	
	SpotifyAPIStepsImplementation StepImplementation = null;
	
	
	@Given("^Spotify API token is ready$")
	public void spotify_API_token_is_ready(){
		StepImplementation = new SpotifyAPIStepsImplementation();
		System.out.println("Spotify API token is ready");
	}

	@Given("^Send a GET HTTP request to retreive an existing artist$")
	public void send_a_GET_HTTP_request_to_retreive_an_existing_artist_with_id(){
		System.out.println("Send a GET HTTP request to retreive an artist");
		StepImplementation.RetreiveArtist(true);
	}
	
	@Then("^The HTTP status code in the response header is (\\d+)$")
	public void the_HTTP_status_code_in_the_response_header_is(int response_code){
		StepImplementation.CheckResponse(response_code);
	}
	
	@And("^The Response body contains an object in JSON format$")
	public void the_Response_body_contains_an_object_in_JSON_format(){
		StepImplementation.CheckBodyJson();
	}

	@And("^The JSON object contains following keys$")
	public void the_JSON_object_contains_following_keys(Map<String,String> json_fields){
		StepImplementation.CheckJsonFields(json_fields);
		System.out.println("The JSON response contains all the keys");
	}

	@Given("^Send a GET HTTP request to retreive a non-existing artist$")
	public void send_a_GET_HTTP_request_to_retreive_an_non_existing_artist_with_id(){
		System.out.println("Send a GET HTTP request to retreive a non_existing artist");
		StepImplementation.RetreiveArtist(false);
	}

	@And("^The JSON object contains error information$")
	public void the_JSON_object_contains_the_HTTP_status_code(){
		StepImplementation.CheckJsonFieldContainsErrorInfo();
		System.out.println("The JSON response contains error info");
	}

	@Given("^Send a PUT HTTP request to follow an existing artist$")
	public void send_a_PUT_HTTP_request_to_follow_an_existing_artist(){
		System.out.println("Send a PUT HTTP request to follow an existing artist");
		StepImplementation.FollowArtist(true);
	}

	@And("^The Response body is empty$")
	public void the_Response_body_is_empty(){
		StepImplementation.CheckBodyEmpty();
	}

	@Given("^Send a PUT HTTP request to follow a non-existing artist$")
	public void send_a_PUT_HTTP_request_to_follow_a_non_existing_artist(){
		System.out.println("Send a PUT HTTP request to follow a non-existing artist");
		StepImplementation.FollowArtist(false);
	}	
		
}
