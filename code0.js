gdjs.IntroCode = {};
gdjs.IntroCode.localVariables = [];
gdjs.IntroCode.GDScoreTextObjects1= [];
gdjs.IntroCode.GDScoreTextObjects2= [];
gdjs.IntroCode.GDScoreTextObjects3= [];
gdjs.IntroCode.GDScoreTextObjects4= [];
gdjs.IntroCode.GDSignObjects1= [];
gdjs.IntroCode.GDSignObjects2= [];
gdjs.IntroCode.GDSignObjects3= [];
gdjs.IntroCode.GDSignObjects4= [];
gdjs.IntroCode.GDSignArrowObjects1= [];
gdjs.IntroCode.GDSignArrowObjects2= [];
gdjs.IntroCode.GDSignArrowObjects3= [];
gdjs.IntroCode.GDSignArrowObjects4= [];
gdjs.IntroCode.GDPlatformRightObjects1= [];
gdjs.IntroCode.GDPlatformRightObjects2= [];
gdjs.IntroCode.GDPlatformRightObjects3= [];
gdjs.IntroCode.GDPlatformRightObjects4= [];
gdjs.IntroCode.GDPlatformMiddleObjects1= [];
gdjs.IntroCode.GDPlatformMiddleObjects2= [];
gdjs.IntroCode.GDPlatformMiddleObjects3= [];
gdjs.IntroCode.GDPlatformMiddleObjects4= [];
gdjs.IntroCode.GDPlatformLeftObjects1= [];
gdjs.IntroCode.GDPlatformLeftObjects2= [];
gdjs.IntroCode.GDPlatformLeftObjects3= [];
gdjs.IntroCode.GDPlatformLeftObjects4= [];
gdjs.IntroCode.GDIslandObjects1= [];
gdjs.IntroCode.GDIslandObjects2= [];
gdjs.IntroCode.GDIslandObjects3= [];
gdjs.IntroCode.GDIslandObjects4= [];
gdjs.IntroCode.GDSkeletonObjects1= [];
gdjs.IntroCode.GDSkeletonObjects2= [];
gdjs.IntroCode.GDSkeletonObjects3= [];
gdjs.IntroCode.GDSkeletonObjects4= [];
gdjs.IntroCode.GDGrass2Objects1= [];
gdjs.IntroCode.GDGrass2Objects2= [];
gdjs.IntroCode.GDGrass2Objects3= [];
gdjs.IntroCode.GDGrass2Objects4= [];
gdjs.IntroCode.GDCactus3Objects1= [];
gdjs.IntroCode.GDCactus3Objects2= [];
gdjs.IntroCode.GDCactus3Objects3= [];
gdjs.IntroCode.GDCactus3Objects4= [];
gdjs.IntroCode.GDCactus2Objects1= [];
gdjs.IntroCode.GDCactus2Objects2= [];
gdjs.IntroCode.GDCactus2Objects3= [];
gdjs.IntroCode.GDCactus2Objects4= [];
gdjs.IntroCode.GDTreeObjects1= [];
gdjs.IntroCode.GDTreeObjects2= [];
gdjs.IntroCode.GDTreeObjects3= [];
gdjs.IntroCode.GDTreeObjects4= [];
gdjs.IntroCode.GDTitleObjects1= [];
gdjs.IntroCode.GDTitleObjects2= [];
gdjs.IntroCode.GDTitleObjects3= [];
gdjs.IntroCode.GDTitleObjects4= [];
gdjs.IntroCode.GDStartTextObjects1= [];
gdjs.IntroCode.GDStartTextObjects2= [];
gdjs.IntroCode.GDStartTextObjects3= [];
gdjs.IntroCode.GDStartTextObjects4= [];
gdjs.IntroCode.GDNewSpriteObjects1= [];
gdjs.IntroCode.GDNewSpriteObjects2= [];
gdjs.IntroCode.GDNewSpriteObjects3= [];
gdjs.IntroCode.GDNewSpriteObjects4= [];
gdjs.IntroCode.GDMoney2Objects1= [];
gdjs.IntroCode.GDMoney2Objects2= [];
gdjs.IntroCode.GDMoney2Objects3= [];
gdjs.IntroCode.GDMoney2Objects4= [];
gdjs.IntroCode.GDMoneyValueObjects1= [];
gdjs.IntroCode.GDMoneyValueObjects2= [];
gdjs.IntroCode.GDMoneyValueObjects3= [];
gdjs.IntroCode.GDMoneyValueObjects4= [];
gdjs.IntroCode.GDPlatformObjects1= [];
gdjs.IntroCode.GDPlatformObjects2= [];
gdjs.IntroCode.GDPlatformObjects3= [];
gdjs.IntroCode.GDPlatformObjects4= [];
gdjs.IntroCode.GDDustParticlesObjects1= [];
gdjs.IntroCode.GDDustParticlesObjects2= [];
gdjs.IntroCode.GDDustParticlesObjects3= [];
gdjs.IntroCode.GDDustParticlesObjects4= [];
gdjs.IntroCode.GDBackgroundObjects1= [];
gdjs.IntroCode.GDBackgroundObjects2= [];
gdjs.IntroCode.GDBackgroundObjects3= [];
gdjs.IntroCode.GDBackgroundObjects4= [];


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


};gdjs.IntroCode.asyncCallback12975372 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ReadResponseJSON.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2), runtimeScene.getScene().getVariables().getFromIndex(4), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (runtimeScene) => (gdjs.IntroCode.asyncCallback12975372(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.IntroCode.asyncCallback12974972 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "Promo", runtimeScene.getScene().getVariables().getFromIndex(2), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (runtimeScene) => (gdjs.IntroCode.asyncCallback12974972(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.IntroCode.eventsList4 = function(runtimeScene) {

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
}{gdjs.evtsExt__AdvancedHTTP__SetRequestHeader.func(runtimeScene, "7995fab1618cc964fb5c9cc3dddb93009726f", "Promo", "x-apikey", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.IntroCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDSignArrowObjects2Objects = Hashtable.newFrom({"SignArrow": gdjs.IntroCode.GDSignArrowObjects2});
gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDSignObjects1Objects = Hashtable.newFrom({"Sign": gdjs.IntroCode.GDSignObjects1});
gdjs.IntroCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SignArrow"), gdjs.IntroCode.GDSignArrowObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDSignArrowObjects2Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Sign"), gdjs.IntroCode.GDSignObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDSignObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Shop", false);
}}

}


};gdjs.IntroCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.IntroCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDSignObjects2Objects = Hashtable.newFrom({"Sign": gdjs.IntroCode.GDSignObjects2});
gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDSignObjects1Objects = Hashtable.newFrom({"Sign": gdjs.IntroCode.GDSignObjects1});
gdjs.IntroCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Sign"), gdjs.IntroCode.GDSignObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDSignObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12976900);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.IntroCode.GDScoreTextObjects2);
{for(var i = 0, len = gdjs.IntroCode.GDScoreTextObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDScoreTextObjects2[i].getBehavior("Effect").enableEffect("Hovering", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sign"), gdjs.IntroCode.GDSignObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDSignObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12970108);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.IntroCode.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDScoreTextObjects1[i].getBehavior("Effect").enableEffect("Hovering", false);
}
}}

}


};gdjs.IntroCode.eventsList8 = function(runtimeScene) {

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
}{gdjs.evtTools.sound.playMusic(runtimeScene, "LeaderboardMusic.mp3", true, 30, 1);
}{gdjs.evtTools.storage.readStringFromJSONFile("Saves", "Saves", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(1));
}{for(var i = 0, len = gdjs.IntroCode.GDMoneyValueObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDMoneyValueObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Money").getAsNumber()));
}
}{gdjs.evtTools.storage.readStringFromJSONFile("Shop", "Shop", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(5));
}
{ //Subevents
gdjs.IntroCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.IntroCode.eventsList6(runtimeScene);
}


{


gdjs.IntroCode.eventsList7(runtimeScene);
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
gdjs.IntroCode.GDSignObjects1.length = 0;
gdjs.IntroCode.GDSignObjects2.length = 0;
gdjs.IntroCode.GDSignObjects3.length = 0;
gdjs.IntroCode.GDSignObjects4.length = 0;
gdjs.IntroCode.GDSignArrowObjects1.length = 0;
gdjs.IntroCode.GDSignArrowObjects2.length = 0;
gdjs.IntroCode.GDSignArrowObjects3.length = 0;
gdjs.IntroCode.GDSignArrowObjects4.length = 0;
gdjs.IntroCode.GDPlatformRightObjects1.length = 0;
gdjs.IntroCode.GDPlatformRightObjects2.length = 0;
gdjs.IntroCode.GDPlatformRightObjects3.length = 0;
gdjs.IntroCode.GDPlatformRightObjects4.length = 0;
gdjs.IntroCode.GDPlatformMiddleObjects1.length = 0;
gdjs.IntroCode.GDPlatformMiddleObjects2.length = 0;
gdjs.IntroCode.GDPlatformMiddleObjects3.length = 0;
gdjs.IntroCode.GDPlatformMiddleObjects4.length = 0;
gdjs.IntroCode.GDPlatformLeftObjects1.length = 0;
gdjs.IntroCode.GDPlatformLeftObjects2.length = 0;
gdjs.IntroCode.GDPlatformLeftObjects3.length = 0;
gdjs.IntroCode.GDPlatformLeftObjects4.length = 0;
gdjs.IntroCode.GDIslandObjects1.length = 0;
gdjs.IntroCode.GDIslandObjects2.length = 0;
gdjs.IntroCode.GDIslandObjects3.length = 0;
gdjs.IntroCode.GDIslandObjects4.length = 0;
gdjs.IntroCode.GDSkeletonObjects1.length = 0;
gdjs.IntroCode.GDSkeletonObjects2.length = 0;
gdjs.IntroCode.GDSkeletonObjects3.length = 0;
gdjs.IntroCode.GDSkeletonObjects4.length = 0;
gdjs.IntroCode.GDGrass2Objects1.length = 0;
gdjs.IntroCode.GDGrass2Objects2.length = 0;
gdjs.IntroCode.GDGrass2Objects3.length = 0;
gdjs.IntroCode.GDGrass2Objects4.length = 0;
gdjs.IntroCode.GDCactus3Objects1.length = 0;
gdjs.IntroCode.GDCactus3Objects2.length = 0;
gdjs.IntroCode.GDCactus3Objects3.length = 0;
gdjs.IntroCode.GDCactus3Objects4.length = 0;
gdjs.IntroCode.GDCactus2Objects1.length = 0;
gdjs.IntroCode.GDCactus2Objects2.length = 0;
gdjs.IntroCode.GDCactus2Objects3.length = 0;
gdjs.IntroCode.GDCactus2Objects4.length = 0;
gdjs.IntroCode.GDTreeObjects1.length = 0;
gdjs.IntroCode.GDTreeObjects2.length = 0;
gdjs.IntroCode.GDTreeObjects3.length = 0;
gdjs.IntroCode.GDTreeObjects4.length = 0;
gdjs.IntroCode.GDTitleObjects1.length = 0;
gdjs.IntroCode.GDTitleObjects2.length = 0;
gdjs.IntroCode.GDTitleObjects3.length = 0;
gdjs.IntroCode.GDTitleObjects4.length = 0;
gdjs.IntroCode.GDStartTextObjects1.length = 0;
gdjs.IntroCode.GDStartTextObjects2.length = 0;
gdjs.IntroCode.GDStartTextObjects3.length = 0;
gdjs.IntroCode.GDStartTextObjects4.length = 0;
gdjs.IntroCode.GDNewSpriteObjects1.length = 0;
gdjs.IntroCode.GDNewSpriteObjects2.length = 0;
gdjs.IntroCode.GDNewSpriteObjects3.length = 0;
gdjs.IntroCode.GDNewSpriteObjects4.length = 0;
gdjs.IntroCode.GDMoney2Objects1.length = 0;
gdjs.IntroCode.GDMoney2Objects2.length = 0;
gdjs.IntroCode.GDMoney2Objects3.length = 0;
gdjs.IntroCode.GDMoney2Objects4.length = 0;
gdjs.IntroCode.GDMoneyValueObjects1.length = 0;
gdjs.IntroCode.GDMoneyValueObjects2.length = 0;
gdjs.IntroCode.GDMoneyValueObjects3.length = 0;
gdjs.IntroCode.GDMoneyValueObjects4.length = 0;
gdjs.IntroCode.GDPlatformObjects1.length = 0;
gdjs.IntroCode.GDPlatformObjects2.length = 0;
gdjs.IntroCode.GDPlatformObjects3.length = 0;
gdjs.IntroCode.GDPlatformObjects4.length = 0;
gdjs.IntroCode.GDDustParticlesObjects1.length = 0;
gdjs.IntroCode.GDDustParticlesObjects2.length = 0;
gdjs.IntroCode.GDDustParticlesObjects3.length = 0;
gdjs.IntroCode.GDDustParticlesObjects4.length = 0;
gdjs.IntroCode.GDBackgroundObjects1.length = 0;
gdjs.IntroCode.GDBackgroundObjects2.length = 0;
gdjs.IntroCode.GDBackgroundObjects3.length = 0;
gdjs.IntroCode.GDBackgroundObjects4.length = 0;

gdjs.IntroCode.eventsList8(runtimeScene);
gdjs.IntroCode.GDScoreTextObjects1.length = 0;
gdjs.IntroCode.GDScoreTextObjects2.length = 0;
gdjs.IntroCode.GDScoreTextObjects3.length = 0;
gdjs.IntroCode.GDScoreTextObjects4.length = 0;
gdjs.IntroCode.GDSignObjects1.length = 0;
gdjs.IntroCode.GDSignObjects2.length = 0;
gdjs.IntroCode.GDSignObjects3.length = 0;
gdjs.IntroCode.GDSignObjects4.length = 0;
gdjs.IntroCode.GDSignArrowObjects1.length = 0;
gdjs.IntroCode.GDSignArrowObjects2.length = 0;
gdjs.IntroCode.GDSignArrowObjects3.length = 0;
gdjs.IntroCode.GDSignArrowObjects4.length = 0;
gdjs.IntroCode.GDPlatformRightObjects1.length = 0;
gdjs.IntroCode.GDPlatformRightObjects2.length = 0;
gdjs.IntroCode.GDPlatformRightObjects3.length = 0;
gdjs.IntroCode.GDPlatformRightObjects4.length = 0;
gdjs.IntroCode.GDPlatformMiddleObjects1.length = 0;
gdjs.IntroCode.GDPlatformMiddleObjects2.length = 0;
gdjs.IntroCode.GDPlatformMiddleObjects3.length = 0;
gdjs.IntroCode.GDPlatformMiddleObjects4.length = 0;
gdjs.IntroCode.GDPlatformLeftObjects1.length = 0;
gdjs.IntroCode.GDPlatformLeftObjects2.length = 0;
gdjs.IntroCode.GDPlatformLeftObjects3.length = 0;
gdjs.IntroCode.GDPlatformLeftObjects4.length = 0;
gdjs.IntroCode.GDIslandObjects1.length = 0;
gdjs.IntroCode.GDIslandObjects2.length = 0;
gdjs.IntroCode.GDIslandObjects3.length = 0;
gdjs.IntroCode.GDIslandObjects4.length = 0;
gdjs.IntroCode.GDSkeletonObjects1.length = 0;
gdjs.IntroCode.GDSkeletonObjects2.length = 0;
gdjs.IntroCode.GDSkeletonObjects3.length = 0;
gdjs.IntroCode.GDSkeletonObjects4.length = 0;
gdjs.IntroCode.GDGrass2Objects1.length = 0;
gdjs.IntroCode.GDGrass2Objects2.length = 0;
gdjs.IntroCode.GDGrass2Objects3.length = 0;
gdjs.IntroCode.GDGrass2Objects4.length = 0;
gdjs.IntroCode.GDCactus3Objects1.length = 0;
gdjs.IntroCode.GDCactus3Objects2.length = 0;
gdjs.IntroCode.GDCactus3Objects3.length = 0;
gdjs.IntroCode.GDCactus3Objects4.length = 0;
gdjs.IntroCode.GDCactus2Objects1.length = 0;
gdjs.IntroCode.GDCactus2Objects2.length = 0;
gdjs.IntroCode.GDCactus2Objects3.length = 0;
gdjs.IntroCode.GDCactus2Objects4.length = 0;
gdjs.IntroCode.GDTreeObjects1.length = 0;
gdjs.IntroCode.GDTreeObjects2.length = 0;
gdjs.IntroCode.GDTreeObjects3.length = 0;
gdjs.IntroCode.GDTreeObjects4.length = 0;
gdjs.IntroCode.GDTitleObjects1.length = 0;
gdjs.IntroCode.GDTitleObjects2.length = 0;
gdjs.IntroCode.GDTitleObjects3.length = 0;
gdjs.IntroCode.GDTitleObjects4.length = 0;
gdjs.IntroCode.GDStartTextObjects1.length = 0;
gdjs.IntroCode.GDStartTextObjects2.length = 0;
gdjs.IntroCode.GDStartTextObjects3.length = 0;
gdjs.IntroCode.GDStartTextObjects4.length = 0;
gdjs.IntroCode.GDNewSpriteObjects1.length = 0;
gdjs.IntroCode.GDNewSpriteObjects2.length = 0;
gdjs.IntroCode.GDNewSpriteObjects3.length = 0;
gdjs.IntroCode.GDNewSpriteObjects4.length = 0;
gdjs.IntroCode.GDMoney2Objects1.length = 0;
gdjs.IntroCode.GDMoney2Objects2.length = 0;
gdjs.IntroCode.GDMoney2Objects3.length = 0;
gdjs.IntroCode.GDMoney2Objects4.length = 0;
gdjs.IntroCode.GDMoneyValueObjects1.length = 0;
gdjs.IntroCode.GDMoneyValueObjects2.length = 0;
gdjs.IntroCode.GDMoneyValueObjects3.length = 0;
gdjs.IntroCode.GDMoneyValueObjects4.length = 0;
gdjs.IntroCode.GDPlatformObjects1.length = 0;
gdjs.IntroCode.GDPlatformObjects2.length = 0;
gdjs.IntroCode.GDPlatformObjects3.length = 0;
gdjs.IntroCode.GDPlatformObjects4.length = 0;
gdjs.IntroCode.GDDustParticlesObjects1.length = 0;
gdjs.IntroCode.GDDustParticlesObjects2.length = 0;
gdjs.IntroCode.GDDustParticlesObjects3.length = 0;
gdjs.IntroCode.GDDustParticlesObjects4.length = 0;
gdjs.IntroCode.GDBackgroundObjects1.length = 0;
gdjs.IntroCode.GDBackgroundObjects2.length = 0;
gdjs.IntroCode.GDBackgroundObjects3.length = 0;
gdjs.IntroCode.GDBackgroundObjects4.length = 0;


return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
