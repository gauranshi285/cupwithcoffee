// 3D tilt - cup mouse se ghumega
const stage = document.getElementById('cupStage');
const cup = document.getElementById('cup3d');
stage.addEventListener('mousemove', (e) => {
  const r = stage.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5;
  const y = (e.clientY - r.top) / r.height - 0.5;
  cup.style.transform = `rotateY(${x * 35}deg) rotateX(${-y * 25}deg) scale(1.05)`;
});
stage.addEventListener('mouseleave', () => cup.style.transform = 'rotateY(0) rotateX(0)');

// Flavour change
const cupBody = document.getElementById('cupBody');
const cupName = document.getElementById('cupFlavourName');
const desc = document.getElementById('flavourDesc');
document.querySelectorAll('.flavour').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.flavour').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    cupBody.style.background = btn.dataset.color;
    cupName.textContent = btn.dataset.flavour;
    desc.textContent = btn.dataset.desc;
  });
});

// Calculator
const qty = document.getElementById('qty');
const totalEl = document.getElementById('total');
const waBtn = document.getElementById('waBtn');
const flavourSel = document.getElementById('calcFlavour');
function updateTotal(){
  const q = parseInt(qty.value) || 0;
  const total = q * 20;
  totalEl.textContent = '₹' + total;
  const msg = encodeURIComponent(`Hi CUP2EAT! Mujhe ${q} cups chahiye - Flavour: ${flavourSel.value}. Total: Rs ${total}. Please details bhejo!`);
  waBtn.href = `https://wa.me/919818192575?text=${msg}`;
}
qty.addEventListener('input', updateTotal);
flavourSel.addEventListener('change', updateTotal);
updateTotal();
