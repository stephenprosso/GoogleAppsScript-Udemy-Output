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
  
   var holderArray = [];
  var HTMLTemp = HtmlService.createTemplateFromFile('index');
  
   Logger.log(values);
  var holder = '';
  for(x=0;x<values.length;x++){
    holder += values[x][0] + ' ' + values[x][1] + ' ' + values[x][2] + ' ' + values[x][3] + ' ' + values[x][4] + '<br>'; 
  }
  
   //var html = HtmlService.createHtmlOutputFromFile('index');
  HTMLTemp.data = {
    test : 'Tester',
    test1 : 'Tester_Uno'
  
  }
  
    var html = HTMLTemp.evaluate().setHeight(600).setWidth(600)
    SpreadsheetApp.getUi().showModalDialog(html, 'Da Tiiiitell!');
  
}
function myFunction2() {
  
}
