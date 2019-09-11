var d = document.getElementById("canvas");
var lienzo = d.getContext("2d");
var line1 = {
    color : "red",
    pointInit ,
    pointEnd : {x:100,y:100}
}
var DrawLine = (line) => {
    lienzo.beginPath();
    lienzo.strokeStyle = line.color;
    lienzo.moveTo(line.pointInit);
    lienzo.lineTo(line.pointEnd);
    lienzo.stroke();
    lienzo.closePath();
}
for (let i = 0; i < d.width; i++) {

    let line = {
        ...line1,
        pointInit: {x: 0, y:(10 * i)},
        pointEnd: {x: 0, y:(10 * (1+i))}
    }
    DrawLine(line);
}