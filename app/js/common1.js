// build bar chart with chart.js


var city_lviv = document.getElementById("lviv");

var data = {
    labels: ["May 12, 03:00", "May 12, 06:00", "May 12, 09:00", "May 12, 12:00", "May 12, 15:00", "May 12, 18:00",
     "May 12, 21:00", "May 13, 00:00", "May 13, 03:00" ,"May 13, 06:00"],
    datasets: [
        {
            label: "temperature",
            backgroundColor: "#607d8b",
            borderColor: "#607d8b",
            borderWidth:1,
            borderSkipped:'top',
            hoverBackgroundColor: "#607d8b",
            hoverBorderColor: "#607d8b",
            data: [9, 9, 11, 12, 10, 8, 13, 11, 10, 10,],
        }
    ]
};
// options

var options = {
	legend: {
        display: false
    },
	animation:[ {
		duration:5000
	}
	],
	scales: {
            yAxes: [{
                ticks: {
                    max: 20,
                    min: 0,
                    stepSize: 5,
                },
                gridLines:{
                	drawBorder:false
                },             
                scaleLabel:{
                	display:false
                }             
            }],
            xAxes: [{   
                gridLines:{
                	display:false

                }          
            }]
        }    
};


var myBarChart_lviv = Chart.Bar(city_lviv,{
    type: 'bar',
    data:data,
    options:options
});

