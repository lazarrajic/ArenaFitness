import https from 'https'
import http from 'http'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const imagesDir = path.join(__dirname, 'public', 'images')

if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true })

const assets = [
  { url: 'https://arenafitnessandboxing.co.nz/wp-content/uploads/2024/05/Small-Logo-136x79.png', name: 'logo.png' },
  { url: 'https://arenafitnessandboxing.co.nz/wp-content/uploads/2024/06/Footer_logo.png', name: 'logo-footer.png' },
  { url: 'https://arenafitnessandboxing.co.nz/wp-content/uploads/2024/06/10b.jpg', name: 'photo-01.jpg' },
  { url: 'https://arenafitnessandboxing.co.nz/wp-content/uploads/2024/06/Home2-1536x852.jpg', name: 'photo-02.jpg' },
  { url: 'https://arenafitnessandboxing.co.nz/wp-content/uploads/2026/03/Train-FREE-for-4-Weeks-1240-x-750-px-2.png', name: 'photo-03.png' },
  { url: 'https://arenafitnessandboxing.co.nz/wp-content/uploads/2025/01/IMG_9731-scaled.jpg', name: 'photo-04.jpg' },
  { url: 'https://arenafitnessandboxing.co.nz/wp-content/uploads/2025/01/IMG_9720-scaled.jpg', name: 'photo-05.jpg' },
  { url: 'https://arenafitnessandboxing.co.nz/wp-content/uploads/2025/01/IMG_9697-scaled.jpg', name: 'photo-06.jpg' },
  { url: 'https://arenafitnessandboxing.co.nz/wp-content/uploads/2026/05/IMG_9736-scaled.jpg', name: 'photo-07.jpg' },
  { url: 'https://arenafitnessandboxing.co.nz/wp-content/uploads/2026/05/IMG_9747-scaled.jpg', name: 'photo-08.jpg' },
  { url: 'https://arenafitnessandboxing.co.nz/wp-content/uploads/2024/06/44dc1a3e-29ef-4112-85eb-da59bd89bcac-1.png', name: 'photo-09.png' },
  { url: 'https://arenafitnessandboxing.co.nz/wp-content/uploads/2026/05/56222470_2183227341723148_834723689931997184_n.jpg', name: 'photo-10.jpg' },
  { url: 'https://arenafitnessandboxing.co.nz/wp-content/uploads/2026/05/IMG_9941-scaled.jpg', name: 'photo-11.jpg' },
]

function download(url, dest) {
  return new Promise((resolve) => {
    const file = fs.createWriteStream(dest)
    const protocol = url.startsWith('https') ? https : http
    const req = protocol.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close()
        fs.unlinkSync(dest)
        download(res.headers.location, dest).then(resolve)
        return
      }
      if (res.statusCode !== 200) {
        file.close()
        fs.unlinkSync(dest)
        console.warn(`⚠️  WARNING: ${path.basename(dest)} returned ${res.statusCode} (${url})`)
        resolve(false)
        return
      }
      res.pipe(file)
      file.on('finish', () => {
        file.close()
        const size = fs.statSync(dest).size
        console.log(`✅ ${path.basename(dest)} (${(size / 1024).toFixed(1)}KB)`)
        resolve(true)
      })
    })
    req.on('error', (err) => {
      file.close()
      if (fs.existsSync(dest)) fs.unlinkSync(dest)
      console.warn(`⚠️  WARNING: ${path.basename(dest)} failed — ${err.message}`)
      resolve(false)
    })
    req.setTimeout(30000, () => {
      req.destroy()
      console.warn(`⚠️  WARNING: ${path.basename(dest)} timed out`)
      resolve(false)
    })
  })
}

console.log('Downloading assets...\n')
const results = await Promise.all(
  assets.map(({ url, name }) => download(url, path.join(imagesDir, name)))
)
const ok = results.filter(Boolean).length
console.log(`\nDone: ${ok}/${assets.length} assets downloaded successfully.`)
