package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources\\features\\ParkingCalculator.feature",
                 glue = {"com.StepDefination"},
                 plugin= {"html:target/cucumber-html-report"},
                 format= {"pretty","html:test-out-put"}
                 
		
		)

public class TestRunner {

}
