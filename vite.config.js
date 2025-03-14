import fs from "node:fs";
import { resolve } from "node:path";
import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { codeInspectorPlugin } from "code-inspector-plugin";
import postcssPresetEnv from "postcss-preset-env";
import tailwindcssNesting from "tailwindcss/nesting";
import { defineConfig } from "vite";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

const version = require("./package.json").version;
// 支持构建命令传入构建版本
const versionName = process.env.VERSION_NAME || version;
export default defineConfig(({ mode = "development" }) => {
	const isProduction = mode === "production";

	console.log("部署环境=>\t", mode);
	return {
		plugins: [
			react(),
			tailwindcss(),
			createSvgIconsPlugin({
				iconDirs: [resolve(process.cwd(), "src/assets/icon")],
				symbolId: "icon-[dir]-[name]",
			}),
			{
				name: "ascii-art",
				configureServer(server) {
					// 监听服务器启动事件
					server.httpServer?.once("listening", () => {
						const asciiPath = path.resolve(__dirname, "ascii.txt");
						const today = new Date().getDay(); // 0 = 星期天, 1 = 星期一, ..., 5 = 星期五
						if (today === 5 && fs.existsSync(asciiPath)) {
							const asciiArt = fs.readFileSync(asciiPath, "utf8");
							console.log(`\n${asciiArt}\n`);
						}
					});
				},
			},
			codeInspectorPlugin({
				bundler: "vite",
			}),
		],
		envDir: "env",
		server: {
			openUrl: "google chrome canary", // 显式指定浏览器
			host: "0.0.0.0",
			cors: true,
			port: 5173,
			strictPort: true,
			open: true,
			proxy: {
				"^/api": {
					target: "http://127.0.0.1:6789", // 真实接口地址, 后端给的基地址
					changeOrigin: true, // 允许跨域
					rewrite: (path) => path.replace(/^\/api/, ""),
				},
			},
		},

		build: {
			manifest: true,
			assetsDir: `./${versionName}`, // 版本号
			sourcemap: true,
		},
		esbuild: {
			drop: isProduction ? ["console", "debugger"] : [],
		},

		css: {
			devSourcemap: true,
			modules: {
				// kebab-case(foo.module.scss) -> camelCase(foo.jsx)
				localsConvention: "camelCase",
			},
			postcss: {
				plugins: [
					tailwindcssNesting,
					postcssPresetEnv({
						features: { "nesting-rules": false },
					}),
				],
			},
		},
		resolve: {
			alias: {
				"@": resolve(__dirname, "./src"),
				"#": resolve(__dirname, "./types"),
			},
			extensions: [".js", ".mjs", ".vue", ".json", ".less", ".scss", ".css"],
		},
		test: {
			dir: "__test__", // 测试文件夹
		},
	};
});
