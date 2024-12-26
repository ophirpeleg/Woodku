const canvas = document.getElementById('game-grid');
const ctx = canvas.getContext('2d');
canvas.width = 450; // 9x9 grid, each cell is 50px
canvas.height = 450;
const gridSize = 9;
const cellSize = canvas.width / gridSize;

let score = 0;

// Initialize the grid
let grid = Array(gridSize).fill(null).map(() => Array(gridSize).fill(0));

// Draw the grid
function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
      ctx.strokeRect(x * cellSize, y * cellSize, cellSize, cellSize);
      if (grid[x][y] !== 0) {
        ctx.fillStyle = 'lightblue';
        ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
      }
    }
  }
}

// Add blocks (placeholder for now)
function spawnBlocks() {
  const blockContainer = document.getElementById('blocks-container');
  blockContainer.innerHTML = ''; // Clear existing blocks
  for (let i = 0; i < 3; i++) {
    const block = document.createElement('div');
    block.style.width = '50px';
    block.style.height = '50px';
    block.style.background = 'blue';
    block.style.margin = '5px';
    block.draggable = true;
    block.ondragstart = () => console.log('Dragging block!');
    blockContainer.appendChild(block);
  }
}

// Update score
function updateScore(points) {
  score += points;
  document.getElementById('score').textContent = `Score: ${score}`;
}

// Game loop
function gameLoop() {
  drawGrid();
  requestAnimationFrame(gameLoop);
}

// Initialize game
spawnBlocks();
gameLoop();
