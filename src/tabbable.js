const TABBABLE = [
  'a[href]',
  'area[href]',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'button:not([disabled])',
  '[contenteditable]',
  '[tabindex]:not([tabindex="-1"])',
  'audio[controls]',
  'video[controls]'
]

export default function findTabbable(node) {
  if (node) {
    return Array.from(node.querySelectorAll(TABBABLE.join(',')))
  }
}
