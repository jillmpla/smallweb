alert("Every number after the first two is the sum of the two preceding ones!");

document.write("Fibonacci Sequence:<br />");
var a = -1, b = 1, c = 0, z = 1;
while (z <= 50) {
  c = a + b;
  a = b;
  b = c;
  z++;
  document.write(c);
  document.write("<br />");
}