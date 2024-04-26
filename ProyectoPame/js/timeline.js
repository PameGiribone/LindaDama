const frameworks = [
    {
        name: "PREMIO: STORM DANGER (2015)",
        description: "Posicion N° 1 - Tiempo de carrera 1'11''96",
        date: "12-03-2022"	
    },
    {
        name: "PREMIO: ARTIC SUN (2007)",
        description: "Posicion N° 1 - Tiempo de carrera 1'25''74",	
        date: "09-04-2022"
    },
    {
        name: "PREMIO: STORM DANGER (2015)",
        description: "Posicion N° 1 - Tiempo de carrera 1'21''78",
        date: "05-11-2022"
    },
    {
        name: "PREMIO: STORM DANGER (2015)",
        description: "Posicion N° 1 - Tiempo de carrera 1'27''88",
        date: "19-11-2022"
    },
    {
        name: "PREMIO: STORM DANGER (2015)",
        description: "Posicion N° 1 - Tiempo de carrera 1'22''41",
        date: "17-12-2022"
    },
    {
        name: "PREMIO: STORM DANGER (2015)",
        description: "Posicion N° 1 - Tiempo de carrera 1'27''75",
        date: "22-01-2023"
    },
    {
        name: "PREMIO: STORM DANGER (2015)",
        description: "Posicion N° 1 - Tiempo de carrera 1'10''82",
        date: "09-07-2023"
    },
    {
        name: "PREMIO: STORM DANGER (2015)",
        description: "Posicion N° 1 - Tiempo de carrera 1'36''28",
        date: "17-09-2023"
    },
    {
        name: "PREMIO: STORM DANGER (2015)",
        description: "Posicion N° 1 - Tiempo de carrera 1'36''02",
        date: "20-10-2023"
    },
    {
        name: "PREMIO: STORM DANGER (2015)",
        description: "Posicion N° 1 - Tiempo de carrera 1'29''26",
        date: "10-12-2023"
    },
    {
        name: "PREMIO: STORM DANGER (2015)",
        description: "Posicion N° 1 - Tiempo de carrera 1'29''49",
        date: "21-01-2024"
    },
    {
        name: "PREMIO: STORM DANGER (2015)",
        description: "Posicion N° 1 - Tiempo de carrera 1'24''11",
        date: "14-04-2024"
    },
    

]

let html = "";	
frameworks.forEach(e=>{
    html += "<div class='child'><div class='content'><h4>"+e.name+"</h4><p>"+e.description+"</p><p>"+e.date+"</p></div>"
})
divLine.innerHTML = html;