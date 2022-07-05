Chart.defaults.color = "#FFFFFF";

const barCanvas = document.getElementById("barCanvas");

const barChart = new Chart(barCanvas, {
    type: "bar",
    data: {
        labels: ['1700', '1800', '1900', '2000',],
        datasets: [{
            label: '# of Votes',
            data: [107, 24, 19, 9],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});