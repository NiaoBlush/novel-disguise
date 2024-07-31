import json
import matplotlib.pyplot as plt

# 加载数据
with open('install_counts.json') as f:
    data = json.load(f)

dates = [entry['date'] for entry in data]
install_counts = [entry['install_count'] for entry in data]

# 绘制图表
plt.figure(figsize=(10, 6))
plt.plot(dates, install_counts, marker='o', linestyle='-', label='Install Count')
plt.xlabel('Date')
plt.ylabel('Install Count')
plt.title('Install Count Over Time')
plt.xticks(rotation=45)
plt.legend()

# 保存图表
plt.savefig('install_count.png')
