import glob
import re
import shutil

# First, copy program.html to document.html
shutil.copyfile('/Users/wirantochalik/Downloads/HSE-K37/program.html', '/Users/wirantochalik/Downloads/HSE-K37/document.html')

html_files = glob.glob('/Users/wirantochalik/Downloads/HSE-K37/*.html')

for filepath in html_files:
    with open(filepath, 'r') as f:
        content = f.read()
    
    # We want to insert the new list item right after permit.html in the navbar.
    content = re.sub(r'(<li><a href="permit\.html"[^>]*>Izin Kerja</a></li>)', r'\1\n        <li><a href="document.html">Document HSE-37</a></li>', content)
    # And in the footer
    content = re.sub(r'(<li><a href="permit\.html"[^>]*>Izin Kerja \(PTW\)</a></li>)', r'\1\n          <li><a href="document.html">Document HSE-37</a></li>', content)

    if 'document.html' in filepath:
        # Edit document.html specifics
        # Remove active from Program HSE
        content = re.sub(r'<li><a href="program\.html" class="active">Program HSE</a></li>', r'<li><a href="program.html">Program HSE</a></li>', content)
        # Add active to Document HSE-37
        content = re.sub(r'<li><a href="document\.html">Document HSE-37</a></li>', r'<li><a href="document.html" class="active">Document HSE-37</a></li>', content)
        
        # Change Title
        content = re.sub(r'<title>.*?</title>', r'<title>Document HSE-37 — Portal Departemen HSE</title>', content)
        
        # Update Hero Title
        content = re.sub(r'<h1 class="hero-title">\s*Program<br />\s*<span class="accent-word">HSE</span>\s*</h1>', r'<h1 class="hero-title">\n        Document<br />\n        <span class="accent-word">HSE-37</span>\n      </h1>', content)
        
    with open(filepath, 'w') as f:
        f.write(content)

print("Done updating HTML files.")
