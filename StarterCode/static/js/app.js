// from data.js
var tableData = data;
var tbody = d3.select("tbody")

// MY CODE HERE!
// CREATE TABLE AND ADD ROWS FOR EACH OBJECT WITHIN THE ARRAY
data.forEach((row)=> {
    console.log(row)
    tableRow=tbody.append("tr")
    Object.values(row).forEach((obj)=>{
        tableRow.append("td").text(obj)
        console.log(obj)
       

    })

})
// LOOP THRU EACH OBJECT AND FILTER THRU DATA FOR INPUT DATE/CITY/STATE/COUNTRY/SHAPE 
function buildTable(){
// DELETE DATA FROM PREVIOUS SEARCH AKA CLEAR TABLE    
    tbody.html("")
    var date = d3.select("#datetime").property("value")
    var city = d3.select("#city").property("value")
    var state = d3.select("#state").property("value")
    var country = d3.select("#country").property("value")
    var shape = d3.select("#shape").property("value")
    filterData = data.filter(obj => obj.datetime == date)
    filterData = filterData.filter(obj => obj.city == city)
    filterData = filterData.filter(obj => obj.state == state)
    filterData = filterData.filter(obj => obj.country == country)
    filterData = filterData.filter(obj => obj.shape == shape)
    filterData.forEach((row)=> {
        console.log(row)
        tableRow=tbody.append("tr")
        Object.values(row).forEach((obj)=>{
            tableRow.append("td").text(obj)

            console.log(obj)
               
        })
    
    })


}
// WHEN BUTTON IS CLICKED BUILD THE TABLE
d3.select("#filter-btn").on("click",buildTable)