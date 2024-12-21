document.addEventListener('DOMContentLoaded', () => {
    const socialIcons = document.querySelectorAll('.social-links a');

    // Tooltip functionality
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', (e) => {
            const tooltip = document.createElement('span');
            tooltip.className = 'tooltip';
            tooltip.textContent = icon.getAttribute('data-tooltip');
            tooltip.style.position = 'absolute';
            tooltip.style.backgroundColor = '#000';
            tooltip.style.color = '#fff';
            tooltip.style.padding = '5px 10px';
            tooltip.style.borderRadius = '5px';
            tooltip.style.top = `${e.pageY - 30}px`;
            tooltip.style.left = `${e.pageX + 10}px`;
            tooltip.style.zIndex = '1000';
            document.body.appendChild(tooltip);

            icon.addEventListener('mouseout', () => {
                tooltip.remove();
            });
        });
    });
});
