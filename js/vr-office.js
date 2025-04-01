    // Basic scene setup
    window.addEventListener('DOMContentLoaded', async function(){
    const canvas = document.getElementById('renderCanvas');
    const engine = new BABYLON.Engine(canvas, true);
    const scene = new BABYLON.Scene(engine);

    // Added the Camera
    const camera = new BABYLON.ArcRotateCamera("camera", BABYLON.Tools.ToRadians(45), BABYLON.Tools.ToRadians(45), 10, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    // Added the Light
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.8;
    scene.clearColor = new BABYLON.Color3(0.8, 0.9, 1);//background colour 
   
    // Added ground to the scene
    const ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 15, height: 15 }, scene);
    const groundMat = new BABYLON.StandardMaterial("groundMat", scene);
    groundMat.diffuseColor = new BABYLON.Color3(0.85, 0.85, 0.85); // light gray
    ground.material = groundMat;
    
    // Added a computer
    const computer = BABYLON.MeshBuilder.CreateBox("computer", { width: 0.8, height: 0.5, depth: 0.1 }, scene);
    computer.position.y = 1.25;
    computer.position.z = -3;
    const computerMat = new BABYLON.StandardMaterial("computerMat", scene);
    computerMat.diffuseColor = new BABYLON.Color3(0.1, 0.1, 0.1);
    computer.material = computerMat;

    // Added a desk
    const desk = BABYLON.MeshBuilder.CreateBox("desk", { width: 2.4, height: 1, depth: 1 }, scene);
    desk.position.y = 0.5;
    desk.position.z = -3.2;
    const deskMat = new BABYLON.StandardMaterial("deskMat", scene);
    deskMat.diffuseColor = new BABYLON.Color3(0.58, 0.58, 0.88); 
    desk.material = deskMat;

   // Added a chair
   const chair = BABYLON.MeshBuilder.CreateCylinder("chair", { diameter: 0.8, height: 0.5 }, scene);
   chair.position.y = 0.25;
   chair.position.z = -1.5;
   const chairMat = new BABYLON.StandardMaterial("chairMat", scene);
   chairMat.diffuseColor = new BABYLON.Color3(0.6, 0.4, 0.3);
   chair.material = chairMat;


    // Start a WebXR session 
    const xr = await scene.createDefaultXRExperienceAsync({
        uiOptions: {
            sessionMode: "immersive-vr", 
            referenceSpaceType: "local-floor"
        },
        optionalFeatures: true
    });

    // Render loop
    engine.runRenderLoop(() => scene.render());
    window.addEventListener('resize', () => engine.resize());
});