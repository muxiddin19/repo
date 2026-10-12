async function loadJoke() {
  const status = document.getElementById('status');
  status.textContent = 'Loading…';

  try {
    const res  = await fetch('https://official-joke-api.appspot.com/random_joke');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    document.getElementById('joke-area').innerHTML =
      `<p><strong>${data.setup}</strong></p>
       <p>${data.punchline}</p>`;

  } catch (err) {
    status.textContent = 'Error: ' + err.message;

  } finally {
    if (!status.textContent.startsWith('Error'))
      status.textContent = '';
  }
}