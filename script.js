// Wait for the HTML content to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Register the datalabels plugin to be used in all charts
    Chart.register(ChartDataLabels);

    // --- 1. GPA and CGPA Trend Chart ---
    const gpaTrendCtx = document.getElementById('gpaTrendChart').getContext('2d');
    new Chart(gpaTrendCtx, {
        type: 'line',
        data: {
            labels: ["F20", "S21", "F21", "S22", "F22", "S23", "F23", "S24", "F24", "S25"],
            datasets: [{
                label: 'Semester GPA',
                data: [3.66, 3.57, 3.17, 3.17, 3.18, 2.90, 2.16, 2.93, 3.10, 3.35],
                borderColor: 'rgb(54, 162, 235)',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                tension: 0.1
            }, {
                label: 'Cumulative GPA',
                data: [3.66, 3.61, 3.47, 3.39, 3.35, 3.27, 3.11, 3.09, 3.09, 3.11],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                tension: 0.1
            }]
        },
        options: {
            plugins: {
                datalabels: {
                    align: 'end',
                    anchor: 'end',
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    borderRadius: 4,
                    font: { weight: 'bold' }
                }
            },
            scales: {
                y: { suggestedMin: 2.0, suggestedMax: 4.0 }
            }
        }
    });

    // --- 2. Grade Distribution Histogram ---
    const histogramCtx = document.getElementById('histogramChart').getContext('2d');
    new Chart(histogramCtx, {
        type: 'bar',
        data: {
            labels: ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D"],
            datasets: [{
                label: 'Grade Count',
                data: [7, 3, 6, 10, 4, 6, 1, 2, 2, 2, 3],
                backgroundColor: [
                    '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', 
                    '#FF9800', '#FF5722', '#F44336', '#E91E63', '#9C27B0', '#673AB7'
                ]
            }]
        },
        options: {
            plugins: {
                legend: { display: false },
                datalabels: {
                    anchor: 'end',
                    align: 'top',
                    font: { weight: 'bold' }
                }
            },
            // UPDATED SCALES FOR Y-AXIS
            scales: {
                y: {
                    min: 0,
                    max: 12
                }
            }
        }
    });

    // --- 3. Grade Distribution Pie Chart ---
    const pieCtx = document.getElementById('pieChart').getContext('2d');
    new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D"],
            datasets: [{
                label: 'Grade Distribution',
                data: [7, 3, 6, 10, 4, 6, 1, 2, 2, 2, 3],
            }]
        },
        options: {
            plugins: {
                datalabels: {
                    formatter: (value, ctx) => {
                        let sum = 0;
                        let dataArr = ctx.chart.data.datasets[0].data;
                        dataArr.map(data => { sum += data; });
                        let percentage = (value * 100 / sum).toFixed(1) + "%";
                        return percentage;
                    },
                    color: '#fff',
                    font: { weight: 'bold' }
                }
            }
        }
    });
});
