const level = 5;

for (let i = 1; i <= level ; i++){
    console.log(" ".repeat(level-i) + "*".repeat(i*2-1));
}