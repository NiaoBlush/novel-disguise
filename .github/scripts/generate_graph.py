import json
import matplotlib.pyplot as plt
import numpy as np
from scipy.interpolate import make_interp_spline

# 加载数据
with open('install_counts.json') as f:
    data = json.load(f)

# 提取日期、安装总量和检查更新数量
dates = list(data.keys())
installs = [data[date]['installs'] for date in dates]
update_checks = [data[date]['update_checks'] for date in dates]

# 将日期转换为数字
x = np.arange(len(dates))

# 创建平滑曲线
if len(dates) > 3:  # 确保数据点足够多进行平滑处理
    x_smooth = np.linspace(x.min(), x.max(), 300)
    installs_smooth = make_interp_spline(x, installs)(x_smooth)
    update_checks_smooth = make_interp_spline(x, update_checks)(x_smooth)
else:
    x_smooth = x
    installs_smooth = installs
    update_checks_smooth = update_checks

# 绘制图表
plt.figure(figsize=(10, 6))
plt.plot(x_smooth, installs_smooth, marker='o', linestyle='-', label='Installs')
plt.plot(x_smooth, update_checks_smooth, marker='x', linestyle='--', label='Update Checks')
plt.xlabel('Date')
plt.ylabel('Count')
plt.title('Daily Installs and Update Checks')
plt.xticks(ticks=x, labels=dates, rotation=45)
plt.legend()
plt.grid(True)

# 保存图表
plt.savefig('install_count.png')
