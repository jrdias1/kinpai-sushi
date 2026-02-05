#!/usr/bin/env pwsh
# =============================================================================
# Setup Automático - Kinpai Sushi Web
# =============================================================================
# Execute este script em PowerShell após transferir o projeto para novo PC
#
# Como usar:
# 1. Abra PowerShell na pasta do projeto
# 2. Execute: .\setup.ps1
# 3. Siga as instruções
# =============================================================================

Write-Host "
╔═══════════════════════════════════════════════════════════╗
║  🍣 KINPAI SUSHI WEB - Setup Automático                 ║
║  Preparando seu projeto para rodar...                    ║
╚═══════════════════════════════════════════════════════════╝
" -ForegroundColor Cyan

# ============================================================================
# 1. Verificar se está na pasta correta
# ============================================================================
Write-Host "`n📁 Verificando pasta..." -ForegroundColor Yellow
if (-not (Test-Path "package.json")) {
    Write-Host "❌ ERRO: Não encontrei package.json" -ForegroundColor Red
    Write-Host "Execute este script na raiz do projeto!" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Pasta correta encontrada" -ForegroundColor Green

# ============================================================================
# 2. Verificar se pnpm está instalado
# ============================================================================
Write-Host "`n📦 Verificando pnpm..." -ForegroundColor Yellow
$pnpmVersion = pnpm --version 2>$null
if (-not $pnpmVersion) {
    Write-Host "⚠️  pnpm não encontrado. Instalando..." -ForegroundColor Yellow
    npm install -g pnpm
    Write-Host "✅ pnpm instalado" -ForegroundColor Green
} else {
    Write-Host "✅ pnpm v$pnpmVersion" -ForegroundColor Green
}

# ============================================================================
# 3. Instalar dependências
# ============================================================================
Write-Host "`n📥 Instalando dependências (pode levar 2-3 minutos)..." -ForegroundColor Yellow
pnpm install

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erro ao instalar dependências" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Dependências instaladas" -ForegroundColor Green

# ============================================================================
# 4. Verificar TypeScript
# ============================================================================
Write-Host "`n🔍 Verificando TypeScript..." -ForegroundColor Yellow
pnpm run check

if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  Há erros de TypeScript. Verifique acima." -ForegroundColor Yellow
    $continue = Read-Host "Deseja continuar mesmo assim? (s/n)"
    if ($continue -ne "s") {
        exit 1
    }
}
Write-Host "✅ TypeScript ok" -ForegroundColor Green

# ============================================================================
# 5. Fazer Build
# ============================================================================
Write-Host "`n🔨 Compilando projeto..." -ForegroundColor Yellow
pnpm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erro ao compilar" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Build completo" -ForegroundColor Green

# ============================================================================
# 6. Resumo Final
# ============================================================================
Write-Host "
╔═══════════════════════════════════════════════════════════╗
║  ✅ SETUP COMPLETO!                                      ║
╚═══════════════════════════════════════════════════════════╝

Seu projeto está pronto! Para rodar:

  📌 TESTE LOCAL:
     node dist/index.js
     Abra: http://localhost:3000

  📌 OU DESENVOLVIMENTO:
     pnpm run dev
     Abra: http://localhost:5173

  📌 PROBLEMAS?
     Leia: TRANSFERIR_PARA_OUTRO_PC.md

  📊 Status:
     ✅ Dependências instaladas
     ✅ TypeScript verificado  
     ✅ Build gerado
     ✅ Pronto para usar!

Boa sorte! 🚀
" -ForegroundColor Green

# ============================================================================
# 7. Perguntar se quer rodar agora
# ============================================================================
$runNow = Read-Host "`nDeseja rodar o servidor agora? (s/n)"
if ($runNow -eq "s") {
    Write-Host "`n🚀 Iniciando servidor..." -ForegroundColor Cyan
    node dist/index.js
}
