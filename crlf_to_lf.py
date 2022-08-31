import os

WINDOWS_LINE_ENDING = b'\r\n'
UNIX_LINE_ENDING = b'\n'

script_file = __file__

files: list[str] = os.listdir()

ignores: list[str] = ["crlf_to_lf.py", ".git", "node_modules", "dist", "yarn-error.log"]

for ignore in ignores:
    if ignore in files:
        files.remove(ignore)

for file in files:
    if os.path.isdir(file):
        s = f"cd {file} & python {script_file}"
        print(s)
        os.system(s)
        continue
    with open(file, 'rb') as open_file:
        content = open_file.read()
        
    # Windows ➡ Unix
    content = content.replace(WINDOWS_LINE_ENDING, UNIX_LINE_ENDING)

    with open(file, 'wb') as open_file:
        open_file.write(content)
