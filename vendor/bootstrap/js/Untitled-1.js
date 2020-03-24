
window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title:{
            text: "",
            horizontalAlign: "left"
        },
        data: [{
            type: "doughnut",
            startAngle: 60,
            //innerRadius: 60,
            indexLabelFontSize: 17,
            indexLabel: "{label} - #percent%",
            toolTipContent: "<b>{label}:</b> {y} (#percent%)",
            dataPoints: [
                { y: 2, label: "Easy" },
                { y: 16, label: "Somewhat Easy" },
                { y: 35, label: "Samowhat Hard" },
                { y: 27, label: "Hard"},
                { y: 20, label: "Difficult"},
                { y: 0, label: "Very Easy"}
            ]
        }]
    });
    chart.render();
    
    }