@echo off
REM Script para fazer push inicial para GitHub

echo.
echo ========================================
echo Preparando projeto para Vercel
echo ========================================
echo.

REM Verificar se Git está instalado
git --version >nul 2>&1
if errorlevel 1 (
    echo ERRO: Git nao encontrado! Instale em https://git-scm.com
    pause
    exit /b 1
)

echo [1/5] Inicializando repositorio Git...
git init
if errorlevel 1 echo WARNING: Git pode ja estar inicializado

echo [2/5] Adicionando todos os arquivos...
git add .

echo [3/5] Fazendo primeiro commit...
git commit -m "Preparacao para Vercel deploy"
if errorlevel 1 (
    echo ERRO: Falha no commit. Verifique se ha mudancas.
    pause
    exit /b 1
)

echo [4/5] Renomeando branch para 'main'...
git branch -M main

echo.
echo ========================================
echo PROXIMO PASSO - Configure o repositorio remoto
echo ========================================
echo.
echo 1. Crie um repositorio no GitHub: https://github.com/new
echo 2. De um nome como: kinpai-sushi
echo 3. NAO inicialize com README
echo 4. Copie a URL HTTPS do repositorio
echo.
echo Depois execute este comando (substitua a URL):
echo.
echo git remote add origin https://github.com/SEU_USUARIO/kinpai-sushi.git
echo git push -u origin main
echo.
echo ========================================
echo.

pause
