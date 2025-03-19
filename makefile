# 变量定义
namespace=react-biome-boilerplate
Version=`git describe --tag  --abbrev=0`
build_time=`date +%FT%T%z`
commit_hash=`git rev-parse --short HEAD`
PORT = 5173  # 要杀死进程的端口号
PID = $(shell lsof -t -i :$(PORT))  # 获取占用指定端口的进程ID

depend-analyze:
	depcheck

biome:
	pnpm run biome

prune:
	pnpm prune

reinstall:
	@rm -rf pnpm-local.yaml
	@rm -rf node_modules
	pnpm install

run:
	vite . --port $(PORT)

stop:
	@if [ -n "$(PID)" ]; then \
		echo "Killing process with PID $(PID) that is using port $(PORT)..."; \
		kill -9 $(PID); \
	else \
		echo "No process found occupying port $(PORT)."; \
	fi

.PHONY: notify-bot
notify-bot:
	@sh notify-bot.sh

# 基础cli

.PHONY: run-background
run-background: stop
	@nohup make run > output.log 2>&1 &

.PHONY: pre-hook-setup
pre-hook-setup:
	@brew install pre-commit
	@pip install pre-commit
	@pre-commit install
	@pre-commit install --hook-type commit-msg
	@pnpm install @biomejs/biome@1.9.4
	@pnpm add -g depcheck
	@pnpm add -g npm-check-updates
