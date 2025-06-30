# 📚 Readshift

**Readshift** is a sleek, local-first reading tracker with optional cloud sync for pro users.  
It’s designed to be fast, private, and visually inspired by Spotify.

---

## Features

- Works entirely offline using your browser’s local storage
- Optional cloud sync using AWS (Cognito, Lambda, RDS, S3)
- Clean, dark UI with red accents
- Infrastructure-as-Code using Terraform

---

## Project Structure
readshift/
├── frontend/ # Next.js app (local-first UI)
├── backend/ # C# AWS Lambda functions
├── infra/ # Terraform AWS configs
├── .gitignore
├── LICENSE
└── README.md

---

## Run Locally

```bash
cd frontend
npm install
npm run dev

## License

This project is licensed under the **Functional Source License 1.0**.  
You are free to view, modify, and use the software for **personal and non-commercial purposes**.

**Commercial use, resale, and public hosting are not permitted** without written permission.

See [`LICENSE`](LICENSE) for details.
