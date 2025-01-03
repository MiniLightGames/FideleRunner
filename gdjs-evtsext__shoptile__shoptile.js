
gdjs.evtsExt__ShopTile__ShopTile = gdjs.evtsExt__ShopTile__ShopTile || {};

/**
 * Object generated from ShopTile
 */
gdjs.evtsExt__ShopTile__ShopTile.ShopTile = class ShopTile extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData) {
    super(parentInstanceContainer, objectData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    this._objectData.PriceContent = objectData.content.PriceContent !== undefined ? objectData.content.PriceContent : Number("0") || 0;
    this._objectData.ID = objectData.content.ID !== undefined ? objectData.content.ID : "\"0\"";
    this._objectData.ImageID = objectData.content.ImageID !== undefined ? objectData.content.ImageID : Number("") || 0;
    
    this._animator = new gdjs.SpriteAnimator(
        objectData.animatable.animations,
        gdjs.CustomRuntimeObject2DRenderer.getAnimationFrameTextureManager(
            parentInstanceContainer.getGame().getImageManager()));


    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.PriceContent !== newObjectData.content.PriceContent)
      this._objectData.PriceContent = newObjectData.content.PriceContent;
    if (oldObjectData.content.ID !== newObjectData.content.ID)
      this._objectData.ID = newObjectData.content.ID;
    if (oldObjectData.content.ImageID !== newObjectData.content.ImageID)
      this._objectData.ImageID = newObjectData.content.ImageID;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getPriceContent() {
    return this._objectData.PriceContent !== undefined ? this._objectData.PriceContent : Number("0") || 0;
  }
  _setPriceContent(newValue) {
    this._objectData.PriceContent = newValue;
  }
  _getID() {
    return this._objectData.ID !== undefined ? this._objectData.ID : "\"0\"";
  }
  _setID(newValue) {
    this._objectData.ID = newValue;
  }
  _getImageID() {
    return this._objectData.ImageID !== undefined ? this._objectData.ImageID : Number("") || 0;
  }
  _setImageID(newValue) {
    this._objectData.ImageID = newValue;
  }

  
  //  gdjs.Animatable interface implementation
  getAnimator() {
    return this._animator;
  }
  getAnimationIndex() {
    return this._animator.getAnimationIndex();
  }
  setAnimationIndex(animationIndex) {
    this._animator.setAnimationIndex(animationIndex);
  }
  getAnimationName() {
    return this._animator.getAnimationName();
  }
  setAnimationName(animationName) {
    this._animator.setAnimationName(animationName);
  }
  hasAnimationEnded() {
    return this._animator.hasAnimationEnded();
  }
  isAnimationPaused() {
    return this._animator.isAnimationPaused();
  }
  pauseAnimation() {
    this._animator.pauseAnimation();
  }
  resumeAnimation() {
    this._animator.resumeAnimation();
  }
  getAnimationSpeedScale() {
    return this._animator.getAnimationSpeedScale();
  }
  setAnimationSpeedScale(ratio) {
    this._animator.setAnimationSpeedScale(ratio);
  }
  getAnimationElapsedTime() {
    return this._animator.getAnimationElapsedTime();
  }
  setAnimationElapsedTime(time) {
    this._animator.setAnimationElapsedTime(time);
  }
  getAnimationDuration() {
    return this._animator.getAnimationDuration();
  }


  
  // gdjs.TextContainer interface implementation
  _text = '';
  getText() {
    return this._text;
  }
  setText(text) {
    this._text = text;
  }

}

// Methods:
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext = {};
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDObjectObjects1= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDObjectObjects2= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDCodeObjects1= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDCodeObjects2= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDContentObjects1= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDContentObjects2= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDBackfroundObjects1= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDBackfroundObjects2= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDBuyObjects1= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDBuyObjects2= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDBackObjects1= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDBackObjects2= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDPriceObjects1= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDPriceObjects2= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDPricebackObjects1= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDPricebackObjects2= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDPriceTitleObjects1= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDPriceTitleObjects2= [];


gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Back"), gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDBackObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Code"), gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDCodeObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Content"), gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDContentObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Price"), gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDPriceObjects1);
{if (typeof eventsFunctionContext !== 'undefined') {
gdjs.Variable.copy(eventsFunctionContext.getArgument("PromoCode"), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0), false);
}
}{for(var i = 0, len = gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDCodeObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDCodeObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild("code").getAsString());
}
}{for(var i = 0, len = gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDContentObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDContentObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild("Content").getAsString());
}
}{for(var i = 0, len = gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDPriceObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDPriceObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild("price").getAsString() + " Заказов");
}
}{for(var i = 0, len = gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDObjectObjects1[i]._setPriceContent(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild("price").getAsNumber());
}
}{for(var i = 0, len = gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDObjectObjects1[i]._setID(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild("_id").getAsString());
}
}{for(var i = 0, len = gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDObjectObjects1[i]._setImageID(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild("ImageID").getAsNumber());
}
}{for(var i = 0, len = gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDBackObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDBackObjects1[i].setAnimationFrame(eventsFunctionContext.getObjects("Object")[0]._getImageID());
}
}}

}


};

gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBack = function(PromoCode, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDCodeObjectsList = [...runtimeScene.getObjects("Code")];
var GDCodeObjects = Hashtable.newFrom({"Code": thisGDCodeObjectsList});
var thisGDContentObjectsList = [...runtimeScene.getObjects("Content")];
var GDContentObjects = Hashtable.newFrom({"Content": thisGDContentObjectsList});
var thisGDBackfroundObjectsList = [...runtimeScene.getObjects("Backfround")];
var GDBackfroundObjects = Hashtable.newFrom({"Backfround": thisGDBackfroundObjectsList});
var thisGDBuyObjectsList = [...runtimeScene.getObjects("Buy")];
var GDBuyObjects = Hashtable.newFrom({"Buy": thisGDBuyObjectsList});
var thisGDBackObjectsList = [...runtimeScene.getObjects("Back")];
var GDBackObjects = Hashtable.newFrom({"Back": thisGDBackObjectsList});
var thisGDPriceObjectsList = [...runtimeScene.getObjects("Price")];
var GDPriceObjects = Hashtable.newFrom({"Price": thisGDPriceObjectsList});
var thisGDPricebackObjectsList = [...runtimeScene.getObjects("Priceback")];
var GDPricebackObjects = Hashtable.newFrom({"Priceback": thisGDPricebackObjectsList});
var thisGDPriceTitleObjectsList = [...runtimeScene.getObjects("PriceTitle")];
var GDPriceTitleObjects = Hashtable.newFrom({"PriceTitle": thisGDPriceTitleObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Code": GDCodeObjects
, "Content": GDContentObjects
, "Backfround": GDBackfroundObjects
, "Buy": GDBuyObjects
, "Back": GDBackObjects
, "Price": GDPriceObjects
, "Priceback": GDPricebackObjects
, "PriceTitle": GDPriceTitleObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Code": thisGDCodeObjectsList
, "Content": thisGDContentObjectsList
, "Backfround": thisGDBackfroundObjectsList
, "Buy": thisGDBuyObjectsList
, "Back": thisGDBackObjectsList
, "Price": thisGDPriceObjectsList
, "Priceback": thisGDPricebackObjectsList
, "PriceTitle": thisGDPriceTitleObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ShopTile"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ShopTile"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "PromoCode") return PromoCode;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDCodeObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDCodeObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDContentObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDContentObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDBackfroundObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDBackfroundObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDBuyObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDBuyObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDBackObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDBackObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDPriceObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDPriceObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDPricebackObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDPricebackObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDPriceTitleObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDPriceTitleObjects2.length = 0;

gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDCodeObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDCodeObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDContentObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDContentObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDBackfroundObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDBackfroundObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDBuyObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDBuyObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDBackObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDBackObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDPriceObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDPriceObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDPricebackObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDPricebackObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDPriceTitleObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.ChangeBackContext.GDPriceTitleObjects2.length = 0;


return;
}
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext = {};
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDObjectObjects1= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDObjectObjects2= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDCodeObjects1= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDCodeObjects2= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDContentObjects1= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDContentObjects2= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDBackfroundObjects1= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDBackfroundObjects2= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDBuyObjects1= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDBuyObjects2= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDBackObjects1= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDBackObjects2= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDPriceObjects1= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDPriceObjects2= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDPricebackObjects1= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDPricebackObjects2= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDPriceTitleObjects1= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDPriceTitleObjects2= [];


gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Back"), gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDBackObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Buy"), gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDBuyObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Price"), gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDPriceObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("PriceTitle"), gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDPriceTitleObjects1);
{for(var i = 0, len = gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDBackObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDBackObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDPriceObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDPriceObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDBuyObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDBuyObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDBuyObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDBuyObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDPriceTitleObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDPriceTitleObjects1[i].hide();
}
}}

}


};

gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuy = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDCodeObjectsList = [...runtimeScene.getObjects("Code")];
var GDCodeObjects = Hashtable.newFrom({"Code": thisGDCodeObjectsList});
var thisGDContentObjectsList = [...runtimeScene.getObjects("Content")];
var GDContentObjects = Hashtable.newFrom({"Content": thisGDContentObjectsList});
var thisGDBackfroundObjectsList = [...runtimeScene.getObjects("Backfround")];
var GDBackfroundObjects = Hashtable.newFrom({"Backfround": thisGDBackfroundObjectsList});
var thisGDBuyObjectsList = [...runtimeScene.getObjects("Buy")];
var GDBuyObjects = Hashtable.newFrom({"Buy": thisGDBuyObjectsList});
var thisGDBackObjectsList = [...runtimeScene.getObjects("Back")];
var GDBackObjects = Hashtable.newFrom({"Back": thisGDBackObjectsList});
var thisGDPriceObjectsList = [...runtimeScene.getObjects("Price")];
var GDPriceObjects = Hashtable.newFrom({"Price": thisGDPriceObjectsList});
var thisGDPricebackObjectsList = [...runtimeScene.getObjects("Priceback")];
var GDPricebackObjects = Hashtable.newFrom({"Priceback": thisGDPricebackObjectsList});
var thisGDPriceTitleObjectsList = [...runtimeScene.getObjects("PriceTitle")];
var GDPriceTitleObjects = Hashtable.newFrom({"PriceTitle": thisGDPriceTitleObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Code": GDCodeObjects
, "Content": GDContentObjects
, "Backfround": GDBackfroundObjects
, "Buy": GDBuyObjects
, "Back": GDBackObjects
, "Price": GDPriceObjects
, "Priceback": GDPricebackObjects
, "PriceTitle": GDPriceTitleObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Code": thisGDCodeObjectsList
, "Content": thisGDContentObjectsList
, "Backfround": thisGDBackfroundObjectsList
, "Buy": thisGDBuyObjectsList
, "Back": thisGDBackObjectsList
, "Price": thisGDPriceObjectsList
, "Priceback": thisGDPricebackObjectsList
, "PriceTitle": thisGDPriceTitleObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ShopTile"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ShopTile"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDCodeObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDCodeObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDContentObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDContentObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDBackfroundObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDBackfroundObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDBuyObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDBuyObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDBackObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDBackObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDPriceObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDPriceObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDPricebackObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDPricebackObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDPriceTitleObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDPriceTitleObjects2.length = 0;

gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDCodeObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDCodeObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDContentObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDContentObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDBackfroundObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDBackfroundObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDBuyObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDBuyObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDBackObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDBackObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDPriceObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDPriceObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDPricebackObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDPricebackObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDPriceTitleObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBuyContext.GDPriceTitleObjects2.length = 0;


return;
}
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDCodeObjects1= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDCodeObjects2= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDContentObjects1= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDContentObjects2= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDBackfroundObjects1= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDBackfroundObjects2= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDBuyObjects1= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDBuyObjects2= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDBackObjects1= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDBackObjects2= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDPriceObjects1= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDPriceObjects2= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDPricebackObjects1= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDPricebackObjects2= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDPriceTitleObjects1= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDPriceTitleObjects2= [];


gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Saves").getChild("Money")) >= eventsFunctionContext.getObjects("Object")[0]._getPriceContent();
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Back"), gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDBackObjects1);
/* Reuse gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDBuyObjects1 */
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Price"), gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDPriceObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("PriceTitle"), gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDPriceTitleObjects1);
{for(var i = 0, len = gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDBackObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDBackObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDPriceObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDPriceObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDBuyObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDBuyObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDBuyObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDBuyObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getGame().getVariables().get("Saves").getChild("Money").sub(eventsFunctionContext.getObjects("Object")[0]._getPriceContent());
}{gdjs.evtTools.variable.valuePush(runtimeScene.getGame().getVariables().get("BuyPromos"), (( gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDObjectObjects1[0]._getID()));
}{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).setBoolean(true);
}{for(var i = 0, len = gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDPriceTitleObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDPriceTitleObjects1[i].hide();
}
}}

}


};gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Buy"), gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDBuyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDBuyObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDBuyObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDBuyObjects1[k] = gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDBuyObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDBuyObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDCodeObjectsList = [...runtimeScene.getObjects("Code")];
var GDCodeObjects = Hashtable.newFrom({"Code": thisGDCodeObjectsList});
var thisGDContentObjectsList = [...runtimeScene.getObjects("Content")];
var GDContentObjects = Hashtable.newFrom({"Content": thisGDContentObjectsList});
var thisGDBackfroundObjectsList = [...runtimeScene.getObjects("Backfround")];
var GDBackfroundObjects = Hashtable.newFrom({"Backfround": thisGDBackfroundObjectsList});
var thisGDBuyObjectsList = [...runtimeScene.getObjects("Buy")];
var GDBuyObjects = Hashtable.newFrom({"Buy": thisGDBuyObjectsList});
var thisGDBackObjectsList = [...runtimeScene.getObjects("Back")];
var GDBackObjects = Hashtable.newFrom({"Back": thisGDBackObjectsList});
var thisGDPriceObjectsList = [...runtimeScene.getObjects("Price")];
var GDPriceObjects = Hashtable.newFrom({"Price": thisGDPriceObjectsList});
var thisGDPricebackObjectsList = [...runtimeScene.getObjects("Priceback")];
var GDPricebackObjects = Hashtable.newFrom({"Priceback": thisGDPricebackObjectsList});
var thisGDPriceTitleObjectsList = [...runtimeScene.getObjects("PriceTitle")];
var GDPriceTitleObjects = Hashtable.newFrom({"PriceTitle": thisGDPriceTitleObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Code": GDCodeObjects
, "Content": GDContentObjects
, "Backfround": GDBackfroundObjects
, "Buy": GDBuyObjects
, "Back": GDBackObjects
, "Price": GDPriceObjects
, "Priceback": GDPricebackObjects
, "PriceTitle": GDPriceTitleObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Code": thisGDCodeObjectsList
, "Content": thisGDContentObjectsList
, "Backfround": thisGDBackfroundObjectsList
, "Buy": thisGDBuyObjectsList
, "Back": thisGDBackObjectsList
, "Price": thisGDPriceObjectsList
, "Priceback": thisGDPricebackObjectsList
, "PriceTitle": thisGDPriceTitleObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ShopTile"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ShopTile"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDCodeObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDCodeObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDContentObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDContentObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDBackfroundObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDBackfroundObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDBuyObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDBuyObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDBackObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDBackObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDPriceObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDPriceObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDPricebackObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDPricebackObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDPriceTitleObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDPriceTitleObjects2.length = 0;

gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDCodeObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDCodeObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDContentObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDContentObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDBackfroundObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDBackfroundObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDBuyObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDBuyObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDBackObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDBackObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDPriceObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDPriceObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDPricebackObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDPricebackObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDPriceTitleObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPostEventsContext.GDPriceTitleObjects2.length = 0;


return;
}
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext = {};
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDObjectObjects1= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDObjectObjects2= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDCodeObjects1= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDCodeObjects2= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDContentObjects1= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDContentObjects2= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDBackfroundObjects1= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDBackfroundObjects2= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDBuyObjects1= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDBuyObjects2= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDBackObjects1= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDBackObjects2= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDPriceObjects1= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDPriceObjects2= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDPricebackObjects1= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDPricebackObjects2= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDPriceTitleObjects1= [];
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDPriceTitleObjects2= [];


gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1), true, false);
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsBying = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDCodeObjectsList = [...runtimeScene.getObjects("Code")];
var GDCodeObjects = Hashtable.newFrom({"Code": thisGDCodeObjectsList});
var thisGDContentObjectsList = [...runtimeScene.getObjects("Content")];
var GDContentObjects = Hashtable.newFrom({"Content": thisGDContentObjectsList});
var thisGDBackfroundObjectsList = [...runtimeScene.getObjects("Backfround")];
var GDBackfroundObjects = Hashtable.newFrom({"Backfround": thisGDBackfroundObjectsList});
var thisGDBuyObjectsList = [...runtimeScene.getObjects("Buy")];
var GDBuyObjects = Hashtable.newFrom({"Buy": thisGDBuyObjectsList});
var thisGDBackObjectsList = [...runtimeScene.getObjects("Back")];
var GDBackObjects = Hashtable.newFrom({"Back": thisGDBackObjectsList});
var thisGDPriceObjectsList = [...runtimeScene.getObjects("Price")];
var GDPriceObjects = Hashtable.newFrom({"Price": thisGDPriceObjectsList});
var thisGDPricebackObjectsList = [...runtimeScene.getObjects("Priceback")];
var GDPricebackObjects = Hashtable.newFrom({"Priceback": thisGDPricebackObjectsList});
var thisGDPriceTitleObjectsList = [...runtimeScene.getObjects("PriceTitle")];
var GDPriceTitleObjects = Hashtable.newFrom({"PriceTitle": thisGDPriceTitleObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Code": GDCodeObjects
, "Content": GDContentObjects
, "Backfround": GDBackfroundObjects
, "Buy": GDBuyObjects
, "Back": GDBackObjects
, "Price": GDPriceObjects
, "Priceback": GDPricebackObjects
, "PriceTitle": GDPriceTitleObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Code": thisGDCodeObjectsList
, "Content": thisGDContentObjectsList
, "Backfround": thisGDBackfroundObjectsList
, "Buy": thisGDBuyObjectsList
, "Back": thisGDBackObjectsList
, "Price": thisGDPriceObjectsList
, "Priceback": thisGDPricebackObjectsList
, "PriceTitle": thisGDPriceTitleObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ShopTile"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ShopTile"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDCodeObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDCodeObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDContentObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDContentObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDBackfroundObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDBackfroundObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDBuyObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDBuyObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDBackObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDBackObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDPriceObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDPriceObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDPricebackObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDPricebackObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDPriceTitleObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDPriceTitleObjects2.length = 0;

gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDCodeObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDCodeObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDContentObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDContentObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDBackfroundObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDBackfroundObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDBuyObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDBuyObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDBackObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDBackObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDPriceObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDPriceObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDPricebackObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDPricebackObjects2.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDPriceTitleObjects1.length = 0;
gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.IsByingContext.GDPriceTitleObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ShopTile__ShopTile.ShopTile.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
this._animator.step(this.getElapsedTime() / 1000);
};


gdjs.registerObject("ShopTile::ShopTile", gdjs.evtsExt__ShopTile__ShopTile.ShopTile);
