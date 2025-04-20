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

    // mouse
    const mouse = BABYLON.MeshBuilder.CreateSphere("mouse", { diameter: 0.175 }, scene); 
    mouse.position.y = 1.1;
    mouse.position.z = -2.9;
    mouse.position.x = 0.9;  
    const mouseMat = new BABYLON.StandardMaterial("mouseMat", scene);
    mouseMat.diffuseColor = new BABYLON.Color3(0.4, 0.4, 0.4); 
    mouse.material = mouseMat;

    // added keyboard
    const keyboard = BABYLON.MeshBuilder.CreateBox("keyboard", { width: 1, height: 0.05, depth: 0.4 }, scene);  // Smaller keyboard
    keyboard.position.y = 1.1;
    keyboard.position.z = -2.9;  
    keyboard.position.x = 0.1;  
    const keyboardMat = new BABYLON.StandardMaterial("keyboardMat", scene);
    keyboardMat.diffuseColor = new BABYLON.Color3(0.2, 0.2, 0.2);  
    keyboard.material = keyboardMat;

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

       // Chair Seat
    const seat = BABYLON.MeshBuilder.CreateBox("seat", { width: 1, height: 0.2, depth: 1 }, scene);
    seat.position.set(0, 0, -2); 
    const seatMat = new BABYLON.StandardMaterial("seatMat", scene);
    seatMat.diffuseColor = new BABYLON.Color3(0.1, 0.1, 0.1); 
    seat.material = seatMat;

    // Chair Backrest
    const chairBackrest = BABYLON.MeshBuilder.CreateBox("backrest", { width: 1, height: 1, depth: 0.2 }, scene);
    chairBackrest.position.set(0, 0.6, -2.5);  
    const backrestMat = new BABYLON.StandardMaterial("backrestMat", scene);
    backrestMat.diffuseColor = new BABYLON.Color3(0.3, 0.3, 0.3);  
    chairBackrest.material = backrestMat;

    // chair legs
    const leg1 = BABYLON.MeshBuilder.CreateBox("leg1", { width: 0.1, height: 0.5, depth: 0.1 }, scene);
    leg1.position.set(-0.4, -0.45, -1.8);  
    const leg2 = BABYLON.MeshBuilder.CreateBox("leg2", { width: 0.1, height: 0.5, depth: 0.1 }, scene);
    leg2.position.set(0.4, -0.45, -1.8);   
    const leg3 = BABYLON.MeshBuilder.CreateBox("leg3", { width: 0.1, height: 0.5, depth: 0.1 }, scene);
    leg3.position.set(-0.4, -0.45, -2.2);  
    const leg4 = BABYLON.MeshBuilder.CreateBox("leg4", { width: 0.1, height: 0.5, depth: 0.1 }, scene);
    leg4.position.set(0.4, -0.45, -2.2);   

    const legMat = new BABYLON.StandardMaterial("legMat", scene);
    legMat.diffuseColor = new BABYLON.Color3(0.3, 0.3, 0.3);  
    leg1.material = legMat;
    leg2.material = legMat;
    leg3.material = legMat;
    leg4.material = legMat;

    // Group all parts of the chair
    const chair = new BABYLON.TransformNode("chair");
    seat.parent = chair;
    chairBackrest.parent = chair;  
    leg1.parent = chair;
    leg2.parent = chair;
    leg3.parent = chair;
    leg4.parent = chair;

    // Position the chair in the scene
    chair.position.set(0, 0.75, -4);
    chair.rotation.y = Math.PI;

    
       
       // Lamp Stand 
       const stand = BABYLON.MeshBuilder.CreateCylinder("stand", { height: 3, diameterTop: 0.1, diameterBottom: 0.2 }, scene);
       stand.position.set(3, 1.5, -2);  // Positioning the stand
       const standMat = new BABYLON.StandardMaterial("standMat", scene);
       standMat.diffuseColor = new BABYLON.Color3(0.5, 0.5, 0.5);  
       stand.material = standMat;

       // Lamp Shade 
       const lampShade = BABYLON.MeshBuilder.CreateCylinder("lampShade", { height: 0.8, diameterTop: 0.5, diameterBottom: 1 }, scene);
       lampShade.position.set(3, 3, -2);  
       const shadeMat = new BABYLON.StandardMaterial("shadeMat", scene);
       shadeMat.diffuseColor = new BABYLON.Color3(1, 1, 0);  
       lampShade.material = shadeMat;

       // Light Source
       const lampLight = new BABYLON.PointLight("lampLight", new BABYLON.Vector3(3, 2.8, -2), scene);
       lampLight.intensity = 0.8;  
       lampLight.diffuse = new BABYLON.Color3(1, 1, 0);  
       lampLight.range = 5;  

       // Sofa Material
       const sofaMat = new BABYLON.StandardMaterial("sofaMat", scene);
       sofaMat.diffuseColor = new BABYLON.Color3(0.6, 0.3, 0.2);  

       // Sofa - Base
       const sofaBase = BABYLON.MeshBuilder.CreateBox("sofaBase", { width: 4, height: 0.5, depth: 2 }, scene);
       sofaBase.position.y = 0.25;  
       sofaBase.material = sofaMat;

      // Sofa - Backrest
      const backrest = BABYLON.MeshBuilder.CreateBox("backrest", { width: 4, height: 1.2, depth: 0.5 }, scene);
      backrest.position.y = 1.25;
      backrest.position.z = -0.75;
      backrest.material = sofaMat;

      // Sofa - Left Armrest
      const leftArmrest = BABYLON.MeshBuilder.CreateBox("leftArmrest", { width: 0.5, height: 1, depth: 2 }, scene);
      leftArmrest.position.x = -1.75;
      leftArmrest.position.y = 0.75;
      leftArmrest.material = sofaMat;

      // Sofa - Right Armrest
      const rightArmrest = BABYLON.MeshBuilder.CreateBox("rightArmrest", { width: 0.5, height: 1, depth: 2 }, scene);
      rightArmrest.position.x = 1.75;
      rightArmrest.position.y = 0.75;
      rightArmrest.material = sofaMat;

    // Group tsofa
     const sofa = new BABYLON.TransformNode("sofa"); 
     sofaBase.parent = sofa;
     backrest.parent = sofa;
     leftArmrest.parent = sofa;
     rightArmrest.parent = sofa;
 
     // sofa poition
     sofa.position.set(-5, 0.25, 2);  
     sofa.rotation.y = Math.PI / 2; 
    
        // Render loop
        engine.runRenderLoop(() => scene.render());
        window.addEventListener('resize', () => engine.resize());
    });