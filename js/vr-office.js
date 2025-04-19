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
        scene.clearColor = new BABYLON.Color3(0.8, 0.9, 1);//background colour 
       
        // Added ground to the scene
        const ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 15, height: 15 }, scene);
        const groundMat = new BABYLON.StandardMaterial("groundMat", scene);
        //adding texture images for the ground
        groundMat.diffuseTexture = new BABYLON.Texture("Textures/ground.jpg", scene); 
        ground.material = groundMat;
        
        // Added a computer
    const computer = BABYLON.MeshBuilder.CreateBox("computer", { width: 1.5, height: 0.8, depth: 0.1 }, scene);
    computer.position.y = 1.45;
    computer.position.z = -3.3;
    computer.position.x = 0.1;
    const computerMat = new BABYLON.StandardMaterial("computerMat", scene);
    computerMat.diffuseColor = new BABYLON.Color3(0.1, 0.1, 0.1);
    computer.material = computerMat;

    // Apply the Windows desktop image to the monitor screen
    const screenTexture = new BABYLON.Texture("Textures/windows-7-pictures-ls3d2tksci60suou.jpg", scene); 
    const monitor = BABYLON.MeshBuilder.CreateBox("monitor", { width: 1.5, height: 0.8, depth: 0.1 }, scene); 
    monitor.position.y = 1.45; 
    monitor.position.z = -3.3;
    monitor.position.x = 0.1;
    const monitorMat = new BABYLON.StandardMaterial("monitorMat", scene);
    monitorMat.diffuseTexture = screenTexture; // Apply the image texture only to the screen
    monitor.material = monitorMat;

      // Added a Desk 
       const deskTop = BABYLON.MeshBuilder.CreateBox("deskTop", { width: 2.4, height: 0.1, depth: 1 }, scene);
       deskTop.position.y = 1; 
       deskTop.position.z = -3.2;
       const deskMat = new BABYLON.StandardMaterial("deskMat", scene);
       deskMat.diffuseColor = new BABYLON.Color3(0.58, 0.58, 0.88); 
       deskTop.material = deskMat;

     // Left Leg
      const leftLeg = BABYLON.MeshBuilder.CreateBox("leftLeg", { width: 0.15, height: 1, depth: 0.15 }, scene);
      leftLeg.position.set(-1, 0.5, -3.5);
      leftLeg.material = deskMat;

     // Right Leg
       const rightLeg = BABYLON.MeshBuilder.CreateBox("rightLeg", { width: 0.15, height: 1, depth: 0.15 }, scene);
       rightLeg.position.set(1, 0.5, -3.5);
       rightLeg.material = deskMat;

       // Added a chair
       const chair = BABYLON.MeshBuilder.CreateCylinder("chair", { diameter: 0.8, height: 0.5 }, scene);
       chair.position.y = 0.25;
       chair.position.z = -1.5;
       const chairMat = new BABYLON.StandardMaterial("chairMat", scene);
       chairMat.diffuseColor = new BABYLON.Color3(0.6, 0.4, 0.3);
       chair.material = chairMat;

    
        // Render loop
        engine.runRenderLoop(() => scene.render());
        window.addEventListener('resize', () => engine.resize());
    });