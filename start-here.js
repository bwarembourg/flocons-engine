// Define Anim here
idle = new Anim('idle', ['sprite/cinnamon1.png', 'sprite/cinnamon2.png', 'sprite/cinnamon3.png', 'sprite/cinnamon4.png'], 10);
die = new Anim('die', ['sprite/cinnamon die1.png', 'sprite/cinnamon die2.png', 'sprite/cinnamon die3.png', 'sprite/cinnamon die4.png',
    'sprite/cinnamon die5.png', 'sprite/cinnamon die6.png', 'sprite/cinnamon die7.png', 'sprite/cinnamon die8.png', 'sprite/cinnamon die9.png', 
    'sprite/cinnamon die10.png'], 10)


// Define Scenes here
const uiSceneObj = new UIScene();
const uiScene = new Scene('ui', uiSceneObj, false, null)

const testSceneObj = new TestScene();
const testScene = new Scene('test', testSceneObj, true, uiScene);
const testScene2Obj = new Test2();
const testScene2 = new Scene('test2', testScene2Obj, false, uiScene);