function hexToRGB(hex, alpha) {
	var r = parseInt(hex.slice(1, 3), 16),
		g = parseInt(hex.slice(3, 5), 16),
		b = parseInt(hex.slice(5, 7), 16);

	if (alpha) {
		return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
	} else {
		return 'rgb(' + r + ', ' + g + ', ' + b + ')';
	}
}

// ##############################
// // // general variables for charts
// #############################

const chartColor = '#FFFFFF';

const data = [ 0, 150, 100, 190, 130, 129, 190, 160, 120, 140, 190, 95 ];

// General configuration for the charts with Line gradientStroke
const gradientChartOptionsConfiguration = {
	maintainAspectRatio: false,
	legend: {
		display: false
	},
	tooltips: {
		bodySpacing: 4,
		mode: 'nearest',
		intersect: 0,
		position: 'nearest',
		xPadding: 10,
		yPadding: 10,
		caretPadding: 10
	},
	responsive: 1,
	scales: {
		yAxes: [
			{
				display: 0,
				ticks: {
					display: false,
					maxTicksLimit: 7
				},
				gridLines: {
					zeroLineColor: 'transparent',
					drawTicks: false,
					display: false,
					drawBorder: false
				}
			}
		],
		xAxes: [
			{
				display: 0,
				ticks: {
					display: false
				},
				gridLines: {
					zeroLineColor: 'transparent',
					drawTicks: false,
					display: false,
					drawBorder: false
				}
			}
		]
	},
	layout: {
		padding: { left: 0, right: 0, top: 15, bottom: 15 }
	}
};

// ##############################
// // // Dashboard view - Panel chart
// #############################

const dashboardPanelChart = {
	data: (canvas) => {
		const ctx = canvas.getContext('2d');
		var chartColor = '#FFFFFF';
		var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
		gradientStroke.addColorStop(0, '#80b6f4');
		gradientStroke.addColorStop(1, chartColor);
		var gradientFill = ctx.createLinearGradient(0, 200, 0, 50);
		gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
		gradientFill.addColorStop(1, 'rgba(255, 255, 255, 0.14)');

		return {
			labels: [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC' ],
			datasets: [
				{
					label: 'Data',
					borderColor: chartColor,
					pointBorderColor: chartColor,
					pointBackgroundColor: '#2c2c2c',
					pointHoverBackgroundColor: '#2c2c2c',
					pointHoverBorderColor: chartColor,
					pointBorderWidth: 1,
					pointHoverRadius: 7,
					pointHoverBorderWidth: 2,
					pointRadius: 5,
					fill: true,
					backgroundColor: gradientFill,
					borderWidth: 2,
					data: data
				}
			]
		};
	},
	options: {
		layout: {
			padding: {
				left: 20,
				right: 20,
				top: 0,
				bottom: 0
			}
		},
		maintainAspectRatio: false,
		tooltips: {
			backgroundColor: '#fff',
			titleFontColor: '#333',
			bodyFontColor: '#666',
			bodySpacing: 4,
			xPadding: 12,
			mode: 'nearest',
			intersect: 0,
			position: 'nearest'
		},
		legend: {
			position: 'bottom',
			fillStyle: '#FFF',
			display: false
		},
		scales: {
			yAxes: [
				{
					ticks: {
						fontColor: 'rgba(255,255,255,0.4)',
						fontStyle: 'bold',
						beginAtZero: true,
						maxTicksLimit: 5,
						padding: 10
					},
					gridLines: {
						drawTicks: true,
						drawBorder: false,
						display: true,
						color: 'rgba(255,255,255,0.1)',
						zeroLineColor: 'transparent'
					}
				}
			],
			xAxes: [
				{
					gridLines: {
						display: false,
						color: 'rgba(255,255,255,0.1)'
					},
					ticks: {
						padding: 10,
						fontColor: 'rgba(255,255,255,0.4)',
						fontStyle: 'bold'
					}
				}
			]
		}
	}
};

// ##############################
// // // Dashboard view - Users Suggestions - Card
// #############################

const UsersSuggestions = {
	data: (canvas) => {
		var ctx = canvas.getContext('2d');
		var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
		gradientStroke.addColorStop(0, '#80b6f4');
		gradientStroke.addColorStop(1, chartColor);
		var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
		gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
		gradientFill.addColorStop(1, 'rgba(249, 99, 59, 0.40)');
		return {
			labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
			datasets: [
				{
					label: 'Active Users',
					borderColor: '#f96332',
					pointBorderColor: '#FFF',
					pointBackgroundColor: '#f96332',
					pointBorderWidth: 2,
					pointHoverRadius: 4,
					pointHoverBorderWidth: 1,
					pointRadius: 4,
					fill: true,
					backgroundColor: gradientFill,
					borderWidth: 2,
					data: [ 542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630 ]
				}
			]
		};
	},
	options: gradientChartOptionsConfiguration
};

module.exports = {
	dashboardPanelChart,
	UsersSuggestions
};
