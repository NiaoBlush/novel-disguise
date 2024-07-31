import requests
from bs4 import BeautifulSoup
import json
from datetime import datetime

def get_install_count(url):
    try:
        response = requests.get(url)
        response.raise_for_status()
    except requests.RequestException as e:
        print(f"Error fetching the URL: {e}")
        return None

    try:
        soup = BeautifulSoup(response.content, 'html.parser')
        install_count = soup.select_one('dd.script-show-total-installs > span').text.strip().replace(',', '')
        return int(install_count)
    except (AttributeError, ValueError) as e:
        print(f"Error parsing the HTML or extracting the install count: {e}")
        return None

url = 'https://greasyfork.org/zh-CN/scripts/499657'
install_count = get_install_count(url)
if install_count is not None:
    current_date = datetime.now().strftime('%Y-%m-%d')

    # 加载现有数据
    try:
        with open('install_counts.json', 'r') as f:
            data = json.load(f)
    except FileNotFoundError:
        data = []

    # 更新或添加新数据
    found = False
    for entry in data:
        if entry['date'] == current_date:
            entry['install_count'] = install_count
            found = True
            break
    if not found:
        data.append({'date': current_date, 'install_count': install_count})

    # 按日期排序
    data.sort(key=lambda x: x['date'])

    # 保存数据到json文件
    with open('install_counts.json', 'w') as f:
        json.dump(data, f, indent=4)
else:
    print("Failed to retrieve the install count.")
