export default function handler(req, res) {
  if (req.method === 'POST') {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: 'Missing prompt' });
    }
    // Simulate AI response
    res.status(200).json({ result: `AI Response to: "${prompt}"` });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}