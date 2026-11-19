// Claude Code status line: model, context usage and plan usage limits (hạng mức).
// Claude Code pipes a JSON document to stdin; this prints a few lines.
const chunks = [];
process.stdin.on('data', (c) => chunks.push(c));
process.stdin.on('end', () => {
  let d = {};
  try {
    d = JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}');
  } catch (_) {
    d = {};
  }

  const reset = '\x1b[0m';
  const dim = '\x1b[2m';
  const bold = '\x1b[1m';
  const color = (p) => (p >= 90 ? '\x1b[31m' : p >= 70 ? '\x1b[33m' : '\x1b[32m');
  const COL_WIDTH = 30;

  // Visible length ignoring ANSI codes (for padding).
  const visible = (s) => s.replace(/\x1b\[[0-9;]*m/g, '').length;
  const pad = (s, w) => s + ' '.repeat(Math.max(0, w - visible(s)));

  const pad2 = (n) => String(n).padStart(2, '0');
  const fmtReset = (iso, withDate) => {
    if (!iso) return '';
    const t = new Date(iso);
    if (isNaN(t)) return '';
    const hm = `${pad2(t.getHours())}:${pad2(t.getMinutes())}`;
    if (!withDate) return `reset ${hm}`;
    return `reset ${pad2(t.getDate())}/${pad2(t.getMonth() + 1)} ${hm}`;
  };

  // Line 1: model and context window usage.
  const model = (d.model && (d.model.display_name || d.model.id)) || 'Claude';
  const top = [`${dim}${model}${reset}`];
  const ctx = d.context_window && d.context_window.used_percentage;
  if (typeof ctx === 'number') {
    top.push(`ctx ${color(ctx)}${Math.round(ctx)}%${reset}`);
  }
  const sep = ` ${dim}|${reset} `;

  // Lines 2-3: two columns, 5h and 7 ngày.
  const rl = d.rate_limits || {};
  const cell = (label, win, withDate) => {
    if (!win || typeof win.used_percentage !== 'number') {
      return { head: `${bold}${label}${reset}`, body: `${dim}—${reset}` };
    }
    const p = win.used_percentage;
    const r = fmtReset(win.resets_at, withDate);
    return {
      head: `${bold}${label}${reset}`,
      body: `${color(p)}${Math.round(p)}%${reset}` + (r ? ` ${dim}· ${r}${reset}` : ''),
    };
  };
  const c5 = cell('5h', rl.five_hour, false);
  const c7 = cell('7 ngày', rl.seven_day, true);

  const lines = [
    top.join(sep),
    pad(c5.head, COL_WIDTH) + c7.head,
    pad(c5.body, COL_WIDTH) + c7.body,
  ];

  process.stdout.write(lines.join('\n') + '\n');
});
