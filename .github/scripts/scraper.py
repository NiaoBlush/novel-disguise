import requests
from bs4 import BeautifulSoup
import json
from datetime import datetime

def get_install_count(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    install_count = soup.select_one('dd.script-show-total-installs > span').text.strip().replace(',', '')
    return int(install_count)

url = 'https://greasyfork.org/zh-CN/scripts/499657'
install_count = get_install_count(url)
current_date = datetime.now().strftime('%Y-%m-%d')

# 加载现有数据
try:
    with open('install_counts.json', 'r') as f:
        data = json.load(f)
except FileNotFoundError:
    data = []

# 添加新数据
data.append({'date': current_date, 'install_count': install_count})

# 保存数据到json文件
with open('install_counts.json', 'w') as f:
    json.dump(data, f, indent=4)
