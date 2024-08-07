import requests
import json

def fetch_stats(url):
    try:
        response = requests.get(url)
        response.raise_for_status()
        return response.json()
    except requests.RequestException as e:
        print(f"Error fetching the URL: {e}")
        return None

url = 'https://greasyfork.org/zh-CN/scripts/499657/stats.json'
data = fetch_stats(url)

if data:
    with open('install_counts.json', 'w') as f:
        json.dump(data, f, indent=4)
else:
    print("Failed to retrieve the data.")
