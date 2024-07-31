function setWalkSpeed() {
    var walkSpeed = document.getElementById('walkSpeed').value;
    if (walkSpeed) {
        executeRobloxScript(`game.Players.LocalPlayer.Character.Humanoid.WalkSpeed = ${walkSpeed}`);
    } else {
        alert("Please enter a walk speed.");
    }
}

function setJumpPower() {
    var jumpPower = document.getElementById('jumpPower').value;
    if (jumpPower) {
        executeRobloxScript(`game.Players.LocalPlayer.Character.Humanoid.JumpPower = ${jumpPower}`);
    } else {
        alert("Please enter a jump power.");
    }
}

function executeRobloxScript(script) {
    // Hypothetical function to send the script to the Roblox game
    console.log("Executing script:", script);
    // Implement the actual script execution method according to your setup
}