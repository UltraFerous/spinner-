let animations = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let time = 100;

for(let i = 0; i < animations.length; i++){
  setTimeout(() => {
    process.stdout.write("\r" + animations[i] + "   ");
  }, time);
  time += 200;
}
