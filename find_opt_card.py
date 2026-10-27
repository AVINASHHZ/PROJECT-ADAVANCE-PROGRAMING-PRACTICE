import re

with open('src/main/resources/static/index.html', 'r', encoding='utf-8') as f:
    text = f.read()

for m in re.finditer(r'\.opt-card\s*\{[^}]*\}', text):
    print(m.group(0))
