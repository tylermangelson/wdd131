const snortleblat = {
    name: "Snortleblat",
    level: 8,
    health: 50,

    takeDamage: function(amount) {
        this.health -= amount;
        if (this.health < 0) this.health = 0;
        renderStats();
        if (this.health === 0) showDeathImage();
    },
    levelUp: function() {
        this.level++;
        renderStats();
    }
}

function renderStats() {
    document.getElementById("health").textContent = snortleblat.health;
    document.getElementById("level").textContent = snortleblat.level;
}

function showDeathImage() {
    document.getElementById("death-overlay").style.display = "block";
}

const buttons = document.querySelectorAll("button");
buttons[0].addEventListener("click", () => snortleblat.takeDamage(10));
buttons[1].addEventListener("click", () => snortleblat.levelUp());