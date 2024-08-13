import json
import matplotlib.pyplot as plt
import numpy as np
from scipy.interpolate import make_interp_spline
import matplotlib.font_manager as fm

# 设置字体路径
font_path = '/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc'
font_prop = fm.FontProperties(fname=font_path)
plt.rcParams['font.sans-serif'] = ['Noto Sans CJK JP']
plt.rcParams['axes.unicode_minus'] = False  # 正常显示负号

# 加载数据
with open('install_counts.json') as f:
    data = json.load(f)

# 提取日期和数据
dates = list(data.keys())
installs = [data[date]['installs'] for date in dates]
update_checks = [data[date]['update_checks'] for date in dates]

# 计算累计安装量
cumulative_installs = np.cumsum(installs)

# 将日期转换为数字
x = np.arange(len(dates))

# 创建平滑曲线
if len(dates) > 3:  # 确保数据点足够多进行平滑处理
    x_smooth = np.linspace(x.min(), x.max(), 300)
    installs_smooth = make_interp_spline(x, cumulative_installs)(x_smooth)
    update_checks_smooth = make_interp_spline(x, update_checks)(x_smooth)
else:
    x_smooth = x
    installs_smooth = cumulative_installs
    update_checks_smooth = update_checks

# 计算标签间隔
max_labels = 10  # 可以根据需要调整最大标签数
label_interval = max(1, len(dates) // max_labels)

# 绘制图表
plt.figure(figsize=(10, 6))
plt.plot(x_smooth, installs_smooth, marker='', linestyle='-', label='累计安装量')
plt.plot(x_smooth, update_checks_smooth, marker='', linestyle='-', label='检查更新次数')
plt.xlabel('日期')
plt.ylabel('数量')
plt.title('每日累计安装量和检查更新次数')
plt.xticks(ticks=x[::label_interval], labels=dates[::label_interval], rotation=45)
plt.legend()
plt.grid(True)

# 保存图表
plt.savefig('install_count.png')
