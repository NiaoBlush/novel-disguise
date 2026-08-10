import requests
import json


STATS_URL = 'https://api.greasyfork.org/zh-CN/scripts/499657/stats.json'
REQUEST_HEADERS = {
    'User-Agent': 'novel-disguise-stats-scraper/1.0 '
                  '(https://github.com/NiaoBlush/novel-disguise)'
}


def fetch_stats(url):
    response = requests.get(url, headers=REQUEST_HEADERS, timeout=30)
    response.raise_for_status()
    data = response.json()

    if not isinstance(data, dict) or not data:
        raise ValueError('Greasy Fork returned empty or invalid statistics data')

    return data


def main():
    data = fetch_stats(STATS_URL)

    with open('install_counts.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=4)


if __name__ == '__main__':
    main()
