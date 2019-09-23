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
    if(x == 68){
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
function handleKeydown(e) {
    switch(e.key) {
      case 'ArrowUp':
        nav(-1);
        break;
      case 'ArrowDown':
            alert("hello");
        nav(1);
        break;
      case 'ArrowRight':
        nav(1);
        break;
      case 'ArrowLeft':
        nav(-1);
        break;
    }
  }
  document.activeElement.addEventListener('keydown', handleKeydown);
  function nav (move) {
    const currentIndex = document.activeElement.tabIndex;
    const next = currentIndex + move;
    const items = document.querySelectorAll('.items');
    const targetElement = items[next];
    targetElement.focus();
  }




gdjs.NewSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NewSceneCode.GDNewObjectObjects1.length = 0;
gdjs.NewSceneCode.GDNewObjectObjects2.length = 0;

gdjs.NewSceneCode.eventsList0xb43b0(runtimeScene);
return;

}
gdjs['NewSceneCode'] = gdjs.NewSceneCode;
