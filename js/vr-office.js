// Basic scene setup
window.addEventListener('DOMContentLoaded', function(){
    const canvas = document.getElementById('renderCanvas');
    const engine = new BABYLON.Engine(canvas, true);
    const scene = new BABYLON.Scene(engine);

    // Added the Camera
    const camera = new BABYLON.ArcRotateCamera("camera", BABYLON.Tools.ToRadians(45), BABYLON.Tools.ToRadians(45), 10, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    // Added the Light
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.8;

    // Added ground to the scene
     
    const ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 15, height: 15 }, scene);
    const groundMat = new BABYLON.StandardMaterial("groundMat", scene);
    groundMat.diffuseColor = new BABYLON.Color3(0.85, 0.85, 0.85); // light gray
    ground.material = groundMat;

    // Render loop
    engine.runRenderLoop(() => scene.render());
    window.addEventListener('resize', () => engine.resize());
});