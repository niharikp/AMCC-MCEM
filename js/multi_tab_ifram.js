function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";  // Hide all tabs
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";  // Show the current tab
    evt.currentTarget.className += " active";
    // Resizing Tableau Viz
    resizeTableauViz(tabName);
}

// This function checks the width and adjusts the viz size accordingly
function resizeTableauViz(tabName) {
    var divElement = document.getElementById('viz' + tabName);
    var vizElement = divElement.getElementsByTagName('object')[0];
    if (divElement.offsetWidth > 800) {
        vizElement.style.width = '600px';
        vizElement.style.height = '427px';
    } else if (divElement.offsetWidth > 500) {
        vizElement.style.width = '600px';
        vizElement.style.height = '427px';
    } else {
        vizElement.style.width = '100%';
        vizElement.style.height = '727px';
    }
}

// Trigger the default open tab
document.getElementById("defaultOpen").click();

