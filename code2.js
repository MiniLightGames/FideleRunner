gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.localVariables = [];
gdjs.LeaderboardCode.GDPanelObjects1= [];
gdjs.LeaderboardCode.GDPanelObjects2= [];
gdjs.LeaderboardCode.GDGreenButtonObjects1= [];
gdjs.LeaderboardCode.GDGreenButtonObjects2= [];
gdjs.LeaderboardCode.GDBlueButtonObjects1= [];
gdjs.LeaderboardCode.GDBlueButtonObjects2= [];
gdjs.LeaderboardCode.GDDistanceObjects1= [];
gdjs.LeaderboardCode.GDDistanceObjects2= [];
gdjs.LeaderboardCode.GDMoney2Objects1= [];
gdjs.LeaderboardCode.GDMoney2Objects2= [];
gdjs.LeaderboardCode.GDMineyValueObjects1= [];
gdjs.LeaderboardCode.GDMineyValueObjects2= [];
gdjs.LeaderboardCode.GDDistValueObjects1= [];
gdjs.LeaderboardCode.GDDistValueObjects2= [];
gdjs.LeaderboardCode.GDPlatformObjects1= [];
gdjs.LeaderboardCode.GDPlatformObjects2= [];
gdjs.LeaderboardCode.GDDustParticlesObjects1= [];
gdjs.LeaderboardCode.GDDustParticlesObjects2= [];
gdjs.LeaderboardCode.GDBackgroundObjects1= [];
gdjs.LeaderboardCode.GDBackgroundObjects2= [];
gdjs.LeaderboardCode.GDMenuBackObjects1= [];
gdjs.LeaderboardCode.GDMenuBackObjects2= [];


gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DistValue"), gdjs.LeaderboardCode.GDDistValueObjects1);
gdjs.copyArray(runtimeScene.getObjects("MineyValue"), gdjs.LeaderboardCode.GDMineyValueObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDMineyValueObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDMineyValueObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDDistValueObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDDistValueObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Score").getAsString() + " метров");
}
}{gdjs.evtTools.storage.writeStringInJSONFile("Saves", "Saves", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs.LeaderboardCode.GDGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDGreenButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDGreenButtonObjects1[k] = gdjs.LeaderboardCode.GDGreenButtonObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.LeaderboardCode.GDBlueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDBlueButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDBlueButtonObjects1[k] = gdjs.LeaderboardCode.GDBlueButtonObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDBlueButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", false);
}}

}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDPanelObjects1.length = 0;
gdjs.LeaderboardCode.GDPanelObjects2.length = 0;
gdjs.LeaderboardCode.GDGreenButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDGreenButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDBlueButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDBlueButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDDistanceObjects1.length = 0;
gdjs.LeaderboardCode.GDDistanceObjects2.length = 0;
gdjs.LeaderboardCode.GDMoney2Objects1.length = 0;
gdjs.LeaderboardCode.GDMoney2Objects2.length = 0;
gdjs.LeaderboardCode.GDMineyValueObjects1.length = 0;
gdjs.LeaderboardCode.GDMineyValueObjects2.length = 0;
gdjs.LeaderboardCode.GDDistValueObjects1.length = 0;
gdjs.LeaderboardCode.GDDistValueObjects2.length = 0;
gdjs.LeaderboardCode.GDPlatformObjects1.length = 0;
gdjs.LeaderboardCode.GDPlatformObjects2.length = 0;
gdjs.LeaderboardCode.GDDustParticlesObjects1.length = 0;
gdjs.LeaderboardCode.GDDustParticlesObjects2.length = 0;
gdjs.LeaderboardCode.GDBackgroundObjects1.length = 0;
gdjs.LeaderboardCode.GDBackgroundObjects2.length = 0;
gdjs.LeaderboardCode.GDMenuBackObjects1.length = 0;
gdjs.LeaderboardCode.GDMenuBackObjects2.length = 0;

gdjs.LeaderboardCode.eventsList0(runtimeScene);
gdjs.LeaderboardCode.GDPanelObjects1.length = 0;
gdjs.LeaderboardCode.GDPanelObjects2.length = 0;
gdjs.LeaderboardCode.GDGreenButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDGreenButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDBlueButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDBlueButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDDistanceObjects1.length = 0;
gdjs.LeaderboardCode.GDDistanceObjects2.length = 0;
gdjs.LeaderboardCode.GDMoney2Objects1.length = 0;
gdjs.LeaderboardCode.GDMoney2Objects2.length = 0;
gdjs.LeaderboardCode.GDMineyValueObjects1.length = 0;
gdjs.LeaderboardCode.GDMineyValueObjects2.length = 0;
gdjs.LeaderboardCode.GDDistValueObjects1.length = 0;
gdjs.LeaderboardCode.GDDistValueObjects2.length = 0;
gdjs.LeaderboardCode.GDPlatformObjects1.length = 0;
gdjs.LeaderboardCode.GDPlatformObjects2.length = 0;
gdjs.LeaderboardCode.GDDustParticlesObjects1.length = 0;
gdjs.LeaderboardCode.GDDustParticlesObjects2.length = 0;
gdjs.LeaderboardCode.GDBackgroundObjects1.length = 0;
gdjs.LeaderboardCode.GDBackgroundObjects2.length = 0;
gdjs.LeaderboardCode.GDMenuBackObjects1.length = 0;
gdjs.LeaderboardCode.GDMenuBackObjects2.length = 0;


return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
