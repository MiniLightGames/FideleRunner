gdjs.IntroCode = {};
gdjs.IntroCode.localVariables = [];
gdjs.IntroCode.GDScoreTextObjects1= [];
gdjs.IntroCode.GDScoreTextObjects2= [];
gdjs.IntroCode.GDScoreTextObjects3= [];
gdjs.IntroCode.GDTitleObjects1= [];
gdjs.IntroCode.GDTitleObjects2= [];
gdjs.IntroCode.GDTitleObjects3= [];
gdjs.IntroCode.GDStartTextObjects1= [];
gdjs.IntroCode.GDStartTextObjects2= [];
gdjs.IntroCode.GDStartTextObjects3= [];
gdjs.IntroCode.GDMoney2Objects1= [];
gdjs.IntroCode.GDMoney2Objects2= [];
gdjs.IntroCode.GDMoney2Objects3= [];
gdjs.IntroCode.GDMoneyValueObjects1= [];
gdjs.IntroCode.GDMoneyValueObjects2= [];
gdjs.IntroCode.GDMoneyValueObjects3= [];
gdjs.IntroCode.GDTitle2Objects1= [];
gdjs.IntroCode.GDTitle2Objects2= [];
gdjs.IntroCode.GDTitle2Objects3= [];
gdjs.IntroCode.GDTitle3Objects1= [];
gdjs.IntroCode.GDTitle3Objects2= [];
gdjs.IntroCode.GDTitle3Objects3= [];
gdjs.IntroCode.GDPlayObjects1= [];
gdjs.IntroCode.GDPlayObjects2= [];
gdjs.IntroCode.GDPlayObjects3= [];
gdjs.IntroCode.GDShop2Objects1= [];
gdjs.IntroCode.GDShop2Objects2= [];
gdjs.IntroCode.GDShop2Objects3= [];
gdjs.IntroCode.GDPlatformObjects1= [];
gdjs.IntroCode.GDPlatformObjects2= [];
gdjs.IntroCode.GDPlatformObjects3= [];
gdjs.IntroCode.GDDustParticlesObjects1= [];
gdjs.IntroCode.GDDustParticlesObjects2= [];
gdjs.IntroCode.GDDustParticlesObjects3= [];
gdjs.IntroCode.GDBackgroundObjects1= [];
gdjs.IntroCode.GDBackgroundObjects2= [];
gdjs.IntroCode.GDBackgroundObjects3= [];
gdjs.IntroCode.GDMenuBackObjects1= [];
gdjs.IntroCode.GDMenuBackObjects2= [];
gdjs.IntroCode.GDMenuBackObjects3= [];


gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
if (isConditionTrue_0) {
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getGame().getVariables().getFromIndex(5).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(3));
}}

}


{



}


};gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDPlayObjects2Objects = Hashtable.newFrom({"Play": gdjs.IntroCode.GDPlayObjects2});
gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDShop2Objects1Objects = Hashtable.newFrom({"Shop2": gdjs.IntroCode.GDShop2Objects1});
gdjs.IntroCode.eventsList1 = function(runtimeScene) {

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
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Shop", false);
}}

}


};gdjs.IntroCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.IntroCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.IntroCode.eventsList3 = function(runtimeScene) {

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
}{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)), runtimeScene.getGame().getVariables().getFromIndex(6));
}
{ //Subevents
gdjs.IntroCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.IntroCode.eventsList2(runtimeScene);
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
gdjs.IntroCode.GDTitleObjects1.length = 0;
gdjs.IntroCode.GDTitleObjects2.length = 0;
gdjs.IntroCode.GDTitleObjects3.length = 0;
gdjs.IntroCode.GDStartTextObjects1.length = 0;
gdjs.IntroCode.GDStartTextObjects2.length = 0;
gdjs.IntroCode.GDStartTextObjects3.length = 0;
gdjs.IntroCode.GDMoney2Objects1.length = 0;
gdjs.IntroCode.GDMoney2Objects2.length = 0;
gdjs.IntroCode.GDMoney2Objects3.length = 0;
gdjs.IntroCode.GDMoneyValueObjects1.length = 0;
gdjs.IntroCode.GDMoneyValueObjects2.length = 0;
gdjs.IntroCode.GDMoneyValueObjects3.length = 0;
gdjs.IntroCode.GDTitle2Objects1.length = 0;
gdjs.IntroCode.GDTitle2Objects2.length = 0;
gdjs.IntroCode.GDTitle2Objects3.length = 0;
gdjs.IntroCode.GDTitle3Objects1.length = 0;
gdjs.IntroCode.GDTitle3Objects2.length = 0;
gdjs.IntroCode.GDTitle3Objects3.length = 0;
gdjs.IntroCode.GDPlayObjects1.length = 0;
gdjs.IntroCode.GDPlayObjects2.length = 0;
gdjs.IntroCode.GDPlayObjects3.length = 0;
gdjs.IntroCode.GDShop2Objects1.length = 0;
gdjs.IntroCode.GDShop2Objects2.length = 0;
gdjs.IntroCode.GDShop2Objects3.length = 0;
gdjs.IntroCode.GDPlatformObjects1.length = 0;
gdjs.IntroCode.GDPlatformObjects2.length = 0;
gdjs.IntroCode.GDPlatformObjects3.length = 0;
gdjs.IntroCode.GDDustParticlesObjects1.length = 0;
gdjs.IntroCode.GDDustParticlesObjects2.length = 0;
gdjs.IntroCode.GDDustParticlesObjects3.length = 0;
gdjs.IntroCode.GDBackgroundObjects1.length = 0;
gdjs.IntroCode.GDBackgroundObjects2.length = 0;
gdjs.IntroCode.GDBackgroundObjects3.length = 0;
gdjs.IntroCode.GDMenuBackObjects1.length = 0;
gdjs.IntroCode.GDMenuBackObjects2.length = 0;
gdjs.IntroCode.GDMenuBackObjects3.length = 0;

gdjs.IntroCode.eventsList3(runtimeScene);
gdjs.IntroCode.GDScoreTextObjects1.length = 0;
gdjs.IntroCode.GDScoreTextObjects2.length = 0;
gdjs.IntroCode.GDScoreTextObjects3.length = 0;
gdjs.IntroCode.GDTitleObjects1.length = 0;
gdjs.IntroCode.GDTitleObjects2.length = 0;
gdjs.IntroCode.GDTitleObjects3.length = 0;
gdjs.IntroCode.GDStartTextObjects1.length = 0;
gdjs.IntroCode.GDStartTextObjects2.length = 0;
gdjs.IntroCode.GDStartTextObjects3.length = 0;
gdjs.IntroCode.GDMoney2Objects1.length = 0;
gdjs.IntroCode.GDMoney2Objects2.length = 0;
gdjs.IntroCode.GDMoney2Objects3.length = 0;
gdjs.IntroCode.GDMoneyValueObjects1.length = 0;
gdjs.IntroCode.GDMoneyValueObjects2.length = 0;
gdjs.IntroCode.GDMoneyValueObjects3.length = 0;
gdjs.IntroCode.GDTitle2Objects1.length = 0;
gdjs.IntroCode.GDTitle2Objects2.length = 0;
gdjs.IntroCode.GDTitle2Objects3.length = 0;
gdjs.IntroCode.GDTitle3Objects1.length = 0;
gdjs.IntroCode.GDTitle3Objects2.length = 0;
gdjs.IntroCode.GDTitle3Objects3.length = 0;
gdjs.IntroCode.GDPlayObjects1.length = 0;
gdjs.IntroCode.GDPlayObjects2.length = 0;
gdjs.IntroCode.GDPlayObjects3.length = 0;
gdjs.IntroCode.GDShop2Objects1.length = 0;
gdjs.IntroCode.GDShop2Objects2.length = 0;
gdjs.IntroCode.GDShop2Objects3.length = 0;
gdjs.IntroCode.GDPlatformObjects1.length = 0;
gdjs.IntroCode.GDPlatformObjects2.length = 0;
gdjs.IntroCode.GDPlatformObjects3.length = 0;
gdjs.IntroCode.GDDustParticlesObjects1.length = 0;
gdjs.IntroCode.GDDustParticlesObjects2.length = 0;
gdjs.IntroCode.GDDustParticlesObjects3.length = 0;
gdjs.IntroCode.GDBackgroundObjects1.length = 0;
gdjs.IntroCode.GDBackgroundObjects2.length = 0;
gdjs.IntroCode.GDBackgroundObjects3.length = 0;
gdjs.IntroCode.GDMenuBackObjects1.length = 0;
gdjs.IntroCode.GDMenuBackObjects2.length = 0;
gdjs.IntroCode.GDMenuBackObjects3.length = 0;


return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
