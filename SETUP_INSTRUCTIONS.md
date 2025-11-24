# GitHub Repository Setup - Manual Instructions

Since the automated setup requires GitHub CLI installation, here are the manual steps:

## Step 1: Install GitHub CLI (if not already installed)

Open Terminal and run:

```bash
# Check if brew is available
which brew

# If brew is available, install GitHub CLI
brew install gh

# If brew is not available, download from:
# https://cli.github.com/
```

## Step 2: Authenticate with GitHub

```bash
gh auth login
```

This will:
- Open your browser
- Ask you to authenticate
- Complete the setup

## Step 3: Create Repository and Push

Once authenticated, run:

```bash
cd "/Users/mnovakovski/Documents/Visual Code/App AstroBook/AstroBook"

# Create the repository
gh repo create astrovela-app --private --source=. --remote=origin --description "AstroVela Companion App - Personal astrology control center"

# Push the code
git branch -M main
git push -u origin main
```

## Alternative: Manual Website Method (No CLI needed)

If you prefer not to install GitHub CLI:

1. **Go to**: https://github.com/new
2. **Repository Settings**:
   - Name: `astrovela-app`
   - Description: `AstroVela Companion App - Personal astrology control center`
   - Visibility: **Private** ✅
   - **DO NOT** check README, .gitignore, or license
3. **Click "Create repository"**
4. **Copy the repository URL** (e.g., `https://github.com/YOUR_USERNAME/astrovela-app.git`)
5. **Run these commands**:

```bash
cd "/Users/mnovakovski/Documents/Visual Code/App AstroBook/AstroBook"

git remote add origin https://github.com/YOUR_USERNAME/astrovela-app.git
git branch -M main
git push -u origin main
```

## Current Status

✅ Local git repository initialized  
✅ 3 commits ready  
✅ All files committed  
✅ .gitignore configured  
✅ README.md included  

**Ready to push!** Choose one of the methods above.














