# smart-naming

一个根据中文描述智能推荐英文变量名的命令行工具。

## ✨ 特性

- 中文描述 ➜ 英文变量名（结合翻译 API）
- 支持四种命名风格：
    - 大驼峰（PascalCase）
    - 小驼峰（camelCase）
    - 破折号（kebab-case）
    - 下划线（snake_case）

## 📦 安装

```bash
npm install -g smart-naming
```

## 🚀 使用示例

### 示例 1：生成英文变量名

```bash
nmx 用户头像地址
```

输出示例：

```
大驼峰: UserAvatar
小驼峰: userAvatar
破折号: user-avatar
下划线: user_avatar
```

### 示例 2：修改配置项

- 设置**最大单个单词长度**：

```bash
nmx --setMaxWordLength 7
```

输出示例：

```
✅ 单个单词最大长度已限制为7
```

- 设置**最大单词数量**：

```bash
nmx --setMaxWord 7
```

输出示例：

```
✅ 已限制最大单词数量为7
```

### 示例 3：清空配置

```bash
nmx --removeSet
```

输出示例：

```
✅ 已清空配置项
```

### 示例 4：查看当前配置

```bash
nmx --view
```

输出示例：

```
单个单词最大长度 7
最大单词数量 7
```

## 🔧 技术栈

- Node.js
- axios
- 有道演示翻译 API
- chalk（终端输出美化）
- configstore（配置项存储）
