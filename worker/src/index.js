export default {
    async fetch(request, env) {
      // await env.test.put("greeting", "Hello from Cloudflare KV!");
      // const value = await env.test.get("greeting");

      const user = {
      name: "Alice",
      age: 30,
      role: "admin"
    };
    await env.test.put("user:alice", JSON.stringify(user));

    const storedValue = await env.test.get("user:alice");
    const parsed = storedValue ? JSON.parse(storedValue) : null;

    // Return the value to the user
      return new Response(JSON.stringify(parsed, null, 2), {
      headers: { "Content-Type": "application/json" }
    });
      // return new Response("Hello, World!", {
      //   headers: { "Content-Type": "text/plain" },
      // });
    },
  };