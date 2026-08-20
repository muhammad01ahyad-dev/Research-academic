# Research Notebook (Jekyll)

Situs logbook penelitian: Daily Log, Research Progress, Computational Results, Lecture Notes, dan Papers. Dibangun dengan Jekyll agar langsung jalan di GitHub Pages tanpa build server tambahan.

## 1. Deploy ke GitHub Pages

1. Buat repo baru di GitHub, misal `research-notebook` (untuk user/org page, nama repo harus `username.github.io`).
2. Push semua isi folder ini ke repo tersebut:
   ```bash
   git init
   git add .
   git commit -m "init research notebook"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```
3. Di GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, pilih branch `main`, folder `/ (root)`.
4. Tunggu beberapa menit, situs akan live di `https://<username>.github.io/<repo>/` (atau `https://<username>.github.io/` jika nama repo `username.github.io`).

### Kalau bukan user page (`username.github.io`)
Buka `_config.yml`, isi:
```yaml
baseurl: "/nama-repo"
url: "https://username.github.io"
```

## 2. Edit identitas situs
Buka `_config.yml`, ganti `title`, `tagline`, `description`, `email`, `github_username`.

## 3. Menulis konten

### Daily Log
Tambah file baru di `_posts/` dengan format nama `YYYY-MM-DD-judul-singkat.md`:
```markdown
---
title: "Judul entri hari ini"
tags: [tag1, tag2]
---
Isi catatan aktivitas hari ini...
```

### Research Progress
Tambah file di `_research/`:
```markdown
---
title: "Milestone X: ..."
date: 2026-08-20
status: "In progress"   # atau "Selesai", "Blocked", dst
tags: [tag]
---
Isi progress...
```

### Computational Results
Tambah file di `_results/` (mirip format di atas). Taruh gambar/plot di `assets/img/` lalu sisipkan dengan `![alt](/assets/img/nama.png)`. Kalau punya notebook Jupyter/kode, bisa tautkan ke repo kode terpisah atau tempel cuplikan kode di dalam blok ```` ``` ````.

### Lecture Notes & Papers (campuran PDF + Markdown)
Tambah file di `_notes/` atau `_papers/`. Taruh file PDF-nya di `assets/files/`, lalu isi front matter:
```markdown
---
title: "Judul"
date: 2026-08-20
pdf: /assets/files/nama-file.pdf   # hapus baris ini kalau tidak ada PDF
tags: [tag]
---
Ringkasan / abstrak dalam Markdown di sini.
```
Kalau kontennya murni Markdown (tanpa PDF), cukup hapus baris `pdf:`.

## 4. Coba jalankan lokal (opsional)
Butuh Ruby + Bundler terpasang:
```bash
bundle install
bundle exec jekyll serve
```
Buka `http://localhost:4000`.

## Struktur folder
```
_config.yml           # konfigurasi & navigasi
_layouts/              # template halaman
_includes/              # komponen (head, nav, footer)
_posts/                 # Daily Log
_research/              # Research Progress
_results/                # Computational Results
_notes/                  # Lecture Notes
_papers/                 # Papers
assets/css/style.css    # desain "blueprint notebook"
assets/files/            # taruh PDF di sini
assets/img/              # taruh gambar/plot di sini
index.md, daily-log.md, research-progress.md,
computational-results.md, lecture-notes.md, papers.md   # halaman index tiap bagian
```

Setiap entri contoh (di `_posts`, `_research`, `_results`, `_notes`, `_papers`) boleh dihapus/diganti — itu cuma contoh format.
