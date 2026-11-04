import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import { runInNewContext } from 'node:vm'

const read = (file) => readFileSync(new URL(file, import.meta.url), 'utf8')
const html = read('../public/convite/index.html')
const code = 'a'.repeat(43)
function openPage(userAgent, hash) {
  const elements = { instruction: {}, install: { hidden: true } }
  runInNewContext(html.match(/<script>([\s\S]*?)<\/script>/)[1], {
    URL, navigator: { userAgent }, location: { hash },
    document: { getElementById: (id) => elements[id] },
  })
  return elements
}

test('only forwards the opaque code to the patient Play listing', () => {
  const { install } = openPage('Android', '#' + code)
  const url = new URL(install.href)
  assert.equal(install.hidden, false)
  assert.equal(url.origin, 'https://play.google.com')
  assert.deepEqual([...url.searchParams], [['id', 'com.pygus.client'], ['referrer', 'invite=' + code]])
  assert.equal(openPage('Android', '#malformed').install.hidden, true)
})

test('invokes the iOS Clip before installation and keeps previews generic', () => {
  const page = openPage('iPhone', '#' + code)
  assert.match(html, /app-clip-bundle-id=com\.pygus\.client\.Clip/)
  assert.match(page.instruction.textContent, /Abrir no Safari/)
  assert.equal(page.install.hidden, true)
  assert.equal(openPage('WhatsApp', '#' + code).install.hidden, true)
  assert.match(html, /name="referrer" content="no-referrer"/)
})

test('associates separate patient and professional routes with the store identities', () => {
  const apple = JSON.parse(read('../public/.well-known/apple-app-site-association'))
  assert.deepEqual(apple.applinks.details.map(({ paths }) => paths), [['/app/*'], ['/convite', '/convite/']])
  assert.deepEqual(apple.appclips.apps, ['3N6H37ZSQ6.com.pygus.client.Clip'])
  const android = JSON.parse(read('../public/.well-known/assetlinks.json'))
  const target = android.find((entry) => entry.target.package_name === 'com.pygus.client').target
  assert.match(target.sha256_cert_fingerprints[0], /^(?:[0-9A-F]{2}:){31}[0-9A-F]{2}$/)
})
