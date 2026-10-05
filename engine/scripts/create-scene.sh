echo "Creating new scene file..."
echo "What is the name of the new scene?"
read sceneName

echo "class Scene {" > ../../scenes/$sceneName-scene.js
echo "    constructor() {" >> ../../scenes/$sceneName-scene.js
echo "        " >> ../../scenes/$sceneName-scene.js
echo "    }" >> ../../scenes/$sceneName-scene.js
echo "    setup() {" >> ../../scenes/$sceneName-scene.js
echo "        " >> ../../scenes/$sceneName-scene.js
echo "    }" >> ../../scenes/$sceneName-scene.js
echo "    update() {" >> ../../scenes/$sceneName-scene.js
echo "        " >> ../../scenes/$sceneName-scene.js
echo "    }" >> ../../scenes/$sceneName-scene.js
echo "}" >> ../../scenes/$sceneName-scene.js

echo "Scene file ../../scenes/$sceneName.js created successfully."
echo "-----------------------------------------------------------"
echo "Copy paste this to the index.html: "
echo "<script src=\"scenes/$sceneName-scene.js\"></script>"
echo ""
echo "add this to the start-here.js: "
echo "const ${sceneName}SceneObj = new ${sceneName}Scene();"
echo "const ${sceneName}Scene = new Scene('${sceneName}', ${sceneName}SceneObj, false, null)"