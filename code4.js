gdjs.ShopCode = {};
gdjs.ShopCode.localVariables = [];
gdjs.ShopCode.forEachIndex2 = 0;

gdjs.ShopCode.forEachObjects2 = [];

gdjs.ShopCode.forEachTemporary2 = null;

gdjs.ShopCode.forEachTotalCount2 = 0;

gdjs.ShopCode.GDShopTileObjects1= [];
gdjs.ShopCode.GDShopTileObjects2= [];
gdjs.ShopCode.GDShopTileObjects3= [];
gdjs.ShopCode.GDShopTileObjects4= [];
gdjs.ShopCode.GDShopTileObjects5= [];
gdjs.ShopCode.GDShopTileObjects6= [];
gdjs.ShopCode.GDShopTileObjects7= [];
gdjs.ShopCode.GDPriceObjects1= [];
gdjs.ShopCode.GDPriceObjects2= [];
gdjs.ShopCode.GDPriceObjects3= [];
gdjs.ShopCode.GDPriceObjects4= [];
gdjs.ShopCode.GDPriceObjects5= [];
gdjs.ShopCode.GDPriceObjects6= [];
gdjs.ShopCode.GDPriceObjects7= [];
gdjs.ShopCode.GDNextObjects1= [];
gdjs.ShopCode.GDNextObjects2= [];
gdjs.ShopCode.GDNextObjects3= [];
gdjs.ShopCode.GDNextObjects4= [];
gdjs.ShopCode.GDNextObjects5= [];
gdjs.ShopCode.GDNextObjects6= [];
gdjs.ShopCode.GDNextObjects7= [];
gdjs.ShopCode.GDBackObjects1= [];
gdjs.ShopCode.GDBackObjects2= [];
gdjs.ShopCode.GDBackObjects3= [];
gdjs.ShopCode.GDBackObjects4= [];
gdjs.ShopCode.GDBackObjects5= [];
gdjs.ShopCode.GDBackObjects6= [];
gdjs.ShopCode.GDBackObjects7= [];
gdjs.ShopCode.GDHomeObjects1= [];
gdjs.ShopCode.GDHomeObjects2= [];
gdjs.ShopCode.GDHomeObjects3= [];
gdjs.ShopCode.GDHomeObjects4= [];
gdjs.ShopCode.GDHomeObjects5= [];
gdjs.ShopCode.GDHomeObjects6= [];
gdjs.ShopCode.GDHomeObjects7= [];
gdjs.ShopCode.GDMoneyBackObjects1= [];
gdjs.ShopCode.GDMoneyBackObjects2= [];
gdjs.ShopCode.GDMoneyBackObjects3= [];
gdjs.ShopCode.GDMoneyBackObjects4= [];
gdjs.ShopCode.GDMoneyBackObjects5= [];
gdjs.ShopCode.GDMoneyBackObjects6= [];
gdjs.ShopCode.GDMoneyBackObjects7= [];
gdjs.ShopCode.GDTestObjects1= [];
gdjs.ShopCode.GDTestObjects2= [];
gdjs.ShopCode.GDTestObjects3= [];
gdjs.ShopCode.GDTestObjects4= [];
gdjs.ShopCode.GDTestObjects5= [];
gdjs.ShopCode.GDTestObjects6= [];
gdjs.ShopCode.GDTestObjects7= [];
gdjs.ShopCode.GDPlatformObjects1= [];
gdjs.ShopCode.GDPlatformObjects2= [];
gdjs.ShopCode.GDPlatformObjects3= [];
gdjs.ShopCode.GDPlatformObjects4= [];
gdjs.ShopCode.GDPlatformObjects5= [];
gdjs.ShopCode.GDPlatformObjects6= [];
gdjs.ShopCode.GDPlatformObjects7= [];
gdjs.ShopCode.GDDustParticlesObjects1= [];
gdjs.ShopCode.GDDustParticlesObjects2= [];
gdjs.ShopCode.GDDustParticlesObjects3= [];
gdjs.ShopCode.GDDustParticlesObjects4= [];
gdjs.ShopCode.GDDustParticlesObjects5= [];
gdjs.ShopCode.GDDustParticlesObjects6= [];
gdjs.ShopCode.GDDustParticlesObjects7= [];
gdjs.ShopCode.GDBackgroundObjects1= [];
gdjs.ShopCode.GDBackgroundObjects2= [];
gdjs.ShopCode.GDBackgroundObjects3= [];
gdjs.ShopCode.GDBackgroundObjects4= [];
gdjs.ShopCode.GDBackgroundObjects5= [];
gdjs.ShopCode.GDBackgroundObjects6= [];
gdjs.ShopCode.GDBackgroundObjects7= [];
gdjs.ShopCode.GDMenuBackObjects1= [];
gdjs.ShopCode.GDMenuBackObjects2= [];
gdjs.ShopCode.GDMenuBackObjects3= [];
gdjs.ShopCode.GDMenuBackObjects4= [];
gdjs.ShopCode.GDMenuBackObjects5= [];
gdjs.ShopCode.GDMenuBackObjects6= [];
gdjs.ShopCode.GDMenuBackObjects7= [];


gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDShopTileObjects3Objects = Hashtable.newFrom({"ShopTile": gdjs.ShopCode.GDShopTileObjects3});
gdjs.ShopCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(8)) == runtimeScene.getScene().getVariables().getFromIndex(0).getChild("_id").getAsString();
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.ShopCode.GDShopTileObjects3, gdjs.ShopCode.GDShopTileObjects6);

{for(var i = 0, len = gdjs.ShopCode.GDShopTileObjects6.length ;i < len;++i) {
    gdjs.ShopCode.GDShopTileObjects6[i].IsBuy((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.ShopCode.eventsList1 = function(runtimeScene) {

{


const valueIteratorReference5 = runtimeScene.getScene().getVariables().getFromIndex(8);
const iterableReference5 = runtimeScene.getGame().getVariables().getFromIndex(5);
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

{ //Subevents: 
gdjs.ShopCode.eventsList0(runtimeScene);} //Subevents end.
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)) == 3;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(3).add(1);
}}

}


};gdjs.ShopCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)) <= 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.ShopCode.GDBackObjects3);
{for(var i = 0, len = gdjs.ShopCode.GDBackObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDBackObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.ShopCode.GDBackObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDBackObjects3[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)) < Math.round(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() / 4.4);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.ShopCode.GDNextObjects3);
{for(var i = 0, len = gdjs.ShopCode.GDNextObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDNextObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.ShopCode.GDNextObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDNextObjects3[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)) >= Math.round(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() / 4.4);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.ShopCode.GDNextObjects3);
{for(var i = 0, len = gdjs.ShopCode.GDNextObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDNextObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.ShopCode.GDNextObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDNextObjects3[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)) > 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.ShopCode.GDBackObjects2);
{for(var i = 0, len = gdjs.ShopCode.GDBackObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDBackObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.ShopCode.GDBackObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDBackObjects2[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.ShopCode.eventsList3 = function(runtimeScene) {

{


const valueIteratorReference3 = runtimeScene.getScene().getVariables().getFromIndex(0);
const iterableReference3 = runtimeScene.getGame().getVariables().getFromIndex(3);
if(!iterableReference3.isPrimitive()) {
for(
    const iteratorKey3 in 
    iterableReference3.getType() === "structure"
      ? iterableReference3.getAllChildren()
      : iterableReference3.getType() === "array"
        ? iterableReference3.getAllChildrenArray()
        : []
) {
    const structureChildVariable3 = iterableReference3.getChild(iteratorKey3)
    valueIteratorReference3.castTo(structureChildVariable3.getType())
    if(structureChildVariable3.isPrimitive()) {
        valueIteratorReference3.setValue(structureChildVariable3.getValue());
    } else if (structureChildVariable3.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference3.replaceChildren(structureChildVariable3.getAllChildren());
    } else if (structureChildVariable3.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference3.replaceChildrenArray(structureChildVariable3.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);
gdjs.ShopCode.GDShopTileObjects3.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 55));
}{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber((gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 22) + (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() * ((gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 4))));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDShopTileObjects3Objects, runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber(), "");
}{for(var i = 0, len = gdjs.ShopCode.GDShopTileObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDShopTileObjects3[i].ChangeBack(runtimeScene.getScene().getVariables().getFromIndex(0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.ShopCode.GDShopTileObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDShopTileObjects3[i].setLayer("тайлы");
}
}{runtimeScene.getScene().getVariables().getFromIndex(4).add(1);
}{runtimeScene.getScene().getVariables().getFromIndex(3).add(1);
}
{ //Subevents: 
gdjs.ShopCode.eventsList1(runtimeScene);} //Subevents end.
}
}
}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.ShopCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)) == 1;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {
}

}


};gdjs.ShopCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)) <= 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.ShopCode.GDBackObjects3);
{for(var i = 0, len = gdjs.ShopCode.GDBackObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDBackObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.ShopCode.GDBackObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDBackObjects3[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)) < Math.round(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() / 4.4);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.ShopCode.GDNextObjects1, gdjs.ShopCode.GDNextObjects3);

{for(var i = 0, len = gdjs.ShopCode.GDNextObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDNextObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.ShopCode.GDNextObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDNextObjects3[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)) >= Math.round(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() / 4.4);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.ShopCode.GDNextObjects1, gdjs.ShopCode.GDNextObjects3);

{for(var i = 0, len = gdjs.ShopCode.GDNextObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDNextObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.ShopCode.GDNextObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDNextObjects3[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)) > 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.ShopCode.GDBackObjects2);
{for(var i = 0, len = gdjs.ShopCode.GDBackObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDBackObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.ShopCode.GDBackObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDBackObjects2[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.ShopCode.eventsList5 = function(runtimeScene) {

};gdjs.ShopCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.ShopCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ShopTile"), gdjs.ShopCode.GDShopTileObjects1);

for (gdjs.ShopCode.forEachIndex2 = 0;gdjs.ShopCode.forEachIndex2 < gdjs.ShopCode.GDShopTileObjects1.length;++gdjs.ShopCode.forEachIndex2) {
gdjs.ShopCode.GDShopTileObjects2.length = 0;


gdjs.ShopCode.forEachTemporary2 = gdjs.ShopCode.GDShopTileObjects1[gdjs.ShopCode.forEachIndex2];
gdjs.ShopCode.GDShopTileObjects2.push(gdjs.ShopCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.ShopCode.GDShopTileObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDShopTileObjects2[i].setY(gdjs.ShopCode.GDShopTileObjects2[i].getY() - (gdjs.evtTools.window.getGameResolutionHeight(runtimeScene)));
}
}}
}

}


};gdjs.ShopCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)) <= 0;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.ShopCode.GDBackObjects1, gdjs.ShopCode.GDBackObjects3);

{for(var i = 0, len = gdjs.ShopCode.GDBackObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDBackObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.ShopCode.GDBackObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDBackObjects3[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)) < Math.round(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() / 4.4);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.ShopCode.GDNextObjects3);
{for(var i = 0, len = gdjs.ShopCode.GDNextObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDNextObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.ShopCode.GDNextObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDNextObjects3[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)) >= Math.round(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() / 4.4);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.ShopCode.GDNextObjects3);
{for(var i = 0, len = gdjs.ShopCode.GDNextObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDNextObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.ShopCode.GDNextObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDNextObjects3[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)) > 0;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.ShopCode.GDBackObjects1, gdjs.ShopCode.GDBackObjects2);

{for(var i = 0, len = gdjs.ShopCode.GDBackObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDBackObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.ShopCode.GDBackObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDBackObjects2[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.ShopCode.eventsList8 = function(runtimeScene) {

};gdjs.ShopCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.ShopCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ShopTile"), gdjs.ShopCode.GDShopTileObjects1);

for (gdjs.ShopCode.forEachIndex2 = 0;gdjs.ShopCode.forEachIndex2 < gdjs.ShopCode.GDShopTileObjects1.length;++gdjs.ShopCode.forEachIndex2) {
gdjs.ShopCode.GDShopTileObjects2.length = 0;


gdjs.ShopCode.forEachTemporary2 = gdjs.ShopCode.GDShopTileObjects1[gdjs.ShopCode.forEachIndex2];
gdjs.ShopCode.GDShopTileObjects2.push(gdjs.ShopCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.ShopCode.GDShopTileObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDShopTileObjects2[i].setY(gdjs.ShopCode.GDShopTileObjects2[i].getY() + (gdjs.evtTools.window.getGameResolutionHeight(runtimeScene)));
}
}}
}

}


};gdjs.ShopCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.ShopCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.ShopCode.GDNextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDNextObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDNextObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDNextObjects1[k] = gdjs.ShopCode.GDNextObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDNextObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(7).add(1);
}
{ //Subevents
gdjs.ShopCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.ShopCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDBackObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDBackObjects1[k] = gdjs.ShopCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(7).sub(1);
}
{ //Subevents
gdjs.ShopCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Price"), gdjs.ShopCode.GDPriceObjects1);
{for(var i = 0, len = gdjs.ShopCode.GDPriceObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDPriceObjects1[i].getBehavior("Text").setText("Заказов: " + runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Money").getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Home"), gdjs.ShopCode.GDHomeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDHomeObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDHomeObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDHomeObjects1[k] = gdjs.ShopCode.GDHomeObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDHomeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ShopTile"), gdjs.ShopCode.GDShopTileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDShopTileObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDShopTileObjects1[i].IsBying((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDShopTileObjects1[k] = gdjs.ShopCode.GDShopTileObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDShopTileObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeStringInJSONFile("Shop", "Shop", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(5)));
}}

}


};

gdjs.ShopCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ShopCode.GDShopTileObjects1.length = 0;
gdjs.ShopCode.GDShopTileObjects2.length = 0;
gdjs.ShopCode.GDShopTileObjects3.length = 0;
gdjs.ShopCode.GDShopTileObjects4.length = 0;
gdjs.ShopCode.GDShopTileObjects5.length = 0;
gdjs.ShopCode.GDShopTileObjects6.length = 0;
gdjs.ShopCode.GDShopTileObjects7.length = 0;
gdjs.ShopCode.GDPriceObjects1.length = 0;
gdjs.ShopCode.GDPriceObjects2.length = 0;
gdjs.ShopCode.GDPriceObjects3.length = 0;
gdjs.ShopCode.GDPriceObjects4.length = 0;
gdjs.ShopCode.GDPriceObjects5.length = 0;
gdjs.ShopCode.GDPriceObjects6.length = 0;
gdjs.ShopCode.GDPriceObjects7.length = 0;
gdjs.ShopCode.GDNextObjects1.length = 0;
gdjs.ShopCode.GDNextObjects2.length = 0;
gdjs.ShopCode.GDNextObjects3.length = 0;
gdjs.ShopCode.GDNextObjects4.length = 0;
gdjs.ShopCode.GDNextObjects5.length = 0;
gdjs.ShopCode.GDNextObjects6.length = 0;
gdjs.ShopCode.GDNextObjects7.length = 0;
gdjs.ShopCode.GDBackObjects1.length = 0;
gdjs.ShopCode.GDBackObjects2.length = 0;
gdjs.ShopCode.GDBackObjects3.length = 0;
gdjs.ShopCode.GDBackObjects4.length = 0;
gdjs.ShopCode.GDBackObjects5.length = 0;
gdjs.ShopCode.GDBackObjects6.length = 0;
gdjs.ShopCode.GDBackObjects7.length = 0;
gdjs.ShopCode.GDHomeObjects1.length = 0;
gdjs.ShopCode.GDHomeObjects2.length = 0;
gdjs.ShopCode.GDHomeObjects3.length = 0;
gdjs.ShopCode.GDHomeObjects4.length = 0;
gdjs.ShopCode.GDHomeObjects5.length = 0;
gdjs.ShopCode.GDHomeObjects6.length = 0;
gdjs.ShopCode.GDHomeObjects7.length = 0;
gdjs.ShopCode.GDMoneyBackObjects1.length = 0;
gdjs.ShopCode.GDMoneyBackObjects2.length = 0;
gdjs.ShopCode.GDMoneyBackObjects3.length = 0;
gdjs.ShopCode.GDMoneyBackObjects4.length = 0;
gdjs.ShopCode.GDMoneyBackObjects5.length = 0;
gdjs.ShopCode.GDMoneyBackObjects6.length = 0;
gdjs.ShopCode.GDMoneyBackObjects7.length = 0;
gdjs.ShopCode.GDTestObjects1.length = 0;
gdjs.ShopCode.GDTestObjects2.length = 0;
gdjs.ShopCode.GDTestObjects3.length = 0;
gdjs.ShopCode.GDTestObjects4.length = 0;
gdjs.ShopCode.GDTestObjects5.length = 0;
gdjs.ShopCode.GDTestObjects6.length = 0;
gdjs.ShopCode.GDTestObjects7.length = 0;
gdjs.ShopCode.GDPlatformObjects1.length = 0;
gdjs.ShopCode.GDPlatformObjects2.length = 0;
gdjs.ShopCode.GDPlatformObjects3.length = 0;
gdjs.ShopCode.GDPlatformObjects4.length = 0;
gdjs.ShopCode.GDPlatformObjects5.length = 0;
gdjs.ShopCode.GDPlatformObjects6.length = 0;
gdjs.ShopCode.GDPlatformObjects7.length = 0;
gdjs.ShopCode.GDDustParticlesObjects1.length = 0;
gdjs.ShopCode.GDDustParticlesObjects2.length = 0;
gdjs.ShopCode.GDDustParticlesObjects3.length = 0;
gdjs.ShopCode.GDDustParticlesObjects4.length = 0;
gdjs.ShopCode.GDDustParticlesObjects5.length = 0;
gdjs.ShopCode.GDDustParticlesObjects6.length = 0;
gdjs.ShopCode.GDDustParticlesObjects7.length = 0;
gdjs.ShopCode.GDBackgroundObjects1.length = 0;
gdjs.ShopCode.GDBackgroundObjects2.length = 0;
gdjs.ShopCode.GDBackgroundObjects3.length = 0;
gdjs.ShopCode.GDBackgroundObjects4.length = 0;
gdjs.ShopCode.GDBackgroundObjects5.length = 0;
gdjs.ShopCode.GDBackgroundObjects6.length = 0;
gdjs.ShopCode.GDBackgroundObjects7.length = 0;
gdjs.ShopCode.GDMenuBackObjects1.length = 0;
gdjs.ShopCode.GDMenuBackObjects2.length = 0;
gdjs.ShopCode.GDMenuBackObjects3.length = 0;
gdjs.ShopCode.GDMenuBackObjects4.length = 0;
gdjs.ShopCode.GDMenuBackObjects5.length = 0;
gdjs.ShopCode.GDMenuBackObjects6.length = 0;
gdjs.ShopCode.GDMenuBackObjects7.length = 0;

gdjs.ShopCode.eventsList10(runtimeScene);
gdjs.ShopCode.GDShopTileObjects1.length = 0;
gdjs.ShopCode.GDShopTileObjects2.length = 0;
gdjs.ShopCode.GDShopTileObjects3.length = 0;
gdjs.ShopCode.GDShopTileObjects4.length = 0;
gdjs.ShopCode.GDShopTileObjects5.length = 0;
gdjs.ShopCode.GDShopTileObjects6.length = 0;
gdjs.ShopCode.GDShopTileObjects7.length = 0;
gdjs.ShopCode.GDPriceObjects1.length = 0;
gdjs.ShopCode.GDPriceObjects2.length = 0;
gdjs.ShopCode.GDPriceObjects3.length = 0;
gdjs.ShopCode.GDPriceObjects4.length = 0;
gdjs.ShopCode.GDPriceObjects5.length = 0;
gdjs.ShopCode.GDPriceObjects6.length = 0;
gdjs.ShopCode.GDPriceObjects7.length = 0;
gdjs.ShopCode.GDNextObjects1.length = 0;
gdjs.ShopCode.GDNextObjects2.length = 0;
gdjs.ShopCode.GDNextObjects3.length = 0;
gdjs.ShopCode.GDNextObjects4.length = 0;
gdjs.ShopCode.GDNextObjects5.length = 0;
gdjs.ShopCode.GDNextObjects6.length = 0;
gdjs.ShopCode.GDNextObjects7.length = 0;
gdjs.ShopCode.GDBackObjects1.length = 0;
gdjs.ShopCode.GDBackObjects2.length = 0;
gdjs.ShopCode.GDBackObjects3.length = 0;
gdjs.ShopCode.GDBackObjects4.length = 0;
gdjs.ShopCode.GDBackObjects5.length = 0;
gdjs.ShopCode.GDBackObjects6.length = 0;
gdjs.ShopCode.GDBackObjects7.length = 0;
gdjs.ShopCode.GDHomeObjects1.length = 0;
gdjs.ShopCode.GDHomeObjects2.length = 0;
gdjs.ShopCode.GDHomeObjects3.length = 0;
gdjs.ShopCode.GDHomeObjects4.length = 0;
gdjs.ShopCode.GDHomeObjects5.length = 0;
gdjs.ShopCode.GDHomeObjects6.length = 0;
gdjs.ShopCode.GDHomeObjects7.length = 0;
gdjs.ShopCode.GDMoneyBackObjects1.length = 0;
gdjs.ShopCode.GDMoneyBackObjects2.length = 0;
gdjs.ShopCode.GDMoneyBackObjects3.length = 0;
gdjs.ShopCode.GDMoneyBackObjects4.length = 0;
gdjs.ShopCode.GDMoneyBackObjects5.length = 0;
gdjs.ShopCode.GDMoneyBackObjects6.length = 0;
gdjs.ShopCode.GDMoneyBackObjects7.length = 0;
gdjs.ShopCode.GDTestObjects1.length = 0;
gdjs.ShopCode.GDTestObjects2.length = 0;
gdjs.ShopCode.GDTestObjects3.length = 0;
gdjs.ShopCode.GDTestObjects4.length = 0;
gdjs.ShopCode.GDTestObjects5.length = 0;
gdjs.ShopCode.GDTestObjects6.length = 0;
gdjs.ShopCode.GDTestObjects7.length = 0;
gdjs.ShopCode.GDPlatformObjects1.length = 0;
gdjs.ShopCode.GDPlatformObjects2.length = 0;
gdjs.ShopCode.GDPlatformObjects3.length = 0;
gdjs.ShopCode.GDPlatformObjects4.length = 0;
gdjs.ShopCode.GDPlatformObjects5.length = 0;
gdjs.ShopCode.GDPlatformObjects6.length = 0;
gdjs.ShopCode.GDPlatformObjects7.length = 0;
gdjs.ShopCode.GDDustParticlesObjects1.length = 0;
gdjs.ShopCode.GDDustParticlesObjects2.length = 0;
gdjs.ShopCode.GDDustParticlesObjects3.length = 0;
gdjs.ShopCode.GDDustParticlesObjects4.length = 0;
gdjs.ShopCode.GDDustParticlesObjects5.length = 0;
gdjs.ShopCode.GDDustParticlesObjects6.length = 0;
gdjs.ShopCode.GDDustParticlesObjects7.length = 0;
gdjs.ShopCode.GDBackgroundObjects1.length = 0;
gdjs.ShopCode.GDBackgroundObjects2.length = 0;
gdjs.ShopCode.GDBackgroundObjects3.length = 0;
gdjs.ShopCode.GDBackgroundObjects4.length = 0;
gdjs.ShopCode.GDBackgroundObjects5.length = 0;
gdjs.ShopCode.GDBackgroundObjects6.length = 0;
gdjs.ShopCode.GDBackgroundObjects7.length = 0;
gdjs.ShopCode.GDMenuBackObjects1.length = 0;
gdjs.ShopCode.GDMenuBackObjects2.length = 0;
gdjs.ShopCode.GDMenuBackObjects3.length = 0;
gdjs.ShopCode.GDMenuBackObjects4.length = 0;
gdjs.ShopCode.GDMenuBackObjects5.length = 0;
gdjs.ShopCode.GDMenuBackObjects6.length = 0;
gdjs.ShopCode.GDMenuBackObjects7.length = 0;


return;

}

gdjs['ShopCode'] = gdjs.ShopCode;
