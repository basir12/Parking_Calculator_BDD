package com.StepDefination;

import static org.testng.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import com.Utilites.Parking_BasePage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Parking_StepDefenation extends Parking_BasePage {

	

	@Given("^open chrome browser$")
	public void open_chrome_browser() {
		Parking_BasePage.startBrowswer();
	}

	@When("^title of login page is parking calculator$")
	public void title_of_login_page_is_parking_calculator() {
		
		
	    String title =driver.getTitle();
		System.out.println("This is the Page title:\t"+title );

	}

	@Then("^user enters contact details \"([^\"]*)\" \"([^\"]*)\" and \"([^\"]*)\"and\"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_contact_details_and_and_and(String arg1, String arg2, String arg3, String arg4,
			String arg5) {

		Parking_BasePage.enterTextField1(By.id("Lot"), arg1);
		Parking_BasePage.enterTextField(By.id("EntryTime"), arg2);
		Parking_BasePage.enterTextField(By.id("EntryDate"), arg3);
		Parking_BasePage.enterTextField(By.id("ExitTime"), arg4);
		Parking_BasePage.enterTextField(By.id("ExitDate"), arg5);

	}

	@Then("^user clicks on button$")
	public void user_clicks_on_button() {

		Parking_BasePage.click(By.xpath("//form[@name='Calculator']/input[@name='Submit']"));

	}

	@Then("^Verfiy the ammount$")
	public void verfiy_the_ammount() {
		
		System.out.println("Hello");
		WebElement verfiyamont= driver.findElement(By.xpath("(//tr[td/div[contains(.,'COST')]]/td//b)[1]"));
		String getcost =verfiyamont.getText();
		System.out.println("This is the Total Parking amount of your car:"+getcost);
		
	

	}

	@Then("^Close the browser$")
	public void close_the_browser() {
    Parking_BasePage.closeBrowser();
	}

}
