const output_label : HTMLLabelElement = document.getElementById("compatibility-check") as HTMLLabelElement;

if (navigator.gpu) {
    output_label.innerText = "Your browser supports WebGPU!";
} else {
    output_label.innerText = "Your browser does not support WebGPU!";
}