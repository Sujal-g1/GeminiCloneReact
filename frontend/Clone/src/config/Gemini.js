async function runGenerativeModel(prompt) {
  try {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();

    if (!res.ok) return null;
    return data.text;
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  }
}

export default runGenerativeModel;
