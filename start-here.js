// Define Anim here
const idle = new Anim({
    name: 'idle', speed: 10,
    sprites: ['sprite/cinnamon1.png', 'sprite/cinnamon2.png', 'sprite/cinnamon3.png', 'sprite/cinnamon4.png']
});
const die = new Anim({
    name: 'die', speed: 10,
    sprites: ['sprite/cinnamon die1.png', 'sprite/cinnamon die2.png', 'sprite/cinnamon die3.png', 'sprite/cinnamon die4.png', 'sprite/cinnamon die5.png', 'sprite/cinnamon die6.png', 'sprite/cinnamon die7.png', 'sprite/cinnamon die8.png', 'sprite/cinnamon die9.png', 'sprite/cinnamon die10.png']
})

// Define sfxs here
SFX.setSfxs([
    {id: 'error', src: 'sounds/error.wav'},
    {id: 'buy', src: 'sounds/buy.wav'},
]);

// Define prefabs here
const testPrefab = new Prefab({
    id: 'testPrefab',
    object: new TestPrefab()
});

// Define Scenes here
const uiScene = new Scene({
    id: 'ui',
    object: new UIScene(),
    startingScene: false,
    UI: null
});

const testScene = new Scene({
    id: 'test',
    object: new TestScene(),
    startingScene: true,
    UI: uiScene
});

const testScene2 = new Scene({
    id: 'test2',
    object: new Test2(),
    startingScene: false,
    UI: uiScene
})
