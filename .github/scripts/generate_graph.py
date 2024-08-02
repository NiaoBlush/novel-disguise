import json
import matplotlib.pyplot as plt
import numpy as np
from scipy.interpolate import make_interp_spline

# 加载数据
with open('install_counts.json') as f:
    data = json.load(f)

dates = [entry['date'] for entry in data]
install_counts = [entry['install_count'] for entry in data]

# 将日期转换为数值
date_nums = np.arange(len(dates))

# 检查数据点数量
if len(dates) >= 4:
    # 平滑曲线
    spl = make_interp_spline(date_nums, install_counts, k=3)  # k是平滑度，k=3是Cubic spline
    date_nums_smooth = np.linspace(date_nums.min(), date_nums.max(), 500)
    install_counts_smooth = spl(date_nums_smooth)
else:
    date_nums_smooth = date_nums
    install_counts_smooth = install_counts

# 计算标签间隔
max_labels = 10  # 可以根据需要调整最大标签数
label_interval = max(1, len(dates) // max_labels)

# 绘制图表
plt.figure(figsize=(10, 6))
plt.plot(date_nums_smooth, install_counts_smooth, linestyle='-', label='Install Count')
plt.scatter(date_nums, install_counts, label='Data Points')
plt.xticks(ticks=date_nums[::label_interval], labels=[dates[i] for i in range(len(dates)) if i % label_interval == 0], rotation=45)
plt.xlabel('Date')
plt.ylabel('Install Count')
plt.title('Install Count Over Time')
# plt.legend()

# 保存图表
plt.savefig('install_counts.png')
