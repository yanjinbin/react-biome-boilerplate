import fs from "node:fs";
import { resolve } from "node:path";
import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { codeInspectorPlugin } from "code-inspector-plugin";
import postcssPresetEnv from "postcss-preset-env";
import pxToViewport from "postcss-px-to-viewport-8-plugin";
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
		css: {
			devSourcemap: true,
			modules: {
				// kebab-case(foo.module.scss) -> camelCase(foo.jsx)
				localsConvention: "camelCase",
				// localsConvention: "camelCaseOnly",
			},
			postcss: {
				plugins: [
					postcssPresetEnv({
						stage: 1, // 支持处于 Stage 1 及以上的特性（稳定性较高）
						autoprefixer: { grid: true }, // 自动添加前缀，支持 grid 布局
						features: {
							"nesting-rules": true, // ✅ 开启嵌套规则支持
							"custom-properties": true, // ✅ 启用 CSS 变量支持
						},
					}),
					pxToViewport({
						unitToConvert: "px", // 需要转换的单位
						viewportWidth: 375, // 设计稿宽度（iPhone X/12/14 等常见移动端）
						unitPrecision: 4, // 保持 4 位小数，减少 CSS 文件体积
						propList: [
							"width",
							"height",
							"margin",
							"padding",
							"top",
							"left",
							"bottom",
							"right",
							"font-size",
						], // 只转换尺寸相关的属性
						viewportUnit: "vw", // 转换为 vw 单位
						fontViewportUnit: "vw", // 字体也转换为 vw
						selectorBlackList: [/^ignore-/, /^no-vw-/], // 指定不转换的类名
						minPixelValue: 2, // 小于等于 2px 则不转换
						mediaQuery: true, // 在媒体查询中也转换
						replace: true, // 直接替换属性值
						exclude: [/node_modules/], // 忽略 node_modules 目录
						landscape: true, // 横屏情况也进行转换
					}),
				],
			},
		},

		envDir: "env",
		// 开发阶段的代理服务器, 充当5173和8080服务器的媒介,避免跨域问题, 实际请求仍旧是5173,而不是8080, http 404 看看请求地址对不对
		server: {
			host: "0.0.0.0",
			cors: true,
			port: 5173,
			strictPort: true,
			open: true,
			proxy: {
				"/api/": {
					target: "http://127.0.0.1:8080",
					changeOrigin: true,
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
