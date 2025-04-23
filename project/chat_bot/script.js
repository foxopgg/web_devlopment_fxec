async function getChatGPTReply(userMessage) {
    const apiKey = "YOUR_OPENAI_API_KEY"; // NEVER expose this in real apps
  
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful chat assistant." },
          { role: "user", content: userMessage }
        ]
      })
    });
  
    const data = await response.json();
    return data.choices[0].message.content;
  }
  