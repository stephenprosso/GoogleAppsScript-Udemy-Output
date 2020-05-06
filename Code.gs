function onOpen(){
     SpreadsheetApp.getUi().createMenu('Adv')
       .addItem('PopUp 1', 'myFunction1')
       .addSeparator()
       .addItem('PopUp 2', 'myFunction2')
       .addToUi();
}

function myFunction1() {
   var ss = SpreadsheetApp.getActiveSpreadsheet();
   var sheet = ss.getSheets()[0];
   var range = sheet.getDataRange();
   var values = range.getValues();
   Logger.log(values);
  var holder = '';
  for(x=0;x<values.length;x++){
    holder += values[x][0] + ' ' + values[x][1] + ' ' + values[x][2] + ' ' + values[x][3] + ' ' + values[x][4] + '<br>'; 
  }
  
   var htmlApp = HtmlService
     .createHtmlOutput(holder)
     .setTitle('Test Title')
     .setWidth(550)
     .setHeight(500);
 SpreadsheetApp.getActiveSpreadsheet().show(htmlApp);
  
}
function myFunction2() {
  
}
