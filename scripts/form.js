// Product Array Data Structure provided by Assignment Instruction
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("productName");

    // Dynamic Population of Product Dropdown Menu options
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement("option");
            // Set element attribute values per requirements:
            // "array's id is used for the value field"
            option.value = product.id;
            // "array's name field is used for the select option display"
            option.textContent = capitalizeString(product.name);
            productSelect.appendChild(option);
        });
    }

    // Standard Common Footer Dynamic Info Insertion
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
});

// Helper formatting function to capitalize product names nicely
function capitalizeString(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}