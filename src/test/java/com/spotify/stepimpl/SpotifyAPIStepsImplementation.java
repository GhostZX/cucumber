package com.spotify.stepimpl;

import java.util.Map;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class SpotifyAPIStepsImplementation {

	private RequestSpecification request;
    private Response response;
    private String baseUri;
    private String api_token;
    private String artist_id;

    
    public SpotifyAPIStepsImplementation() {
    	//@TODO: Init system, automatic auth token to avoid expirations
    	//https://beta.developer.spotify.com/documentation/ios-sdk/guides/token-swap-and-refresh/
    	baseUri = "https://api.spotify.com";
    	api_token = "BQA_XFtgmkkR0E9Pjf23wHia2iPt8Xe0wqievNIfeIwVeTs0oyBqgA94HHj35LSdaTAAhxeb8u_JvFTa4iT-woSzXO4qYRJ0QWwS4oUJ2GSQ7JyESIA4UZr4kTVFNVEGtiIl_QhM2Qfm";
		artist_id = "0OdUWJ0sBjDrqHygGUXeCF"; //Band of Horses
    	request = RestAssured.with();
	}
    
	public void RetreiveArtist(boolean real_artist){
		
		String uri_path = "/v1/artists/";		
		try {
			request.given()
				.header("Authorization", "Bearer "+ api_token)
            	//.contentType(ContentType.JSON)
            	.baseUri(baseUri);
			
			String id = artist_id;
			if (real_artist == false){
				id = ""; //invalid ID
			}
					
			response = request.when().get(uri_path + id);
			//System.out.println("Response: " + response.prettyPrint());
			
		}		
		catch (Exception e){
			if(e.getMessage().contains("Connection refused")){System.out.println("Web application is not running.");return;}
			else{System.out.println("Unknown exception while invoking this request.");e.printStackTrace();}return;
		}
	}
	
	public void CheckResponse(int response_code) {
		response.then().statusCode(response_code);
	}
	
	public void CheckBodyJson() {
		response.then().contentType(ContentType.JSON);
	}	
	
	public void CheckJsonFields(Map<String,String> json_fields) {
		for (Map.Entry<String, String> field : json_fields.entrySet()) {
			assert response.body().jsonPath().get(field.getKey()) != null;
		}		
	}
	
	public void CheckBodyEmpty() {
		assert response.body().asString() == "";
	}

	public void CheckJsonFieldContainsErrorInfo() {
		JsonPath jsonPath = response.jsonPath();
		//System.out.println(jsonPath.get("error"));
		assert jsonPath.get("error") != null;
	}

	public void FollowArtist(boolean real_artist) {
		String uri_path = "/v1/me/following";		
		try {
			
			String id = artist_id;
			if (real_artist == false){
				id = ""; //invalid ID
			}
			
			request.given()
				.header("Authorization", "Bearer "+ api_token)
            	.baseUri(baseUri)
            	.contentType(ContentType.JSON)
				.param("type", "artist")
				.param("ids", id);
	
			response = request.when().put(uri_path + "");
			//System.out.println("Response: " + response.prettyPrint());
			
		}		
		catch (Exception e){
			if(e.getMessage().contains("Connection refused")){System.out.println("Web application is not running.");return;}
			else{System.out.println("Unknown exception while invoking this request.");e.printStackTrace();}return;
		}		
	}

	
}
