const container = document.querySelector(".data-container");

// function to generate bars
function generatebars(num = 20) {
	
//for loop to generate 20 bars
for (let i = 0; i < num; i += 1) {

	// To generate random values from 1 to 100
	const value = Math.floor(Math.random() * 100) + 1;

	// To create element "div"
	const bar = document.createElement("div");

	// To add class "bar" to "div"
	bar.classList.add("bar");

	// Provide height to the bar
	bar.style.height = `${value*3}px`;

	// Translate the bar towards positive X axis
	bar.style.transform = `translateX(${i * 30}px)`;
	
	// To create element "label"
	const barLabel = document.createElement("label");
    console.log(barLabel);

	// To add class "bar_id" to "label"
	barLabel.classList.add("bar_id");

	// Assign value to "label"
	barLabel.innerHTML = value;
    barLabel.style.color="black";
    barLabel.style.fontWeight="bold";
	// Append "Label" to "div"
	bar.appendChild(barLabel);

	// Append "div" to "data-container div"
	container.appendChild(bar);
}
}

// asynchronous function to perform "Selection Sort"
async function SelectionSort(delay = 300) {
let bars = document.querySelectorAll(".bar");
// Assign 0 to min_idx
var min_idx = 0;
for (var i = 0; i < bars.length; i += 1) {

	// Assign i to min_idx
	min_idx = i;

	// Provide white color to the ith bar
	bars[i].style.backgroundColor = "white";
	for (var j = i + 1; j < bars.length; j += 1) {

	// Provide blue color to the jth bar
	bars[j].style.backgroundColor = "rgb(221, 137, 10)";
		
	// To pause the execution of code for 300 milliseconds
	await new Promise((resolve) =>
		setTimeout(() => {
		resolve();
		}, 300)
	);

	// To store the integer value of jth bar to var1
	var val1 = parseInt(bars[j].childNodes[0].innerHTML);

	// To store the integer value of (min_idx)th bar to var2
	var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);
		
	// Compare val1 & val2
	if (val1 < val2) {
		if (min_idx !== i) {

		// Provide orange color to the (min-idx)th bar
		bars[min_idx].style.backgroundColor = "rgb(255, 235, 9)";
		}
		min_idx = j;
	} else {

		// Provide orange color to the jth bar
		bars[j].style.backgroundColor = "rgb(255, 235, 9)";
	}
	}

	// To swap ith and (min_idx)th bar
	var temp1 = bars[min_idx].style.height;
	var temp2 = bars[min_idx].childNodes[0].innerText;
	bars[min_idx].style.height = bars[i].style.height;
	bars[i].style.height = temp1;
	bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
	bars[i].childNodes[0].innerText = temp2;
	
	// To pause the execution of code for 300 milliseconds
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, 300)
	);

	// Provide blue color to the (min-idx)th bar
	bars[min_idx].style.backgroundColor = "rgb(221, 137, 10)";

	// Provide orange color to the ith bar
	bars[i].style.backgroundColor = " rgb(13, 180, 169)";
}

// To enable the button "Generate New Array" after final(sorted)
document.getElementById("Button1").disabled = false;
document.getElementById("Button1").style.backgroundColor = "#6f459e";

// To enable the button "Selection Sort" after final(sorted)
document.getElementById("Button2").disabled = false;
document.getElementById("Button2").style.backgroundColor = "#6f459e";
}

// asynchronous function to perform "Bubble Sort"
async function BubbleSort(delay = 300) {
    let bars = document.querySelectorAll(".bar");
    for (var i = 0; i < bars.length; i += 1) {
    
        for (var j = 0; j < bars.length-i-1; j += 1) {
            bars[j+1].style.backgroundColor = "white";

        // Provide orange color to the jth bar
        bars[j].style.backgroundColor = "rgb(221, 137, 10)";
            
        // To pause the execution of code for 300 milliseconds
        await new Promise((resolve) =>
            setTimeout(() => {
            resolve();
            }, 300)
        );
    
        // To store the integer value of jth bar to var1
        var val1 = parseInt(bars[j].childNodes[0].innerHTML);
    
        // To store the integer value of (min_idx)th bar to var2
        var val2 = parseInt(bars[j+1].childNodes[0].innerHTML);
            
        // Compare val1 & val2
        if (val2 < val1) {
    
        //Doing the swapping of variables
        var temp1 = bars[j+1].style.height;
        var temp2 = bars[j+1].childNodes[0].innerText;
        bars[j+1].style.height = bars[j].style.height;
        bars[j].style.height = temp1;
        bars[j+1].childNodes[0].innerText = bars[j].childNodes[0].innerText;
        bars[j].childNodes[0].innerText = temp2;
        bars[j+1].style.backgroundColor = "rgb(13, 180, 169)";
        }
        else
        bars[j+1].style.backgroundColor = "rgb(13, 180, 169)";
        }
    
        // To pause the execution of code for 300 milliseconds
        await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, 300)
        );
        bars[0].style.backgroundColor = "rgb(13, 180, 169)";
    }

// To enable the button "Generate New Array" after final(sorted)
document.getElementById("Button1").disabled = false;
document.getElementById("Button1").style.backgroundColor = "#6f459e";

// To enable the buttons after final(sorted)
document.getElementById("Button2").disabled = false;
document.getElementById("Button2").style.backgroundColor = "#6f459e";
document.getElementById("Button3").disabled = false;
document.getElementById("Button3").style.backgroundColor = "#6f459e";
document.getElementById("Button4").disabled = false;
document.getElementById("Button4").style.backgroundColor = "#6f459e";
}


// asynchronous function to perform "Insertion Sort"
async function InsertionSort(delay = 300) {
    let bars = document.querySelectorAll(".bar");
      // Provide blue colour to 0th bar
  bars[0].style.backgroundColor = "rgb(13, 180, 169)";
  for (var i = 1; i < bars.length; i += 1) {
  
    // Assign i-1 to j
    var j = i - 1;
  
    // To store the integer value of ith bar to key 
    var key = parseInt(bars[i].childNodes[0].innerHTML);
  
    // To store the ith bar height to height
    var height = bars[i].style.height;
     
    // For selecting section having id "ele"
    var bar_val=document.getElementById("ele")
  
    // For dynamically Updating the selected element
      bar_val.innerHTML=`<h3>Element Selected is :${key}</h3>`;
  
    //Provide orange color to the ith bar 
    bars[i].style.backgroundColor = "rgb(221, 137, 10)";
      
    // To pause the execution of code for 600 milliseconds
    await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 600)
  );
  
    // For placing selected element at its correct position 
    while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
        
      // Provide orange color to the jth bar
      bars[j].style.backgroundColor = "rgb(221, 137, 10)";
        
      // For placing jth element over (j+1)th element
      bars[j + 1].style.height = bars[j].style.height;
      bars[j + 1].childNodes[0].innerText = 
      bars[j].childNodes[0].innerText;
  
      // Assign j-1 to j
      j = j - 1;
  
      // To pause the execution of code for 600 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 600)
      );
        
      // Provide blue color to the sorted part
      for(var k=i;k>=0;k--){
        bars[k].style.backgroundColor = "rgb(13, 180, 169)";
      }
    }
  
    // Placing the selected element to its correct position
    bars[j + 1].style.height = height;
    bars[j + 1].childNodes[0].innerHTML = key;
       
    // To pause the execution of code for 600 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 600)
    );
      
    // Provide light green color to the ith bar
    bars[i].style.backgroundColor = "rgb(13, 180, 169)";
  }
  
  bar_val.innerHTML="<h3>Sorted!!!</h3>";
    
  // To enable the buttons
  // "Generate New Array" after final(sorted)
  document.getElementById("Button1").disabled = false;
  document.getElementById("Button1").style.backgroundColor = "#6f459e";
  
  // To enable the buttons
  // "Insertion Sort" after final(sorted)
  document.getElementById("Button2").disabled = false;
  document.getElementById("Button2").style.backgroundColor = "#6f459e";
  document.getElementById("Button3").disabled = false;
  document.getElementById("Button3").style.backgroundColor = "#6f459e";
  document.getElementById("Button4").disabled = false;
  document.getElementById("Button4").style.backgroundColor = "#6f459e";
}

// Call "generatebars" function
generatebars();

// function to generate new random array
function generate()
{
window.location.reload();
}

// function to disable the button
function disable()
{
// To disable the button "Generate New Array"
document.getElementById("Button1").disabled = true;
document.getElementById("Button1").style.backgroundColor = "#d8b6ff";

// To disable the buttons"
document.getElementById("Button2").disabled = true;
document.getElementById("Button2").style.backgroundColor = "#d8b6ff";

document.getElementById("Button3").disabled = true;
document.getElementById("Button3").style.backgroundColor = "#d8b6ff";

document.getElementById("Button4").disabled = true;
document.getElementById("Button4").style.backgroundColor = "#d8b6ff";
}
