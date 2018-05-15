package com.spotify.runners;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith (Cucumber.class)
@CucumberOptions(
		features = "Features",
		glue = "com.spotify.stepdefs"		
		)
public class TestRunner {
	
	@BeforeClass
	public static void beforeClass() {
		System.out.println("******************************************");		
	}
	
	@AfterClass
	public static void afterClass() {
		System.out.println("******************************************");		
	}

}
