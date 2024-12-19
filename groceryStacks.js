let groceryStack = [];
let maxItems = 5;

function peek() {
  // ... (peek function code from above) ...
}

function push(item) {
  // ... (push function code from above) ...
}

function pop() {
  // ... (pop function code from above) ...
}

function printStack() {
  // ... (printStack function code from above) ...
}


for (let i = 0; i < maxItems; i++) {
  let item = prompt(`Enter grocery item ${i + 1}:`);
  push(item);
}

pop();
peek();
