const fs = require('fs');

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Canvas Drawing</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f5f5f5;
        }
        canvas {
            border: 2px solid black;
            background-color: white;
        }
    </style>
</head>
<body>
    <canvas id="myCanvas" width="300" height="300"></canvas>
    <script>
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');

        // Draw outer square
        ctx.lineWidth = 3;
        ctx.strokeRect(50, 50, 200, 200);

        // Draw central diamond
        ctx.beginPath();
        ctx.moveTo(150, 90);  // Top
        ctx.lineTo(210, 150); // Right
        ctx.lineTo(150, 210); // Bottom
        ctx.lineTo(90, 150);  // Left
        ctx.closePath();
        ctx.stroke();

        // Draw a small diamond in the center
        ctx.beginPath();
        ctx.moveTo(150, 140);  // Top
        ctx.lineTo(160, 150);  // Right
        ctx.lineTo(150, 160);  // Bottom
        ctx.lineTo(140, 150);  // Left
        ctx.closePath();
        ctx.stroke();

        // Draw radiating lines
        ctx.beginPath();
        ctx.moveTo(150, 50); ctx.lineTo(150, 30); // Top
        ctx.moveTo(150, 250); ctx.lineTo(150, 270); // Bottom
        ctx.moveTo(50, 150); ctx.lineTo(30, 150); // Left
        ctx.moveTo(250, 150); ctx.lineTo(270, 150); // Right
        ctx.stroke();
    </script>
</body>
</html>
`;

// Write the HTML file
fs.writeFileSync('drawing.html', htmlContent, 'utf8');

console.log("File 'drawing.html' has been generated. Open it in a browser.");
