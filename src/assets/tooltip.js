document.querySelectorAll('.item-nav').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
      const tooltipId = this.dataset.tooltipTarget;
      const tooltip = document.getElementById(tooltipId);
      const iconRect = this.getBoundingClientRect();
      tooltip.style.left = iconRect.left + 'px';
      tooltip.style.top = (iconRect.top - tooltip.offsetHeight - 5) + 'px';
      tooltip.style.visibility = 'visible';
    });
  
    icon.addEventListener('mouseleave', function() {
      const tooltipId = this.dataset.tooltipTarget;
      const tooltip = document.getElementById(tooltipId);
      tooltip.style.visibility = 'hidden';
    });
  });