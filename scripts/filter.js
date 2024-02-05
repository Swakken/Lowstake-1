document.addEventListener('DOMContentLoaded', function () {
    const filterForm = document.getElementById('filterForm');

    filterForm.addEventListener('change', function () {
        filterProducts();
    });

    function filterProducts() {
        let selectedValue = document.querySelector('input[name="productType"]:checked').value;

        let products = document.querySelectorAll('.product');
        products.forEach(product => {
            if (selectedValue === 'all' || product.classList.contains(selectedValue)) {
                product.style.display = '';
            } else {
                product.style.display = 'none';
            }
        });
    }

    // Initial filtering
    filterProducts();
});