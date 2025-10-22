document.getElementById("loadBtn").addEventListener("click", loadCategories);

function loadCategories() {
  fetch("https://coursera-jhu-default-rtdb.firebaseio.com/categories.json")
    .then(res => res.json())
    .then(data => showCategories(data))
    .catch(() => document.getElementById("content").innerText = "Error loading data");
}

function showCategories(categories) {
  let html = "<h2>Menu Categories</h2>";
  categories.forEach(cat => {
    html += `<div class="category">
               <h3>${cat.name}</h3>
               <p>Short name: ${cat.short_name}</p>
             </div>`;
  });
  document.getElementById("content").innerHTML = html;
}
