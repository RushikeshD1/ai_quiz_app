export async function POST(req) {
  try {
    const { answers } = await req.json();

    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "openai/gpt-4o-mini",

        // 🔥 THIS IS THE KEY UPGRADE
        response_format: { type: "json_object" },

        messages: [
          {
            role: "user",
            content: `
You are a Google product expert.

Analyze the user answers and return structured JSON.

{
  "persona": "short descriptive persona",
  "recommendations": ["Google product names"],
  "reason": "short explanation"
}

User answers:
${JSON.stringify(answers)}
`
          }
        ]
      })
    });

    const data = await res.json();

    console.log(
  "AI CONTENT:",
  data?.choices?.[0]?.message?.content
);
    const result = data?.choices?.[0]?.message?.content;

    if (!result) {
      throw new Error("No AI response");
    }

    // ✅ NO NEED JSON.parse AGAIN
    return Response.json({
      result: JSON.parse(result)
    });

  } catch (err) {
    console.error("API ERROR:", err);

    return Response.json({
      result: {
        persona: "Fallback User",
        recommendations: ["Gmail", "Google Search"],
        reason: "AI failed, fallback response used"
      }
    });
  }
}