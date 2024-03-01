document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('nameForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get values from input fields
        var names = [];
        for (var i = 1; i <= 5; i++) {
            var name = document.getElementById('name' + i).value.trim();
            if (name !== '') {
                names.push(name);
            }
        }

        if (names.length > 0) {
            // Pick a random name from the array
            var randomIndex = Math.floor(Math.random() * names.length);
            var randomName = names[randomIndex];
            
            // Display the result with styling
            document.getElementById('result').innerHTML = "<div class='result-message'> <strong>" + randomName + "</strong> will have to pay today. ;) </div>";
        } else {
            // If no names are entered
            document.getElementById('result').innerHTML = "<div class='result-message'>Please enter at least one name.</div>";
        }
    });
});
