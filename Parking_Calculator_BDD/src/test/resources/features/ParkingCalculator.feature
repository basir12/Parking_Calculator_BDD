Feature: Parking Calculator

Scenario Outline: Automating Parking calculator scenario

Given open chrome browser
When title of login page is parking calculator
Then user enters contact details "<Lot>" "<Etime>" and "<Edate>"and"<XTime>" and "<xdate>"
Then user clicks on button
Then Verfiy the ammount
Then Close the browser


Examples:
	|Lot                      | Etime | Edate     | XTime  | xdate     | 
  |Economy Parking          | 1:00  |6/25/1986  | 1:00   | 1/22/2019 |
	|Short-Term Parking       | 2:00  |6/26/1986	| 2:00   | 1/22/2019 |
	|Long-Term Surface Parking| 3:00  |6/27/1986  | 3:00   | 1/22/2019 |
	|Long-Term Garage Parking | 4:00  |6/28/1986  | 4:00   | 1/22/2019 |
	|Valet Parking            | 5:00  |6/29/1986  | 5:00   | 1/22/2019 |
	
	 
	                            
	