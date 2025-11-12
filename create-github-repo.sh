#!/bin/bash

# Script to create GitHub repository and push code
# This script will guide you through the process

set -e

REPO_NAME="astrovela-app"
REPO_DIR="/Users/mnovakovski/Documents/Visual Code/App AstroBook/AstroBook"

cd "$REPO_DIR"

echo "🚀 Creating GitHub repository: $REPO_NAME"
echo ""

# Check if gh CLI is installed
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI (gh) is not installed."
    echo ""
    echo "Please install it using one of these methods:"
    echo ""
    echo "Option 1: Using Homebrew (recommended)"
    echo "  brew install gh"
    echo ""
    echo "Option 2: Download from GitHub"
    echo "  Visit: https://cli.github.com/"
    echo ""
    echo "After installing, run this script again."
    exit 1
fi

# Check if authenticated
if ! gh auth status &> /dev/null; then
    echo "🔐 Not authenticated with GitHub."
    echo "Starting authentication process..."
    echo ""
    gh auth login
fi

# Create repository
echo "📦 Creating private repository: $REPO_NAME"
gh repo create "$REPO_NAME" --private --source=. --remote=origin --description "AstroVela Companion App - Personal astrology control center"

# Push to GitHub
echo "📤 Pushing code to GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "✅ Success! Repository created and code pushed."
echo "🌐 View your repository at: https://github.com/$(gh api user --jq .login)/$REPO_NAME"




