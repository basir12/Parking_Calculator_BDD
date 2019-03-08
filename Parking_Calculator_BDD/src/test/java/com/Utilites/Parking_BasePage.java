package com.Utilites;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Parking_BasePage {

	public static WebDriver driver;

	public static void startBrowswer() {
		System.setProperty("webdriver.chrome.driver", "src\\test\\resources\\Browsers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.get("http://adam.goucher.ca/parkcalc/");
		
	}

	public static void enterTextField1(By by, String value) {

		WebElement variableName = driver.findElement(by);

		variableName.sendKeys(value);

	}

	public static void gettext(By by) {

		WebElement get = driver.findElement(by);
		get.getAttribute(null);
		System.out.println(get);

	}

	public static void enterTextField(By by, String value) {

		WebElement variableName = driver.findElement(by);
		variableName.clear();

		variableName.sendKeys(value);

	}

	public static void click(By by) {

		driver.findElement(by).click();

	}

	public static void enterTextField(WebElement element, String value) {
		try {

			element.clear();
			element.sendKeys(value);
		} catch (Exception e) {

		}
	}

	public static void closeBrowser() {

		driver.quit();

	}
}
