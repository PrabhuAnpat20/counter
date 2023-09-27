let count = 0

document.getElementById("incbtn").onclick = function () {
    count += 1;
    document.getElementById("counter").innerHTML = count;

}
document.getElementById("decbtn").onclick = function () {
    count -= 1;
    document.getElementById("counter").innerHTML = count;

}
document.getElementById("resetbtn").onclick = function () {
    count =0;
    document.getElementById("counter").innerHTML = count;

}

