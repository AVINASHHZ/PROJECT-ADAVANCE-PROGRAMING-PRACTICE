with open('src/main/resources/static/index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()
for i, l in enumerate(lines):
    if any(k in l for k in ['.opt-name', '.opt-desc', '.weapon-grip-tag', '.opt-card-body', '.opt-card']):
        print(f'{i+1}: {l.strip()[:80]}')
