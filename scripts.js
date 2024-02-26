document.addEventListener('DOMContentLoaded', function() {
    // Array to store image file names
    var imageFiles = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];

    // Function to populate select options with image names
    function populateSelect() {
        var select = document.getElementById("imageSelect");

        for (var i = 0; i < imageFiles.length; i++) {
            var option = document.createElement("option");
            option.text = imageFiles[i];
            select.add(option);
        }
    }

    // Call the function to populate select options
    populateSelect();

    // Change custom color button event listener
    document.getElementById("changeCustomColor").addEventListener('click', function() {
        var userInput = parseInt(document.getElementById("customNumber").value);
        var color = "";

        if (isNaN(userInput) || userInput < 0 || userInput > 100) {
            alert("Please enter a number between 1 and 100.");
            return;
        } else if (userInput >= 0 && userInput <= 20) {
            color = "green";
        } else if (userInput > 20 && userInput <= 40) {
            color = "blue";
        } else if (userInput > 40 && userInput <= 60) {
            color = "orange";
        } else if (userInput > 60 && userInput <= 80) {
            color = "purple";
        } else {
            color = "yellow";
        }

        document.body.style.backgroundColor = color;
        document.getElementById("studentID").innerText = "200549499";
    });

    // Change random color button event listener
    document.getElementById("changeRandomColor").addEventListener('click', function() {
        var randomNum = Math.floor(Math.random() * 100) + 1;
        var color = "";

        if (randomNum >= 0 && randomNum <= 20) {
            color = "green";
        } else if (randomNum > 20 && randomNum <= 40) {
            color = "blue";
        } else if (randomNum > 40 && randomNum <= 60) {
            color = "orange";
        } else if (randomNum > 60 && randomNum <= 80) {
            color = "purple";
        } else {
            color = "yellow";
        }

        document.body.style.backgroundColor = color;
    });

    // Select tag event listener
    document.getElementById("imageSelect").addEventListener('change', function() {
        var selectedImage = this.value;
        var imagePath = "img/" + selectedImage;

        // Display the selected image
        document.getElementById("imageDisplay").src = imagePath;
    });
});
