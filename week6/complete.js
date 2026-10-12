async function loadData(url) {
  showSpinner();
  try {
    const res  = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    render(data);
  } catch (err) {
    showError(err.message);
  } finally {
    hideSpinner();
  }
}