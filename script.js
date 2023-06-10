
// Specify the folder path where your photos are located
var folderPath = "./ZooPics/";

// Specify the range of photo numbers
var startNumber = 934;
var endNumber = 1126;

// Create the HTML markup for the images
var html = '';
for (var i = startNumber; i <= endNumber; i++) {
    if (i === 1118) {
    continue; // Skip image with number 1118
    }
    var photoNumber = i.toString().padStart(4, '0');
    var photoSrc = folderPath + "DSC_" + photoNumber + ".JPG";

    html += '<div class="image" style="--clip-start: ellipse(0 0 at 0 0); --clip-end: ellipse(150% 150% at 0 0);">';
    html += '<img src="' + photoSrc + '" srcset="' + photoSrc + ' 1x, ' + photoSrc + ' 2x" alt="Photo ' + i + '">';
    html += '<img src="' + photoSrc + '" srcset="' + photoSrc + ' 1x, ' + photoSrc + ' 2x" alt="Photo ' + i + '">';
    html += '</div>';
}

// Append the HTML to the container element
var container = document.getElementById('imageContainer');
container.innerHTML = html;