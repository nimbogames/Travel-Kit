
fetch('alerts.json')
    .then(response => response.json())
    .then(data => {
        const alertBox = document.getElementById('alerts');
        alertBox.innerHTML = data.alerts.map(alert => `<p>${alert}</p>`).join('');
    });
