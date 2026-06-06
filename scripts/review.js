document.addEventListener("DOMContentLoaded", () => {
    const formParams = new URLSearchParams(window.location.search);
    const validSubmission = formParams.has("productName") && formParams.has("rating") && formParams.has("installationDate");

    let reviewCount = parseInt(localStorage.getItem("reviewCountSubmit"), 10);
    if (Number.isNaN(reviewCount)) {
        reviewCount = 0;
    }

    if (validSubmission) {
        reviewCount += 1;
        localStorage.setItem("reviewCountSubmit", reviewCount);
    }

    // Write numerical metric inside container block UI element
    const counterDisplay = document.getElementById("submissionCounter");
    if (counterDisplay) {
        counterDisplay.textContent = reviewCount;
    }

    // Standard Common Footer Dynamic Info Insertion
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
});