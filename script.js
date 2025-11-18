let files = [];

function uploadFile() {
  const input = document.getElementById('fileInput');
  if (!input.files[0]) {
    alert('Bitte eine Datei auswählen!');
    return;
  }
  const fileName = input.files[0].name;
  files.push(fileName);
  showFiles();
}

function deleteFile(index) {
  files.splice(index, 1);
  showFiles();
}

function showFiles() {
  const list = document.getElementById('fileList');
  list.innerHTML = '';
  for (let i = 0; i < files.length; i++) {
    const div = document.createElement('div');
    div.className = 'fileItem';
    div.innerHTML = `<span>${files[i]}</span> <button onclick="deleteFile(${i})">Löschen</button>`;
    list.appendChild(div);
  }
}