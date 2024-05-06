window.onload = function() {
    populateSelector();
};

function populateSelector() {
    const selector = document.getElementById('palSelector');
    pals.forEach(pal => {
        let option = new Option(pal.Pal, pal.Pal);
        selector.add(option);
    });
}

function displayPalData() {
    const selectedPal = document.getElementById('palSelector').value;
    const palData = pals.find(p => p.Pal === selectedPal);
    if (palData) {
        document.getElementById('palName').textContent = palData.Pal;
        document.getElementById('level50Hp').textContent = palData['Level 50 HP'];
        document.getElementById('level50HpScore').textContent = palData['Level 50 HP Score*'];
        // Update more fields as needed

        document.getElementById('palData').style.display = 'block';
    }
}
function displayDetails(palName) {
    const pal = pals.find(p => p.Pal === palName);
    if (pal) {
        document.getElementById('detailName').textContent = pal.Pal;
        document.getElementById('detailHp').textContent = pal['Level 50 HP'];
        document.getElementById('detailHpScore').textContent = pal['Level 50 HP Score*'];
        document.getElementById('detailAttack').textContent = pal['Level 50 Attack'];
        document.getElementById('detailDefense').textContent = pal['Level 50 Defense'];
        // Continue for other properties

        document.getElementById('palDetails').style.display = 'block';  // Show the details section
    }
}

// Modify the existing populateTable function to add an onclick event to each row
function populateTable(data) {
    const tableBody = document.getElementById('data-table').getElementsByTagName('tbody')[0];
    data.forEach(item => {
        let row = tableBody.insertRow();
        row.onclick = function() { displayDetails(item.Pal); };  // Add click event to each row
        Object.values(item).forEach(text => {
            let cell = row.insertCell();
            cell.textContent = text;
        });
    });
}
