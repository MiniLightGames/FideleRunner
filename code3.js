gdjs.RegisterCode = {};
gdjs.RegisterCode.localVariables = [];
gdjs.RegisterCode.GDHeloObjects1= [];
gdjs.RegisterCode.GDHeloObjects2= [];
gdjs.RegisterCode.GDHeloObjects3= [];
gdjs.RegisterCode.GDHeloObjects4= [];
gdjs.RegisterCode.GDNameObjects1= [];
gdjs.RegisterCode.GDNameObjects2= [];
gdjs.RegisterCode.GDNameObjects3= [];
gdjs.RegisterCode.GDNameObjects4= [];
gdjs.RegisterCode.GDCityObjects1= [];
gdjs.RegisterCode.GDCityObjects2= [];
gdjs.RegisterCode.GDCityObjects3= [];
gdjs.RegisterCode.GDCityObjects4= [];
gdjs.RegisterCode.GDPhoneObjects1= [];
gdjs.RegisterCode.GDPhoneObjects2= [];
gdjs.RegisterCode.GDPhoneObjects3= [];
gdjs.RegisterCode.GDPhoneObjects4= [];
gdjs.RegisterCode.GDRegisterObjects1= [];
gdjs.RegisterCode.GDRegisterObjects2= [];
gdjs.RegisterCode.GDRegisterObjects3= [];
gdjs.RegisterCode.GDRegisterObjects4= [];
gdjs.RegisterCode.GDPlatformObjects1= [];
gdjs.RegisterCode.GDPlatformObjects2= [];
gdjs.RegisterCode.GDPlatformObjects3= [];
gdjs.RegisterCode.GDPlatformObjects4= [];
gdjs.RegisterCode.GDDustParticlesObjects1= [];
gdjs.RegisterCode.GDDustParticlesObjects2= [];
gdjs.RegisterCode.GDDustParticlesObjects3= [];
gdjs.RegisterCode.GDDustParticlesObjects4= [];
gdjs.RegisterCode.GDBackgroundObjects1= [];
gdjs.RegisterCode.GDBackgroundObjects2= [];
gdjs.RegisterCode.GDBackgroundObjects3= [];
gdjs.RegisterCode.GDBackgroundObjects4= [];


gdjs.RegisterCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("status")) == "201";
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeStringInJSONFile("Player", "Player", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(2)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", false);
}}

}


};gdjs.RegisterCode.asyncCallback9953468 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.RegisterCode.localVariables);

{ //Subevents
gdjs.RegisterCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.RegisterCode.localVariables.length = 0;
}
gdjs.RegisterCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.RegisterCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.RegisterCode.asyncCallback9953468(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.RegisterCode.asyncCallback12109516 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.RegisterCode.localVariables);

{ //Subevents
gdjs.RegisterCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.RegisterCode.localVariables.length = 0;
}
gdjs.RegisterCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.RegisterCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "NewPlayer", runtimeScene.getScene().getVariables().getFromIndex(0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (runtimeScene) => (gdjs.RegisterCode.asyncCallback12109516(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.RegisterCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__AdvancedHTTP__CreateRequest.func(runtimeScene, "NewPlayer", "https://fidelerunner-1043.restdb.io/rest/player", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AdvancedHTTP__SetRequestMethod.func(runtimeScene, "NewPlayer", "POST", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AdvancedHTTP__SetRequestHeader.func(runtimeScene, "application/json", "NewPlayer", "content-type", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AdvancedHTTP__SetRequestHeader.func(runtimeScene, "0fd7b0095d9b0bcc2dcf7ade4279dd4840f88", "NewPlayer", "x-apikey", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AdvancedHTTP__SetRequestHeader.func(runtimeScene, "no-cache", "NewPlayer", "cache-control", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AdvancedHTTP__SetJSONRequestBody.func(runtimeScene, "NewPlayer", runtimeScene.getScene().getVariables().getFromIndex(2), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.RegisterCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.RegisterCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("City"), gdjs.RegisterCode.GDCityObjects2);
gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.RegisterCode.GDNameObjects2);
gdjs.copyArray(runtimeScene.getObjects("Phone"), gdjs.RegisterCode.GDPhoneObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Name").setString((( gdjs.RegisterCode.GDNameObjects2.length === 0 ) ? "" :gdjs.RegisterCode.GDNameObjects2[0].getBehavior("Text").getText()));
}{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("City").setString((( gdjs.RegisterCode.GDCityObjects2.length === 0 ) ? "" :gdjs.RegisterCode.GDCityObjects2[0].getBehavior("Text").getText()));
}{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Phone").setString((( gdjs.RegisterCode.GDPhoneObjects2.length === 0 ) ? "" :gdjs.RegisterCode.GDPhoneObjects2[0].getBehavior("Text").getText()));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Name")) != "";
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("City")) != "";
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2)) != "";
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.RegisterCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.RegisterCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("Player", "Player", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(3));
}{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(3).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(2));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Name")) != "0";
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Register"), gdjs.RegisterCode.GDRegisterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RegisterCode.GDRegisterObjects1.length;i<l;++i) {
    if ( gdjs.RegisterCode.GDRegisterObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.RegisterCode.GDRegisterObjects1[k] = gdjs.RegisterCode.GDRegisterObjects1[i];
        ++k;
    }
}
gdjs.RegisterCode.GDRegisterObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.RegisterCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.RegisterCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RegisterCode.GDHeloObjects1.length = 0;
gdjs.RegisterCode.GDHeloObjects2.length = 0;
gdjs.RegisterCode.GDHeloObjects3.length = 0;
gdjs.RegisterCode.GDHeloObjects4.length = 0;
gdjs.RegisterCode.GDNameObjects1.length = 0;
gdjs.RegisterCode.GDNameObjects2.length = 0;
gdjs.RegisterCode.GDNameObjects3.length = 0;
gdjs.RegisterCode.GDNameObjects4.length = 0;
gdjs.RegisterCode.GDCityObjects1.length = 0;
gdjs.RegisterCode.GDCityObjects2.length = 0;
gdjs.RegisterCode.GDCityObjects3.length = 0;
gdjs.RegisterCode.GDCityObjects4.length = 0;
gdjs.RegisterCode.GDPhoneObjects1.length = 0;
gdjs.RegisterCode.GDPhoneObjects2.length = 0;
gdjs.RegisterCode.GDPhoneObjects3.length = 0;
gdjs.RegisterCode.GDPhoneObjects4.length = 0;
gdjs.RegisterCode.GDRegisterObjects1.length = 0;
gdjs.RegisterCode.GDRegisterObjects2.length = 0;
gdjs.RegisterCode.GDRegisterObjects3.length = 0;
gdjs.RegisterCode.GDRegisterObjects4.length = 0;
gdjs.RegisterCode.GDPlatformObjects1.length = 0;
gdjs.RegisterCode.GDPlatformObjects2.length = 0;
gdjs.RegisterCode.GDPlatformObjects3.length = 0;
gdjs.RegisterCode.GDPlatformObjects4.length = 0;
gdjs.RegisterCode.GDDustParticlesObjects1.length = 0;
gdjs.RegisterCode.GDDustParticlesObjects2.length = 0;
gdjs.RegisterCode.GDDustParticlesObjects3.length = 0;
gdjs.RegisterCode.GDDustParticlesObjects4.length = 0;
gdjs.RegisterCode.GDBackgroundObjects1.length = 0;
gdjs.RegisterCode.GDBackgroundObjects2.length = 0;
gdjs.RegisterCode.GDBackgroundObjects3.length = 0;
gdjs.RegisterCode.GDBackgroundObjects4.length = 0;

gdjs.RegisterCode.eventsList5(runtimeScene);
gdjs.RegisterCode.GDHeloObjects1.length = 0;
gdjs.RegisterCode.GDHeloObjects2.length = 0;
gdjs.RegisterCode.GDHeloObjects3.length = 0;
gdjs.RegisterCode.GDHeloObjects4.length = 0;
gdjs.RegisterCode.GDNameObjects1.length = 0;
gdjs.RegisterCode.GDNameObjects2.length = 0;
gdjs.RegisterCode.GDNameObjects3.length = 0;
gdjs.RegisterCode.GDNameObjects4.length = 0;
gdjs.RegisterCode.GDCityObjects1.length = 0;
gdjs.RegisterCode.GDCityObjects2.length = 0;
gdjs.RegisterCode.GDCityObjects3.length = 0;
gdjs.RegisterCode.GDCityObjects4.length = 0;
gdjs.RegisterCode.GDPhoneObjects1.length = 0;
gdjs.RegisterCode.GDPhoneObjects2.length = 0;
gdjs.RegisterCode.GDPhoneObjects3.length = 0;
gdjs.RegisterCode.GDPhoneObjects4.length = 0;
gdjs.RegisterCode.GDRegisterObjects1.length = 0;
gdjs.RegisterCode.GDRegisterObjects2.length = 0;
gdjs.RegisterCode.GDRegisterObjects3.length = 0;
gdjs.RegisterCode.GDRegisterObjects4.length = 0;
gdjs.RegisterCode.GDPlatformObjects1.length = 0;
gdjs.RegisterCode.GDPlatformObjects2.length = 0;
gdjs.RegisterCode.GDPlatformObjects3.length = 0;
gdjs.RegisterCode.GDPlatformObjects4.length = 0;
gdjs.RegisterCode.GDDustParticlesObjects1.length = 0;
gdjs.RegisterCode.GDDustParticlesObjects2.length = 0;
gdjs.RegisterCode.GDDustParticlesObjects3.length = 0;
gdjs.RegisterCode.GDDustParticlesObjects4.length = 0;
gdjs.RegisterCode.GDBackgroundObjects1.length = 0;
gdjs.RegisterCode.GDBackgroundObjects2.length = 0;
gdjs.RegisterCode.GDBackgroundObjects3.length = 0;
gdjs.RegisterCode.GDBackgroundObjects4.length = 0;


return;

}

gdjs['RegisterCode'] = gdjs.RegisterCode;
