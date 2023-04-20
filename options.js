document.addEventListener('DOMContentLoaded', loadOptions);
document.getElementById('save-options').addEventListener('click', saveOptions);

function loadOptions() {
  chrome.storage.sync.get('logo', (data) => {
    document.getElementById('logo-selection').value = data.logo || 'swan';
  });
}

function saveOptions() {
  const logo = document.getElementById('logo-selection').value;
  chrome.storage.sync.set({ logo }, () => {
    console.log('Options saved!');
  });

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'updateLogo' });
  });
}
