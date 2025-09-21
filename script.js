// Theme toggle
function toggleTheme() {
  document.body.classList.toggle("light-mode");
  document.body.classList.toggle("dark-mode");
}

// Clear form
function clearForm() {
  document.getElementById('age').value = '';
  document.getElementById('income').value = '';
  document.getElementById('gender').value = 'male';
  document.getElementById('category').value = 'general';
  document.getElementById('state').value = '';
  document.getElementById('occupation').value = '';
  document.getElementById('results').innerHTML = '<h2>Results</h2><p>Enter your profile and tap <b>Find My Benefits</b>.</p>';
}

// Find benefits
async function findBenefits() {
  const webhookURL = 'https://mmmhd.app.n8n.cloud/webhook-test/check-eligibility';

  const userProfile = {
    age: document.getElementById('age').value,
    income: document.getElementById('income').value,
    gender: document.getElementById('gender').value.toLowerCase(),
    category: document.getElementById('category').value.toLowerCase(),
    state: document.getElementById('state').value.toLowerCase(),
    occupation: document.getElementById('occupation').value.toLowerCase(),
  };

  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '<h3>🔎 Searching for your benefits... Please wait...</h3>';

  try {
    const response = await fetch(webhookURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userProfile),
    });

    if (!response.ok) throw new Error(`Network error: ${response.statusText}`);
    const data = await response.json();

    if (data.success && data.recommended_schemes && data.recommended_schemes.length > 0) {
      resultsDiv.innerHTML = '<h2>Here are your recommended schemes:</h2>';
      data.recommended_schemes.forEach(scheme => {
        if (!scheme.scheme_name) return; // Skip untitled schemes
        const schemeDiv = document.createElement('div');
        schemeDiv.className = 'scheme';
        const schemeTitle = scheme.scheme_link
          ? `<a href="${scheme.scheme_link}" target="_blank">${scheme.scheme_name}</a>`
          : scheme.scheme_name;
        schemeDiv.innerHTML = `<h4>${schemeTitle}</h4>${scheme.scheme_description ? `<p>${scheme.scheme_description}</p>` : ''}`;
        resultsDiv.appendChild(schemeDiv);
      });
    } else {
      resultsDiv.innerHTML = '<h3>Sorry, no eligible schemes were found.</h3>';
    }

  } catch (error) {
    console.error('Error:', error);
    resultsDiv.innerHTML = '<h3>An error occurred while checking for schemes. Please try again later.</h3>';
  }
}
