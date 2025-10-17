// 1️⃣ Variables & Arrays
let yarns = [];

// 2️⃣ DOM Elements
const yarnForm = document.getElementById('yarnForm');
const yarnTable = document.querySelector('#yarnTable tbody');
const searchInput = document.getElementById('searchInput');

// 3️⃣ Event Listener
if (yarnForm) {
  yarnForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // 4️⃣ Objects + Strings + Arithmetic
    const yarn = {
      brand: document.getElementById('brand').value.trim(),
      color: document.getElementById('color').value.trim(),
      fiber: document.getElementById('fiber').value.trim(),
      weight: document.getElementById('weight').value.trim(),
      quantity: parseInt(document.getElementById('quantity').value),
      purchaseDate: document.getElementById('purchaseDate').value
    };

    yarns.push(yarn);
    displayYarns();
    yarnForm.reset();
  });
}

// 5️⃣ Display Function (Loops + DOM)
function displayYarns(filtered = yarns) {
  if (!yarnTable) return;
  yarnTable.innerHTML = "";
  for (const [index, yarn] of filtered.entries()) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${yarn.brand}</td>
      <td>${yarn.color}</td>
      <td>${yarn.fiber}</td>
      <td>${yarn.weight}</td>
      <td>${yarn.quantity}</td>
      <td>${yarn.purchaseDate}</td>
      <td>
        <button onclick="editYarn(${index})">Edit</button>
        <button onclick="deleteYarn(${index})">Delete</button>
      </td>`;
    yarnTable.appendChild(row);
  }
}

// 6️⃣ Delete Yarn (Control Flow)
function deleteYarn(index) {
  if (confirm("Delete this yarn?")) {
    yarns.splice(index, 1);
    displayYarns();
  }
}

// 7️⃣ Edit Yarn (Object manipulation)
function editYarn(index) {
  const yarn = yarns[index];
  document.getElementById('brand').value = yarn.brand;
  document.getElementById('color').value = yarn.color;
  document.getElementById('fiber').value = yarn.fiber;
  document.getElementById('weight').value = yarn.weight;
  document.getElementById('quantity').value = yarn.quantity;
  document.getElementById('purchaseDate').value = yarn.purchaseDate;
  deleteYarn(index);
}

// 8️⃣ Search (String + Logical Operator)
if (searchInput) {
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filtered = yarns.filter(
      (yarn) =>
        yarn.brand.toLowerCase().includes(query) ||
        yarn.color.toLowerCase().includes(query)
    );
    displayYarns(filtered);
  });
}

// 9️⃣ Async Programming Example
async function saveToServer() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("✅ Yarns saved to server!");
      resolve();
    }, 1000);
  });
}
