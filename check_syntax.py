import re
import subprocess

with open('d:/app game/src/main/resources/static/index.html', 'r', encoding='utf-8') as f:
    text = f.read()

scripts = re.findall(r'<script>(.*?)</script>', text, re.DOTALL)
print('Found scripts:', len(scripts))
if scripts:
    with open('d:/app game/test_syntax.js', 'w', encoding='utf-8') as f:
        f.write(scripts[0])
    res = subprocess.run(['node', '--check', 'd:/app game/test_syntax.js'], capture_output=True, text=True)
    if res.returncode == 0:
        print('[OK] JAVASCRIPT SYNTAX IS 100% VALID! ZERO ERRORS!')
    else:
        print('[ERROR] JavaScript syntax error:', res.stderr)
