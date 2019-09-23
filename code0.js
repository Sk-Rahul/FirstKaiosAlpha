gdjs.NewSceneCode = {};
gdjs.NewSceneCode.GDNewObjectObjects1= [];
gdjs.NewSceneCode.GDNewObjectObjects2= [];

gdjs.NewSceneCode.conditionTrue_0 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_0 = {val:false};
var MoveRight = false;
var MoveLeft = false;

gdjs.NewSceneCode.eventsList0xb43b0 = function(runtimeScene) {

{


{
gdjs.NewSceneCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));
{for(var i = 0, len = gdjs.NewSceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    if(MoveRight){
    gdjs.NewSceneCode.GDNewObjectObjects1[i].addForce(10, 0, 0);
    }
}
}}

}


{


{
gdjs.NewSceneCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));
{for(var i = 0, len = gdjs.NewSceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    if(MoveLeft){
    gdjs.NewSceneCode.GDNewObjectObjects1[i].addForce(-(10), 0, 0);
    }
}
}}

}


}; //End of gdjs.NewSceneCode.eventsList0xb43b0
function handleKeyDown(evt) {
    switch (evt.key) {
        case 'SoftLeft':
            // Action case press left key
            MoveLeft = true;
        break;

        case 'SoftRight':
            // Action case press right key
            MoveRight = true;
        break;

        case 'Enter':
            // Action case press center key
            
        break;
    }
};

document.addEventListener('keydown', handleKeyDown);

gdjs.NewSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NewSceneCode.GDNewObjectObjects1.length = 0;
gdjs.NewSceneCode.GDNewObjectObjects2.length = 0;

gdjs.NewSceneCode.eventsList0xb43b0(runtimeScene);
return;

}
gdjs['NewSceneCode'] = gdjs.NewSceneCode;
