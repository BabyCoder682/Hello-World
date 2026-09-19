// One orchestrated moment: type out the C snippet in the hero terminal.
// Respects prefers-reduced-motion by rendering instantly for those users.

const lines = [
  { text: '#include ', kw: true, tail: '<stdio.h>' },
  { text: '' },
  { kw: true, text: 'int ', tail: 'main() {' },
  { indent: true, str: true, tail: 'printf("Hi, I\'m Kallu.\\n");' },
  { indent: true, str: true, tail: 'printf("Still learning,\\n");' },
  { indent: true, str: true, tail: 'printf("still building.\\n");' },
  { indent: true, kw: true, tail: 'return 0;' },
  { text: '}' },
];

function renderLine(line) {
  const span = document.createElement('span');
  const indent = line.indent ? '    ' : '';
  if (line.kw) {
    span.innerHTML = indent + '<span class="tok-kw">' + (line.text || '') + '</span>' + (line.tail || '');
  } else if (line.str) {
    span.innerHTML = indent + line.tail.replace(/(".*?")/, '<span class="tok-str">$1</span>');
  } else {
    span.textContent = indent + (line.text || '') + (line.tail || '');
  }
  return span;
}

function typeSnippet() {
  const target = document.getElementById('typed-code');
  if (!target) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion) {
    lines.forEach((line) => {
      target.appendChild(renderLine(line));
      target.appendChild(document.createElement('br'));
    });
    return;
  }

  let lineIndex = 0;

  function nextLine() {
    if (lineIndex >= lines.length) return;
    target.appendChild(renderLine(lines[lineIndex]));
    target.appendChild(document.createElement('br'));
    lineIndex += 1;
    setTimeout(nextLine, 140);
  }

  setTimeout(nextLine, 400);
}

document.addEventListener('DOMContentLoaded', typeSnippet);
