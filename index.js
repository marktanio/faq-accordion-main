document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentItem = header.parentElement;
            const currentContent = header.nextElementSibling;
console.log(currentItem)
            // Toggle the current accordion item
            currentContent.style.display = currentContent.style.display === 'block' ? 'none' : 'block';

            // Close other accordion items
            document.querySelectorAll('.accordion-section').forEach(item => {
                if (item !== currentItem) {
                    item.querySelector('.accordion-content').style.display = 'none';
                }
            });
        });
    });
});
