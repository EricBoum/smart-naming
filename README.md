# smart-naming

一个根据中文描述智能推荐英文变量名的命令行工具。

## ✨ 特性

- 中文描述 ➜ 英文变量名（结合翻译 API）
- 支持四种命名风格：
    - 大驼峰（PascalCase）
    - 小驼峰（camelCase）
    - 破折号（kebab-case）
    - 下划线（snake_case）
- 自动处理长度（每个单词最多 5 个字符，最多 5 个单词）

## 📦 安装

```bash
npm install -g smart-naming
```

## 🚀 使用示例

```bash
nmx 用户头像地址
```

输出示例：

```
✅ 命名建议:
大驼峰: UserAvata
小驼峰: userAvata
破折号: user-avata
下划线: user_avata
```

## 🔧 技术栈

- Node.js
- axios
- 有道演示翻译 API
- chalk（终端输出美化）
