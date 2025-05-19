export default {
    async fetch(request, env) {
      await env.MY_KV.put("greeting", "Hello from Cloudflare KV!");
      return new Response("Hello, World!", {
        headers: { "Content-Type": "text/plain" },
      });
    },
  };