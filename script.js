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
