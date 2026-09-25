    // CHANGE THIS EMAIL ADDRESS in both the page content and here.
    const CONTACT_EMAIL = 'reservations@venueandstay.com';
    const menuBtn = document.getElementById('menuBtn');
    const mobileNav = document.getElementById('mobileNav');
    menuBtn.addEventListener('click', () => { const open = mobileNav.classList.toggle('open'); menuBtn.setAttribute('aria-expanded', String(open)); menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); });
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { mobileNav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }));
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('inquiryForm').addEventListener('submit', event => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const lines = ['Name: ' + data.get('name'), 'Email: ' + data.get('email'), 'Company: ' + (data.get('company') || 'N/A'), 'Request: ' + data.get('type'), 'Location: ' + (data.get('location') || 'Not provided'), 'Dates: ' + (data.get('dates') || 'Not provided'), '', 'Details:', data.get('message')];
      window.location.href = 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent('Venue & Stay inquiry — ' + data.get('name')) + '&body=' + encodeURIComponent(lines.join('\n'));
    });
