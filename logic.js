let age = 16;
let isMember = true;
let result = null;
if (age <= 15) {
  result = 800;
} else if (isMember) {
  result = 1000;
} else {
  result = 1800;
}
document.write(result);