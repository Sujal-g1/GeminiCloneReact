async function runGenerativeModel(prompt) {
  try {
    const res = await fetch("http://localhost:5050/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("API error:", data);
      return null;
    }

    return data.text;
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  }
}

export default runGenerativeModel;
