// Scroll to specific card
function scrollToCard(index) {
  const cards = document.querySelectorAll('.card');
  if (cards[index]) {
    cards[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Basic cloud chart
function drawChart() {
  const canvas = document.createElement("canvas");
  canvas.width = 300;
  canvas.height = 150;
  document.getElementById("cloudChart").appendChild(canvas);
  const ctx = canvas.getContext("2d");

  const gradient = ctx.createLinearGradient(0, 0, 300, 0);
  gradient.addColorStop(0, "#00c6ff");
  gradient.addColorStop(1, "#0072ff");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 225, 100);
  ctx.fillStyle = "#fff";
  ctx.font = "14px Arial";
  ctx.fillText("Cloud Usage: 75%", 10, 20);
}

// Pie Chart for Threat Detection
function drawPieChart() {
  const canvas = document.createElement("canvas");
  canvas.width = 200;
  canvas.height = 200;
  document.getElementById("pieChart").appendChild(canvas);
  const ctx = canvas.getContext("2d");

  const data = [12, 25, 21];
  const colors = ["#e74c3c", "#f1c40f", "#2ecc71"];
  let total = data.reduce((a, b) => a + b, 0);
  let startAngle = 0;

  data.forEach((value, index) => {
    const sliceAngle = (value / total) * 2 * Math.PI;
    ctx.fillStyle = colors[index];
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.arc(100, 100, 80, startAngle, startAngle + sliceAngle);
    ctx.closePath();
    ctx.fill();
    startAngle += sliceAngle;
  });

  ctx.fillStyle = "#fff";
  ctx.font = "12px Arial";
  ctx.fillText("Critical: 12", 10, 20);
  ctx.fillText("Medium: 25", 10, 35);
  ctx.fillText("Low: 21", 10, 50);
}

// Shadowed Line Graph for Network Traffic
function drawLineGraph() {
  const canvas = document.createElement("canvas");
  canvas.width = 300;
  canvas.height = 150;
  document.getElementById("lineGraph").appendChild(canvas);
  const ctx = canvas.getContext("2d");

  const points = [20, 35, 25, 45, 60, 55];
  const labels = ["1AM", "2AM", "3AM", "4AM", "5AM", "6AM"];

  ctx.beginPath();
  ctx.moveTo(0, 150 - points[0]);
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(i * 50, 150 - points[i]);
  }

  ctx.shadowColor = "#00f";
  ctx.shadowBlur = 10;
  ctx.strokeStyle = "#3498db";
  ctx.lineWidth = 3;
  ctx.stroke();

  // Draw labels
  ctx.fillStyle = "#fff";
  ctx.font = "10px Arial";
  labels.forEach((label, i) => {
    ctx.fillText(label, i * 50 - 10, 145);
  });
}

// Run all charts
window.onload = () => {
  drawChart();
  drawPieChart();
  drawLineGraph();
};
