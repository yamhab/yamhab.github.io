const colors = [
  "#f5e0dc",
  "#f2cdcd",
  "#f5c2e7",
  "#cba6f7",
  "#f38ba8",
  "#eba0ac",
  "#fab387",
  "#f9e2af",
  "#a6e3a1",
  "#94e2d5",
  "#89dceb",
  "#74c7ec",
  "#89b4fa",
  "#b4befe",
];

const randomColor = colors[Math.floor(Math.random() * colors.length)];
document.getElementsByTagName("header")[0].style.borderBottomColor =
  randomColor;
