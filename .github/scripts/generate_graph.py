import json
import matplotlib.pyplot as plt
import numpy as np
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

# 计算标签间隔
max_labels = 10  # 可以根据需要调整最大标签数
label_interval = max(1, len(dates) // max_labels)

# 绘制图表
plt.figure(figsize=(10, 6))
plt.plot(x, cumulative_installs, marker='', linestyle='-', label='累计安装量')
plt.plot(x, update_checks, marker='', linestyle='-', label='检查更新次数')
plt.xlabel('日期', fontproperties=font_prop)
plt.ylabel('数量', fontproperties=font_prop)
plt.title('每日累计安装量和检查更新次数', fontproperties=font_prop)
plt.xticks(ticks=x[::label_interval], labels=dates[::label_interval], rotation=45, fontproperties=font_prop)
plt.legend(prop=font_prop)
plt.grid(True)

# 保存图表
plt.savefig('install_count.png')
