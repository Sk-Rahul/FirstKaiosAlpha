gdjs.NewSceneCode = {};
gdjs.NewSceneCode.GDNewObjectObjects1= [];
gdjs.NewSceneCode.GDNewObjectObjects2= [];

gdjs.NewSceneCode.conditionTrue_0 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_0 = {val:false};
var x;

gdjs.NewSceneCode.eventsList0xb43b0 = function(runtimeScene) {

{


{
gdjs.NewSceneCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));
{for(var i = 0, len = gdjs.NewSceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    if(x == 39){
    gdjs.NewSceneCode.GDNewObjectObjects1[i].addForce(10, 0, 0);
    }
}
}}

}


{


{
gdjs.NewSceneCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));
{for(var i = 0, len = gdjs.NewSceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    if(x == 65){
    gdjs.NewSceneCode.GDNewObjectObjects1[i].addForce(-(10), 0, 0);
    }
}
}}

}


}; //End of gdjs.NewSceneCode.eventsList0xb43b0
function Start(event)
{
    x = event.which;
    alert(x);
}
document.addEventListener("keydown",Start);



gdjs.NewSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NewSceneCode.GDNewObjectObjects1.length = 0;
gdjs.NewSceneCode.GDNewObjectObjects2.length = 0;

gdjs.NewSceneCode.eventsList0xb43b0(runtimeScene);
return;

}
gdjs['NewSceneCode'] = gdjs.NewSceneCode;
