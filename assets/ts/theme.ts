export {};

function light_dark(): void {
  let body = document.querySelector('body');
  let btn = document.querySelector('.toggle-light-dark-theme');
  if (!body || !btn) return;

  // The original classList string comparison was buggy, using contains() is safer.
  if (body.classList.contains('bg-light')) {
    body.classList.toggle('bg-dark');
    body.classList.toggle('bg-light');
    btn.innerHTML = "Toogle to Dark Theme";
  } else {
    body.classList.toggle('bg-dark');
    body.classList.toggle('bg-light');
    btn.innerHTML = "Toogle to light theme";
  }
}
