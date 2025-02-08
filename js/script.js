document.getElementById("survey-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents default submission

    let form = event.target;
    let formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            "Accept": "application/json"
        }
    }).then(response => {
        if (response.ok) {
            alert("Form submitted successfully.");
            form.reset(); // Cleans the form after submission
        } else {
            alert("There was an error submitting the form. Please try again.");
        }
    }).catch(error => {
        alert("There was a problem with the connection.");
    });
});
