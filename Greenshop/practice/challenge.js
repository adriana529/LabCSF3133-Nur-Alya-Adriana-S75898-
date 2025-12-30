// Data array for Top Projects
const projects = [
  { id: 1, name: 'SEO Audit', price: 'RM500' },
  { id: 2, name: 'UI/UX Design', price: 'RM800' },
  { id: 3, name: 'Landing Page', price: 'RM300' }
];

// Render table
const tbody = document.querySelector('#projects-table tbody');
projects.forEach(project => {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${project.name}</td>
    <td>${project.price}</td>
    <td><button class="btn btn-success request-btn">Request Quote</button></td>
  `;
  tbody.appendChild(tr);
});

// Scroll to form on button click
document.addEventListener('click', function(e) {
  if(e.target && e.target.classList.contains('request-btn')) {
    const form = document.getElementById('quoteForm');
    if(form) form.scrollIntoView({ behavior: 'smooth' });
  }
});

// Form validation
document.getElementById('quoteForm').querySelector('form').addEventListener('submit', function(e) {
  const voucher = document.getElementById('voucherCode').value;
  if(!voucher.startsWith('DEV')) {
    alert('Invalid Voucher Code');
    e.preventDefault(); // prevent submission
  }
});
