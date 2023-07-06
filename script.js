document.addEventListener("DOMContentLoaded", function () {
  // Chart 1: Financial Summary
  const canvas1 = document.getElementById("pieChart1");
  const chartData1 = {
    labels: ["Monthly Income", "Total Monthly Expenses", "Fixed Deposit"],
    datasets: [
      {
        label: "Financial Summary",
        data: [5000, 3000, 2000],
        backgroundColor: ["#6c5b78", "#f4b7b7", "#c0c0c0"],
        borderWidth: 1,
      },
    ],
  };
  new Chart(canvas1, {
    type: "pie",
    data: chartData1,
    options: {
      responsive: true,
      legend: {
        position: "bottom",
      },
    },
  });

  // Chart 2: Monthly Expenses
  const canvas2 = document.getElementById("pieChart2");
  const chartData2 = {
    labels: ["Rent", "Utilities", "Food", "Entertainment", "Savings"],
    datasets: [
      {
        label: "Monthly Expenses",
        data: [1000, 500, 300, 200, 700],
        backgroundColor: [
          "#6c5b78",
          "#9c89b8",
          "#b8bedd",
          "#e4c1f9",
          "#f2f2f2",
        ],
        borderWidth: 1,
      },
    ],
  };
  new Chart(canvas2, {
    type: "pie",
    data: chartData2,
    options: {
      responsive: true,
      legend: {
        position: "bottom",
      },
    },
  });
});
