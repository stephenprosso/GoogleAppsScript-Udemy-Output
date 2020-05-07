function doGet(e){
   var ss = SpreadsheetApp.openById('1uLijGV4gOi-17IbLSt-j3bUrGrK0L11zpM915RqJ7EA');
   var sheet = ss.getSheetByName('people');
   var range = sheet.getDataRange();
   var values = range.getValues();
   var holderArray = [];
   var HTMLTemp = HtmlService.createTemplateFromFile('index');
   for(x=1;x<values.length;x++){
     holderArray.push({
       "first" : values[x][0],
       "last" : values[x][1],
       "email" : values[x][2],
       "approved" : values[x][3],
       "age" : values[x][4],
     });
   }
  HTMLTemp.data = holderArray;
  var html = HTMLTemp.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME);
  return html;
}


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
  for(x=0;x<values.length;x++){
  holderArray.push({
       "first" : values[x][0],
       "last" : values[x][1],
       "email" : values[x][2],
       "approved" : values[x][3],
       "age" : values[x][4],
     });
   }
  HTMLTemp.data = holderArray;
  
   //var html = HtmlService.createHtmlOutputFromFile('index');
  
    var html = HTMLTemp.evaluate().setHeight(600).setWidth(600)
    SpreadsheetApp.getUi().showModalDialog(html, 'Da Tiiiitell!');
  
}
function myFunction2() {
  
}
