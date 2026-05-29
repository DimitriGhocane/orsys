```Makefile
# ==========================================
# Configuration
# ==========================================

APP_NAME := my-react-app

# ==========================================
# Help
# ==========================================

.PHONY: help
help: ## Affiche l'aide
	@echo ""
	@echo "Commandes disponibles :"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
	awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2}'
	@echo ""

# ==========================================
# Setup
# ==========================================

.PHONY: install
install: ## Installer les dépendances
	npm install

.PHONY: create
create: ## Créer un projet React + Vite + TS
	npm create vite@latest $(APP_NAME) -- --template react-ts

# ==========================================
# Développement
# ==========================================

.PHONY: dev
dev: ## Lancer le serveur de développement
	npm run dev

.PHONY: preview
preview: ## Prévisualiser le build
	npm run preview

# ==========================================
# Build
# ==========================================

.PHONY: build
build: ## Compiler pour la production
	npm run build

.PHONY: clean
clean: ## Nettoyer les fichiers générés
	rm -rf dist
	rm -rf node_modules

# ==========================================
# Qualité
# ==========================================

.PHONY: lint
lint: ## Vérifier le code avec ESLint
	npm run lint

.PHONY: typecheck
typecheck: ## Vérifier les types TypeScript
	npx tsc --noEmit

.PHONY: check
check: lint typecheck ## Lancer tous les contrôles qualité

# ==========================================
# Tests
# ==========================================

.PHONY: test
test: ## Lancer les tests
	npm test

.PHONY: test-watch
test-watch: ## Tests en mode watch
	npm test -- --watch

.PHONY: coverage
coverage: ## Rapport de couverture
	npm test -- --coverage

.PHONY: e2e
e2e: ## Tests End-to-End Playwright
	npx playwright test

# ==========================================
# CI
# ==========================================

.PHONY: ci
ci: install check test build ## Pipeline CI complet
```
