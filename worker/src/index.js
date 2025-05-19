export default {
    async fetch(request, env) {
      await env.test.put("greeting", "Hello from Cloudflare KV!");
      return new Response("Hello, World!", {
        headers: { "Content-Type": "text/plain" },
      });
    },
  };