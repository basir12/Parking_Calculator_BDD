$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/ParkingCalculator.feature");
formatter.feature({
  "line": 1,
  "name": "Parking Calculator",
  "description": "",
  "id": "parking-calculator",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Automating Parking calculator scenario",
  "description": "",
  "id": "parking-calculator;automating-parking-calculator-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is parking calculator",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters contact details \"\u003cLot\u003e\" \"\u003cEtime\u003e\" and \"\u003cEdate\u003e\"and\"\u003cXTime\u003e\" and \"\u003cxdate\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Verfiy the ammount",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "parking-calculator;automating-parking-calculator-scenario;",
  "rows": [
    {
      "cells": [
        "Lot",
        "Etime",
        "Edate",
        "XTime",
        "xdate"
      ],
      "line": 14,
      "id": "parking-calculator;automating-parking-calculator-scenario;;1"
    },
    {
      "cells": [
        "Economy Parking",
        "1:00",
        "6/25/1986",
        "1:00",
        "1/22/2019"
      ],
      "line": 15,
      "id": "parking-calculator;automating-parking-calculator-scenario;;2"
    },
    {
      "cells": [
        "Short-Term Parking",
        "2:00",
        "6/26/1986",
        "2:00",
        "1/22/2019"
      ],
      "line": 16,
      "id": "parking-calculator;automating-parking-calculator-scenario;;3"
    },
    {
      "cells": [
        "Long-Term Surface Parking",
        "3:00",
        "6/27/1986",
        "3:00",
        "1/22/2019"
      ],
      "line": 17,
      "id": "parking-calculator;automating-parking-calculator-scenario;;4"
    },
    {
      "cells": [
        "Long-Term Garage Parking",
        "4:00",
        "6/28/1986",
        "4:00",
        "1/22/2019"
      ],
      "line": 18,
      "id": "parking-calculator;automating-parking-calculator-scenario;;5"
    },
    {
      "cells": [
        "Valet Parking",
        "5:00",
        "6/29/1986",
        "5:00",
        "1/22/2019"
      ],
      "line": 19,
      "id": "parking-calculator;automating-parking-calculator-scenario;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Automating Parking calculator scenario",
  "description": "",
  "id": "parking-calculator;automating-parking-calculator-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is parking calculator",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters contact details \"Economy Parking\" \"1:00\" and \"6/25/1986\"and\"1:00\" and \"1/22/2019\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Verfiy the ammount",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Parking_StepDefenation.open_chrome_browser()"
});
formatter.result({
  "duration": 6022748134,
  "status": "passed"
});
formatter.match({
  "location": "Parking_StepDefenation.title_of_login_page_is_parking_calculator()"
});
formatter.result({
  "duration": 10417465,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Economy Parking",
      "offset": 29
    },
    {
      "val": "1:00",
      "offset": 47
    },
    {
      "val": "6/25/1986",
      "offset": 58
    },
    {
      "val": "1:00",
      "offset": 72
    },
    {
      "val": "1/22/2019",
      "offset": 83
    }
  ],
  "location": "Parking_StepDefenation.user_enters_contact_details_and_and_and(String,String,String,String,String)"
});
formatter.result({
  "duration": 649728878,
  "status": "passed"
});
formatter.match({
  "location": "Parking_StepDefenation.user_clicks_on_button()"
});
formatter.result({
  "duration": 407264737,
  "status": "passed"
});
formatter.match({
  "location": "Parking_StepDefenation.verfiy_the_ammount()"
});
formatter.result({
  "duration": 41676279,
  "status": "passed"
});
formatter.match({
  "location": "Parking_StepDefenation.close_the_browser()"
});
formatter.result({
  "duration": 636097064,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Automating Parking calculator scenario",
  "description": "",
  "id": "parking-calculator;automating-parking-calculator-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is parking calculator",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters contact details \"Short-Term Parking\" \"2:00\" and \"6/26/1986\"and\"2:00\" and \"1/22/2019\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Verfiy the ammount",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Parking_StepDefenation.open_chrome_browser()"
});
formatter.result({
  "duration": 4548256576,
  "status": "passed"
});
formatter.match({
  "location": "Parking_StepDefenation.title_of_login_page_is_parking_calculator()"
});
formatter.result({
  "duration": 13611047,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Short-Term Parking",
      "offset": 29
    },
    {
      "val": "2:00",
      "offset": 50
    },
    {
      "val": "6/26/1986",
      "offset": 61
    },
    {
      "val": "2:00",
      "offset": 75
    },
    {
      "val": "1/22/2019",
      "offset": 86
    }
  ],
  "location": "Parking_StepDefenation.user_enters_contact_details_and_and_and(String,String,String,String,String)"
});
formatter.result({
  "duration": 880466856,
  "status": "passed"
});
formatter.match({
  "location": "Parking_StepDefenation.user_clicks_on_button()"
});
