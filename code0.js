gdjs.IntroCode = {};
gdjs.IntroCode.localVariables = [];
gdjs.IntroCode.GDScoreTextObjects1= [];
gdjs.IntroCode.GDScoreTextObjects2= [];
gdjs.IntroCode.GDScoreTextObjects3= [];
gdjs.IntroCode.GDScoreTextObjects4= [];
gdjs.IntroCode.GDScoreTextObjects5= [];
gdjs.IntroCode.GDTitleObjects1= [];
gdjs.IntroCode.GDTitleObjects2= [];
gdjs.IntroCode.GDTitleObjects3= [];
gdjs.IntroCode.GDTitleObjects4= [];
gdjs.IntroCode.GDTitleObjects5= [];
gdjs.IntroCode.GDStartTextObjects1= [];
gdjs.IntroCode.GDStartTextObjects2= [];
gdjs.IntroCode.GDStartTextObjects3= [];
gdjs.IntroCode.GDStartTextObjects4= [];
gdjs.IntroCode.GDStartTextObjects5= [];
gdjs.IntroCode.GDMoney2Objects1= [];
gdjs.IntroCode.GDMoney2Objects2= [];
gdjs.IntroCode.GDMoney2Objects3= [];
gdjs.IntroCode.GDMoney2Objects4= [];
gdjs.IntroCode.GDMoney2Objects5= [];
gdjs.IntroCode.GDMoneyValueObjects1= [];
gdjs.IntroCode.GDMoneyValueObjects2= [];
gdjs.IntroCode.GDMoneyValueObjects3= [];
gdjs.IntroCode.GDMoneyValueObjects4= [];
gdjs.IntroCode.GDMoneyValueObjects5= [];
gdjs.IntroCode.GDTitle2Objects1= [];
gdjs.IntroCode.GDTitle2Objects2= [];
gdjs.IntroCode.GDTitle2Objects3= [];
gdjs.IntroCode.GDTitle2Objects4= [];
gdjs.IntroCode.GDTitle2Objects5= [];
gdjs.IntroCode.GDTitle3Objects1= [];
gdjs.IntroCode.GDTitle3Objects2= [];
gdjs.IntroCode.GDTitle3Objects3= [];
gdjs.IntroCode.GDTitle3Objects4= [];
gdjs.IntroCode.GDTitle3Objects5= [];
gdjs.IntroCode.GDPlayObjects1= [];
gdjs.IntroCode.GDPlayObjects2= [];
gdjs.IntroCode.GDPlayObjects3= [];
gdjs.IntroCode.GDPlayObjects4= [];
gdjs.IntroCode.GDPlayObjects5= [];
gdjs.IntroCode.GDShop2Objects1= [];
gdjs.IntroCode.GDShop2Objects2= [];
gdjs.IntroCode.GDShop2Objects3= [];
gdjs.IntroCode.GDShop2Objects4= [];
gdjs.IntroCode.GDShop2Objects5= [];
gdjs.IntroCode.GDPlatformObjects1= [];
gdjs.IntroCode.GDPlatformObjects2= [];
gdjs.IntroCode.GDPlatformObjects3= [];
gdjs.IntroCode.GDPlatformObjects4= [];
gdjs.IntroCode.GDPlatformObjects5= [];
gdjs.IntroCode.GDDustParticlesObjects1= [];
gdjs.IntroCode.GDDustParticlesObjects2= [];
gdjs.IntroCode.GDDustParticlesObjects3= [];
gdjs.IntroCode.GDDustParticlesObjects4= [];
gdjs.IntroCode.GDDustParticlesObjects5= [];
gdjs.IntroCode.GDBackgroundObjects1= [];
gdjs.IntroCode.GDBackgroundObjects2= [];
gdjs.IntroCode.GDBackgroundObjects3= [];
gdjs.IntroCode.GDBackgroundObjects4= [];
gdjs.IntroCode.GDBackgroundObjects5= [];
gdjs.IntroCode.GDMenuBackObjects1= [];
gdjs.IntroCode.GDMenuBackObjects2= [];
gdjs.IntroCode.GDMenuBackObjects3= [];
gdjs.IntroCode.GDMenuBackObjects4= [];
gdjs.IntroCode.GDMenuBackObjects5= [];


gdjs.IntroCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

};gdjs.IntroCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


const valueIteratorReference4 = runtimeScene.getGame().getVariables().getFromIndex(4);
const iterableReference4 = runtimeScene.getScene().getVariables().getFromIndex(4);
if(!iterableReference4.isPrimitive()) {
for(
    const iteratorKey4 in 
    iterableReference4.getType() === "structure"
      ? iterableReference4.getAllChildren()
      : iterableReference4.getType() === "array"
        ? iterableReference4.getAllChildrenArray()
        : []
) {
    const structureChildVariable4 = iterableReference4.getChild(iteratorKey4)
    valueIteratorReference4.castTo(structureChildVariable4.getType())
    if(structureChildVariable4.isPrimitive()) {
        valueIteratorReference4.setValue(structureChildVariable4.getValue());
    } else if (structureChildVariable4.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference4.replaceChildren(structureChildVariable4.getAllChildren());
    } else if (structureChildVariable4.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference4.replaceChildrenArray(structureChildVariable4.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.variable.variablePushCopy(runtimeScene.getGame().getVariables().getFromIndex(3), runtimeScene.getGame().getVariables().getFromIndex(4));
}}
}
}

}


};gdjs.IntroCode.asyncCallback12885900 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.IntroCode.localVariables);

{ //Subevents
gdjs.IntroCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.IntroCode.localVariables.length = 0;
}
gdjs.IntroCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.IntroCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ReadResponseJSON.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2), runtimeScene.getScene().getVariables().getFromIndex(4), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (runtimeScene) => (gdjs.IntroCode.asyncCallback12885900(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.IntroCode.asyncCallback12885532 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.IntroCode.localVariables);

{ //Subevents
gdjs.IntroCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.IntroCode.localVariables.length = 0;
}
gdjs.IntroCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.IntroCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "Promo", runtimeScene.getScene().getVariables().getFromIndex(2), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (runtimeScene) => (gdjs.IntroCode.asyncCallback12885532(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.IntroCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.IntroCode.GDScoreTextObjects1, gdjs.IntroCode.GDScoreTextObjects2);

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShopTime");
}{for(var i = 0, len = gdjs.IntroCode.GDScoreTextObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDScoreTextObjects2[i].getBehavior("Text").setText("Загрузка");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
if (isConditionTrue_0) {
{gdjs.evtsExt__AdvancedHTTP__CreateRequest.func(runtimeScene, "Promo", "https://promocodes-29fa.restdb.io/rest/promocodes", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AdvancedHTTP__SetRequestMethod.func(runtimeScene, "Promo", "GET", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AdvancedHTTP__SetRequestHeader.func(runtimeScene, "application/json", "Promo", "content-type", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AdvancedHTTP__SetRequestHeader.func(runtimeScene, "6761a744518e813a68087eef", "Promo", "x-apikey", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.IntroCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDPlayObjects2Objects = Hashtable.newFrom({"Play": gdjs.IntroCode.GDPlayObjects2});
gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDShop2Objects1Objects = Hashtable.newFrom({"Shop2": gdjs.IntroCode.GDShop2Objects1});
gdjs.IntroCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.IntroCode.GDScoreTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDScoreTextObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDScoreTextObjects1[i].getBehavior("Text").getText() == "Магазин" ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDScoreTextObjects1[k] = gdjs.IntroCode.GDScoreTextObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDScoreTextObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Shop", false);
}}

}


};gdjs.IntroCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.IntroCode.GDPlayObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDPlayObjects2Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Shop2"), gdjs.IntroCode.GDShop2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDShop2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.IntroCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.IntroCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.IntroCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.IntroCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(3)) > 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.IntroCode.GDScoreTextObjects1);
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "ShopTime");
}{for(var i = 0, len = gdjs.IntroCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDScoreTextObjects1[i].getBehavior("Text").setText("Магазин");
}
}}

}


};gdjs.IntroCode.eventsList9 = function(runtimeScene, asyncObjectsList) {

};gdjs.IntroCode.eventsList10 = function(runtimeScene, asyncObjectsList) {

{


const valueIteratorReference5 = runtimeScene.getGame().getVariables().getFromIndex(4);
const iterableReference5 = runtimeScene.getScene().getVariables().getFromIndex(4);
if(!iterableReference5.isPrimitive()) {
for(
    const iteratorKey5 in 
    iterableReference5.getType() === "structure"
      ? iterableReference5.getAllChildren()
      : iterableReference5.getType() === "array"
        ? iterableReference5.getAllChildrenArray()
        : []
) {
    const structureChildVariable5 = iterableReference5.getChild(iteratorKey5)
    valueIteratorReference5.castTo(structureChildVariable5.getType())
    if(structureChildVariable5.isPrimitive()) {
        valueIteratorReference5.setValue(structureChildVariable5.getValue());
    } else if (structureChildVariable5.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference5.replaceChildren(structureChildVariable5.getAllChildren());
    } else if (structureChildVariable5.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference5.replaceChildrenArray(structureChildVariable5.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.variable.variablePushCopy(runtimeScene.getGame().getVariables().getFromIndex(3), runtimeScene.getGame().getVariables().getFromIndex(4));
}}
}
}

}


};gdjs.IntroCode.asyncCallback12894132 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.IntroCode.localVariables);

{ //Subevents
gdjs.IntroCode.eventsList10(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.IntroCode.localVariables.length = 0;
}
gdjs.IntroCode.eventsList11 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.IntroCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ReadResponseJSON.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2), runtimeScene.getScene().getVariables().getFromIndex(4), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (runtimeScene) => (gdjs.IntroCode.asyncCallback12894132(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.IntroCode.asyncCallback12893764 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.IntroCode.localVariables);

{ //Subevents
gdjs.IntroCode.eventsList11(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.IntroCode.localVariables.length = 0;
}
gdjs.IntroCode.eventsList12 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.IntroCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "Promo", runtimeScene.getScene().getVariables().getFromIndex(2), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (runtimeScene) => (gdjs.IntroCode.asyncCallback12893764(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.IntroCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
if (isConditionTrue_0) {
{gdjs.evtsExt__AdvancedHTTP__CreateRequest.func(runtimeScene, "Promo", "https://promocodes-29fa.restdb.io/rest/promocodes", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AdvancedHTTP__SetRequestMethod.func(runtimeScene, "Promo", "GET", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AdvancedHTTP__SetRequestHeader.func(runtimeScene, "application/json", "Promo", "content-type", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AdvancedHTTP__SetRequestHeader.func(runtimeScene, "6761a744518e813a68087eef", "Promo", "x-apikey", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.IntroCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShopTime");
}}

}


};gdjs.IntroCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MoneyValue"), gdjs.IntroCode.GDMoneyValueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.IntroCode.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDScoreTextObjects1[i].setTextAlignment("center");
}
}{gdjs.evtTools.storage.readStringFromJSONFile("Saves", "Saves", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(1));
}{for(var i = 0, len = gdjs.IntroCode.GDMoneyValueObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDMoneyValueObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Money").getAsNumber()));
}
}{gdjs.evtTools.storage.readStringFromJSONFile("Shop", "Shop", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)), runtimeScene.getGame().getVariables().getFromIndex(5));
}
{ //Subevents
gdjs.IntroCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.IntroCode.eventsList7(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShopTime") >= 0.2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = !(gdjs.evtTools.runtimeScene.timerPaused(runtimeScene, "ShopTime"));
isConditionTrue_0 = isConditionTrue_1;
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.IntroCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShopTime") >= 6;
if (isConditionTrue_0) {

{ //Subevents
gdjs.IntroCode.eventsList13(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDScoreTextObjects1.length = 0;
gdjs.IntroCode.GDScoreTextObjects2.length = 0;
gdjs.IntroCode.GDScoreTextObjects3.length = 0;
gdjs.IntroCode.GDScoreTextObjects4.length = 0;
gdjs.IntroCode.GDScoreTextObjects5.length = 0;
gdjs.IntroCode.GDTitleObjects1.length = 0;
gdjs.IntroCode.GDTitleObjects2.length = 0;
gdjs.IntroCode.GDTitleObjects3.length = 0;
gdjs.IntroCode.GDTitleObjects4.length = 0;
gdjs.IntroCode.GDTitleObjects5.length = 0;
gdjs.IntroCode.GDStartTextObjects1.length = 0;
gdjs.IntroCode.GDStartTextObjects2.length = 0;
gdjs.IntroCode.GDStartTextObjects3.length = 0;
gdjs.IntroCode.GDStartTextObjects4.length = 0;
gdjs.IntroCode.GDStartTextObjects5.length = 0;
gdjs.IntroCode.GDMoney2Objects1.length = 0;
gdjs.IntroCode.GDMoney2Objects2.length = 0;
gdjs.IntroCode.GDMoney2Objects3.length = 0;
gdjs.IntroCode.GDMoney2Objects4.length = 0;
gdjs.IntroCode.GDMoney2Objects5.length = 0;
gdjs.IntroCode.GDMoneyValueObjects1.length = 0;
gdjs.IntroCode.GDMoneyValueObjects2.length = 0;
gdjs.IntroCode.GDMoneyValueObjects3.length = 0;
gdjs.IntroCode.GDMoneyValueObjects4.length = 0;
gdjs.IntroCode.GDMoneyValueObjects5.length = 0;
gdjs.IntroCode.GDTitle2Objects1.length = 0;
gdjs.IntroCode.GDTitle2Objects2.length = 0;
gdjs.IntroCode.GDTitle2Objects3.length = 0;
gdjs.IntroCode.GDTitle2Objects4.length = 0;
gdjs.IntroCode.GDTitle2Objects5.length = 0;
gdjs.IntroCode.GDTitle3Objects1.length = 0;
gdjs.IntroCode.GDTitle3Objects2.length = 0;
gdjs.IntroCode.GDTitle3Objects3.length = 0;
gdjs.IntroCode.GDTitle3Objects4.length = 0;
gdjs.IntroCode.GDTitle3Objects5.length = 0;
gdjs.IntroCode.GDPlayObjects1.length = 0;
gdjs.IntroCode.GDPlayObjects2.length = 0;
gdjs.IntroCode.GDPlayObjects3.length = 0;
gdjs.IntroCode.GDPlayObjects4.length = 0;
gdjs.IntroCode.GDPlayObjects5.length = 0;
gdjs.IntroCode.GDShop2Objects1.length = 0;
gdjs.IntroCode.GDShop2Objects2.length = 0;
gdjs.IntroCode.GDShop2Objects3.length = 0;
gdjs.IntroCode.GDShop2Objects4.length = 0;
gdjs.IntroCode.GDShop2Objects5.length = 0;
gdjs.IntroCode.GDPlatformObjects1.length = 0;
gdjs.IntroCode.GDPlatformObjects2.length = 0;
gdjs.IntroCode.GDPlatformObjects3.length = 0;
gdjs.IntroCode.GDPlatformObjects4.length = 0;
gdjs.IntroCode.GDPlatformObjects5.length = 0;
gdjs.IntroCode.GDDustParticlesObjects1.length = 0;
gdjs.IntroCode.GDDustParticlesObjects2.length = 0;
gdjs.IntroCode.GDDustParticlesObjects3.length = 0;
gdjs.IntroCode.GDDustParticlesObjects4.length = 0;
gdjs.IntroCode.GDDustParticlesObjects5.length = 0;
gdjs.IntroCode.GDBackgroundObjects1.length = 0;
gdjs.IntroCode.GDBackgroundObjects2.length = 0;
gdjs.IntroCode.GDBackgroundObjects3.length = 0;
gdjs.IntroCode.GDBackgroundObjects4.length = 0;
gdjs.IntroCode.GDBackgroundObjects5.length = 0;
gdjs.IntroCode.GDMenuBackObjects1.length = 0;
gdjs.IntroCode.GDMenuBackObjects2.length = 0;
gdjs.IntroCode.GDMenuBackObjects3.length = 0;
gdjs.IntroCode.GDMenuBackObjects4.length = 0;
gdjs.IntroCode.GDMenuBackObjects5.length = 0;

gdjs.IntroCode.eventsList14(runtimeScene);
gdjs.IntroCode.GDScoreTextObjects1.length = 0;
gdjs.IntroCode.GDScoreTextObjects2.length = 0;
gdjs.IntroCode.GDScoreTextObjects3.length = 0;
gdjs.IntroCode.GDScoreTextObjects4.length = 0;
gdjs.IntroCode.GDScoreTextObjects5.length = 0;
gdjs.IntroCode.GDTitleObjects1.length = 0;
gdjs.IntroCode.GDTitleObjects2.length = 0;
gdjs.IntroCode.GDTitleObjects3.length = 0;
gdjs.IntroCode.GDTitleObjects4.length = 0;
gdjs.IntroCode.GDTitleObjects5.length = 0;
gdjs.IntroCode.GDStartTextObjects1.length = 0;
gdjs.IntroCode.GDStartTextObjects2.length = 0;
gdjs.IntroCode.GDStartTextObjects3.length = 0;
gdjs.IntroCode.GDStartTextObjects4.length = 0;
gdjs.IntroCode.GDStartTextObjects5.length = 0;
gdjs.IntroCode.GDMoney2Objects1.length = 0;
gdjs.IntroCode.GDMoney2Objects2.length = 0;
gdjs.IntroCode.GDMoney2Objects3.length = 0;
gdjs.IntroCode.GDMoney2Objects4.length = 0;
gdjs.IntroCode.GDMoney2Objects5.length = 0;
gdjs.IntroCode.GDMoneyValueObjects1.length = 0;
gdjs.IntroCode.GDMoneyValueObjects2.length = 0;
gdjs.IntroCode.GDMoneyValueObjects3.length = 0;
gdjs.IntroCode.GDMoneyValueObjects4.length = 0;
gdjs.IntroCode.GDMoneyValueObjects5.length = 0;
gdjs.IntroCode.GDTitle2Objects1.length = 0;
gdjs.IntroCode.GDTitle2Objects2.length = 0;
gdjs.IntroCode.GDTitle2Objects3.length = 0;
gdjs.IntroCode.GDTitle2Objects4.length = 0;
gdjs.IntroCode.GDTitle2Objects5.length = 0;
gdjs.IntroCode.GDTitle3Objects1.length = 0;
gdjs.IntroCode.GDTitle3Objects2.length = 0;
gdjs.IntroCode.GDTitle3Objects3.length = 0;
gdjs.IntroCode.GDTitle3Objects4.length = 0;
gdjs.IntroCode.GDTitle3Objects5.length = 0;
gdjs.IntroCode.GDPlayObjects1.length = 0;
gdjs.IntroCode.GDPlayObjects2.length = 0;
gdjs.IntroCode.GDPlayObjects3.length = 0;
gdjs.IntroCode.GDPlayObjects4.length = 0;
gdjs.IntroCode.GDPlayObjects5.length = 0;
gdjs.IntroCode.GDShop2Objects1.length = 0;
gdjs.IntroCode.GDShop2Objects2.length = 0;
gdjs.IntroCode.GDShop2Objects3.length = 0;
gdjs.IntroCode.GDShop2Objects4.length = 0;
gdjs.IntroCode.GDShop2Objects5.length = 0;
gdjs.IntroCode.GDPlatformObjects1.length = 0;
gdjs.IntroCode.GDPlatformObjects2.length = 0;
gdjs.IntroCode.GDPlatformObjects3.length = 0;
gdjs.IntroCode.GDPlatformObjects4.length = 0;
gdjs.IntroCode.GDPlatformObjects5.length = 0;
gdjs.IntroCode.GDDustParticlesObjects1.length = 0;
gdjs.IntroCode.GDDustParticlesObjects2.length = 0;
gdjs.IntroCode.GDDustParticlesObjects3.length = 0;
gdjs.IntroCode.GDDustParticlesObjects4.length = 0;
gdjs.IntroCode.GDDustParticlesObjects5.length = 0;
gdjs.IntroCode.GDBackgroundObjects1.length = 0;
gdjs.IntroCode.GDBackgroundObjects2.length = 0;
gdjs.IntroCode.GDBackgroundObjects3.length = 0;
gdjs.IntroCode.GDBackgroundObjects4.length = 0;
gdjs.IntroCode.GDBackgroundObjects5.length = 0;
gdjs.IntroCode.GDMenuBackObjects1.length = 0;
gdjs.IntroCode.GDMenuBackObjects2.length = 0;
gdjs.IntroCode.GDMenuBackObjects3.length = 0;
gdjs.IntroCode.GDMenuBackObjects4.length = 0;
gdjs.IntroCode.GDMenuBackObjects5.length = 0;


return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
