function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Store data in localStorage
    localStorage.setItem('formData', JSON.stringify(data));

    // Redirect to results.html
    window.location.href = 'results.html';
}
