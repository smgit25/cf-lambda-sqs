export default {
    async fetch(request, env) {
      await env.test.put("greeting", "Hello from Cloudflare KV!");
      const value = await env.test.get("greeting");

    // Return the value to the user
      return new Response(`Stored value: ${value}`);
      // return new Response("Hello, World!", {
      //   headers: { "Content-Type": "text/plain" },
      // });
    },
  };