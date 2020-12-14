d3.csv("labels.csv", function(data){
    
    var uncertain_values = []
    var certain_values = []

    data.forEach(m=>{
        if (m.uncertain == 1){
            uncertain_values.push(m.label)
        } else {
            certain_values.push(m.label)
        }
    })

    var order = uncertain_values.sort(function(a, b){return a.length - b.length});
    console.log(order);

    var order2 = certain_values.sort(function(a, b){return a.length - b.length});
    // console.log(order2);
    
    data.forEach(element => {
        
        if (element.uncertain == 1){
            var i = order.indexOf(element.label);
            var y = 52+i*24;
            var label = element.label.replaceAll(" ","")
            // console.log(label)

            d3.select("#viz")
            .append("text")
            .attr("id",label)
            .attr("class","uncertain_label")
            .text(element.label)
            .attr("y",y)
            .attr("x",840)
            .on("mousemove", function (t) {
                d3.selectAll(`#${label}rect`).style("stroke","#F88058").style("stroke-width","3px")
                d3.select("#uncertain_value").text(`${element.percent}%`)
                d3.select("#uncertain_text1").text(`Banned at`)
                d3.select("#uncertain_text2").text(`of schools`)
            }).on("mouseout", function (t) {
                d3.selectAll(`#${label}rect`).style("stroke","none")
                d3.select("#uncertain_value").text("")
                d3.select("#uncertain_text1").text(``)
                d3.select("#uncertain_text2").text(``)
            });

            d3.select("#viz")
             .append("rect")
             .attr("id",`${label}rect`)
             .attr("class","uncertain_rect")
             .attr("width", element.width)
             .attr("height",element.height)
             .attr("x",element.x)
             .attr("y",element.y)

            if (element.back == 2 && element.label != "areas typically covered by undergarments") {
                d3.select("#viz")
                .append("rect")
                .attr("id",`${label}rect`)
                .attr("class","uncertain_rect")
                .attr("width", element.width)
                .attr("height",element.height)
                .attr("x",parseInt(element.x)+200)
                .attr("y",element.y)
            } else if (element.label == "areas typically covered by undergarments"){
                d3.select("#viz")
                .append("rect")
                .attr("id",`${label}rect`)
                .attr("class","uncertain_rect")
                .attr("width", 89)
                .attr("height",55)
                .attr("x",574)
                .attr("y",230)
            } else {}
        } else {
            var i = order2.indexOf(element.label);
            var y = 52+i*24;
            var label = element.label.replaceAll(" ","")
            var op = (10000/153)*parseFloat(element.percent)/100+(3040/153)
            
            d3.select("#viz")
            .append("text")
            .attr("id",label)
            .attr("class","certain_label")
            .text(element.label)
            .attr("y",y)
            .attr("x",205)
            .on("mousemove", function (t) {
                d3.selectAll(`#${label}rect`).style("stroke","#4B8077").style("stroke-width","3px")
                d3.select("#certain_value").text(`${element.percent}%`)
                d3.select("#certain_text1").text(`Banned at`)
                d3.select("#certain_text2").text(`of schools`)
            }).on("mouseout", function (t) {
                d3.selectAll(`#${label}rect`).style("stroke","none")
                d3.select("#certain_value").text("")
                d3.select("#certain_text1").text(``)
                d3.select("#certain_text2").text(``)
            });
            
            d3.select("#viz")
             .append("rect")
             .attr("id",`${label}rect`)
             .attr("class","certain_rect")
             .attr("width", element.width)
             .attr("height",element.height)
             .attr("x",element.x)
             .attr("y",element.y)
             .style("fill-opacity",op+"%")
            // .style("fill-opacity","80%")

            if (element.back == 2) {
                d3.select("#viz")
                .append("rect")
                .attr("id",`${label}rect`)
                .attr("class","certain_rect")
                .attr("width", element.width)
                .attr("height",element.height)
                .attr("x",parseInt(element.x)+200)
                .attr("y",element.y)
                .style("fill-opacity",op+"%")
            } else {}

            if (element.number == 2){

                if (element.label == "hips"){
                    var x_val = parseInt(element.x)+67
                } else if (element.label == "sides"){
                    var x_val = parseInt(element.x)+62
                } else if (element.label == "armpits"){
                    var x_val = parseInt(element.x)+75
                } else if (element.label == "nipples"){
                    var x_val = parseInt(element.x)+32
                } else if (element.label == "shoulders"){
                    var x_val = parseInt(element.x)+82
                } else {
                    var x_val = parseInt(element.x)+52
                }

                d3.select("#viz")
                .append("rect")
                .attr("id",`${label}rect`)
                .attr("class","certain_rect")
                .attr("width", element.width)
                .attr("height",element.height)
                .attr("x",x_val)
                .attr("y",element.y)
                .style("fill-opacity",op+"%")
                // .style("fill-opacity","50%")
   
               if (element.back == 2) {
                   d3.select("#viz")
                   .append("rect")
                   .attr("id",`${label}rect`)
                   .attr("class","certain_rect")
                   .attr("width", element.width)
                   .attr("height",element.height)
                   .attr("x",x_val+200)
                   .attr("y",element.y)
                   .style("fill-opacity",op+"%")
               } else {}  
            } else {}
        }
    });
})

// load data (d3.csv)

//add uncertain terms

//add pixelation legend

//if front/back button
//add appropriate svgs for male/female silhouette

//pixelate according to data value (pixelate.js)
//add hover over with label and value