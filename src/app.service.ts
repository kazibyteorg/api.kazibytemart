import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHomePage(): string {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="robots" content="index, follow">
        <meta name="description" content="The best place to shop for amazing products at unbeatable prices. Find electronics, clothing, and more!">
        <meta name="keywords" content="eCommerce, online shopping, buy products, electronics, clothing, best prices">
        <meta name="author" content="Kazi Byte">
        
        <!-- Open Graph Meta Tags for Social Media -->
        <meta property="og:type" content="website">
        <meta property="og:title" content="E-Commerce Website">
        <meta property="og:description" content="The best place to shop for amazing products at unbeatable prices. Find electronics, clothing, and more!">
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/169858192?s=400&u=57710e7fc6d4e0f381b9453b080680bd8e01abbb&v=4">
        <meta property="og:url" content="https://kazibyte.github.io/">
        <meta property="og:site_name" content="E-Commerce Website">
        
        <!-- Twitter Card Meta Tags -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="E-Commerce Website">
        <meta name="twitter:description" content="The best place to shop for amazing products at unbeatable prices. Find electronics, clothing, and more!">
        <meta name="twitter:image" content="https://avatars.githubusercontent.com/u/169858192?s=400&u=57710e7fc6d4e0f381b9453b080680bd8e01abbb&v=4">
        <meta name="twitter:site" content="@yourtwitterhandle">
        <title>E-Commerce Website</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body class="bg-gray-100 text-gray-800">
        <div class="container mx-auto p-4">
          <header class="text-center mb-10">
            <h1 class="text-4xl font-bold text-blue-600">Welcome to Our E-Commerce Website</h1>
            <p class="text-xl mt-2">Find the best products, shop easily, and enjoy amazing discounts.</p>
          </header>

          <section class="text-center mb-10">
            <h2 class="text-2xl font-semibold text-gray-700">API Documentation</h2>
            <p class="mt-2">Access the API documentation to learn more about the available endpoints.</p>
            <a href="/swagger" target="_blank" class="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700">View API Docs</a>
             <a href="/swagger/json" target="_blank" class="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700">View API Json</a>
          </section>

          <section class="text-center">
            <h2 class="text-2xl font-semibold text-gray-700">Our GitHub Repository</h2>
            <p class="mt-2">Check out the source code of our project on GitHub.</p>
            <a href="https://github.com/kazibyteorg/api.kazibytemart" target="_blank" class="inline-block mt-4 px-6 py-3 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-700">Visit GitHub</a>
          </section>
        </div>
      </body>
      </html>
    `;
  }
}
