

export default async function handler(req:any, res:any) {
//   const url = 'https://smmfollows.com/api/v2';
  const url = 'https://bulkfollows.com/api/v2';
  
  try {
    const response = await fetch(url, {
      method:"POST",
      headers: {
        'Content-Type': 'application/json',
        // Add any other required headers here
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();

    // Set appropriate headers to allow CORS
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    res.status(response.status).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
}
