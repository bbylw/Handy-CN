# Handy

[![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/invite/WVBeWsNXK4)

**一款免费、开源且可扩展的离线语音转文字应用程序。**

Handy 是一款跨平台桌面应用程序，提供简单、保护隐私的语音转录功能。按下快捷键，说话，你的文字就会出现在任何文本框中。整个过程在你的电脑上完成，不会向云端发送任何信息。

## 为什么选择 Handy？

Handy 的诞生是为了填补一款真正开源、可扩展的语音转文字工具的空白。正如 [handy.computer](https://handy.computer) 所说：

- **免费**：辅助工具应该每个人都能使用，而不是被付费墙挡在门外
- **开源**：我们一起可以走得更远。为自己扩展 Handy，为更大的事业做贡献
- **隐私保护**：你的声音留在你自己的电脑上。获取转录而不必向云端发送音频
- **简单**：一个工具，一个功能。转录你说的话并输入到文本框中

Handy 并不追求成为最好的语音转文字应用——它追求的是成为最容易复刻的应用。

## 工作原理

1. **按下**可配置的键盘快捷键开始/停止录音（或使用按键说话模式）
2. **说话**时保持快捷键激活状态
3. **松开**后 Handy 使用 Whisper 处理你的语音
4. **获取**转录文本直接粘贴到你正在使用的任何应用中

整个过程完全本地化：

- 使用 Silero 的 VAD（语音活动检测）过滤静音
- 转录使用你选择的模型：
  - **Whisper 模型**（Small/Medium/Turbo/Large），可用时启用 GPU 加速
  - **Parakeet V3** - 性能出色的 CPU 优化模型，支持自动语言检测
- 支持 Windows、macOS 和 Linux

## 快速入门

### 安装

1. 从 [发布页面](https://github.com/cjpais/Handy/releases) 或 [官网](https://handy.computer) 下载最新版本
   - **macOS**：也可以通过 [Homebrew cask](https://formulae.brew.sh/cask/handy) 安装：`brew install --cask handy`
   - **Windows**：也可以通过 [winget](https://github.com/microsoft/winget-pkgs) 安装：`winget install cjpais.Handy` \
     **注意：** Homebrew cask 和 winget 包不是由 Handy 开发者维护的。
2. 安装应用程序
3. 启动 Handy 并授予必要的系统权限（麦克风、无障碍功能）
4. 在设置中配置你喜欢的键盘快捷键
5. 开始转录！

### 开发环境设置

有关详细的构建说明和平台特定要求，请参阅 [BUILD.md](https://github.com/cjpais/Handy/blob/main/BUILD.md)。

## 集成

<a href="https://www.raycast.com/mattiacolombomc/handy" title="安装 Handy Raycast 扩展"><img src="https://www.raycast.com/mattiacolombomc/handy/install_button@2x.png?v=1.1" height="64" style="height: 64px;" alt="安装 Handy Raycast 扩展" /></a>

通过 [Raycast](https://www.raycast.com) 控制 Handy — 开始/停止录音、浏览转录历史、管理词典、切换模型和语言。

[源代码](https://github.com/mattiacolombomc/raycast-handy) · 作者 [@mattiacolombomc](https://github.com/mattiacolombomc)

## 架构

Handy 是作为 Tauri 应用程序构建的，结合了：

- **前端**：React + TypeScript，使用 Tailwind CSS 构建设置界面
- **后端**：Rust，用于系统集成、音频处理和机器学习推理
- **核心库**：
  - `whisper-rs`：使用 Whisper 模型的本地语音识别
  - `transcription-rs`：使用 Parakeet 模型的 CPU 优化语音识别
  - `cpal`：跨平台音频 I/O
  - `vad-rs`：语音活动检测
  - `rdev`：全局键盘快捷键和系统事件
  - `rubato`：音频重采样

### 调试模式

Handy 包含高级调试模式，用于开发和故障排除。通过以下方式访问：

- **macOS**：`Cmd+Shift+D`
- **Windows/Linux**：`Ctrl+Shift+D`

### 命令行参数

Handy 支持命令行参数来控制正在运行的实例和自定义启动行为。这些在所有平台（macOS、Windows、Linux）上都可用。

**远程控制参数**（通过单实例插件发送到已运行的实例）：

```bash
handy --toggle-transcription    # 切换录音开关
handy --toggle-post-process     # 切换带后处理的录音开关
handy --cancel                  # 取消当前操作
```

**启动参数：**

```bash
handy --start-hidden            # 启动时不显示主窗口
handy --no-tray                 # 启动时不显示系统托盘图标
handy --debug                   # 启用调试模式并输出详细日志
handy --help                    # 显示所有可用参数
```

参数可以组合用于自动启动场景：

```bash
handy --start-hidden --no-tray
```

> **macOS 提示：** 当 Handy 作为应用包安装时，直接调用二进制文件：
>
> ```bash
> /Applications/Handy.app/Contents/MacOS/Handy --toggle-transcription
> ```

## 已知问题和当前限制

该项目正在积极开发中，存在一些 [已知问题](https://github.com/cjpais/Handy/issues)。我们相信对当前状态保持透明是很重要的：

### 主要问题（寻求帮助）

**Whisper 模型崩溃：**

- Whisper 模型在某些系统配置（Windows 和 Linux）上会崩溃
- 并非影响所有系统 - 问题是配置相关的
  - 如果你遇到崩溃且是开发者，请帮助修复并提供调试日志！

**Wayland 支持（Linux）：**

- 对 Wayland 显示服务器支持有限
- 需要 [`wtype`](https://github.com/atx/wtype) 或 [`dotool`](https://sr.ht/~geb/dotool/) 才能正确输入文本（请参阅下面的 [Linux 注意事项](#linux-注意事项) 了解安装方法）

### Linux 注意事项

**文本输入工具：**

要在 Linux 上获得可靠的文本输入，请为你的显示服务器安装适当的工具：

| 显示服务器 | 推荐工具 | 安装命令                                          |
| --------- | -------- | ----------------------------------------------- |
| X11       | `xdotool` | `sudo apt install xdotool`                      |
| Wayland   | `wtype`  | `sudo apt install wtype`                        |
| 两者皆可   | `dotool` | `sudo apt install dotool`（需要 `input` 组）    |

- **X11**：安装 `xdotool` 用于直接输入和剪贴板粘贴快捷键
- **Wayland**：安装 `wtype`（首选）或 `dotool` 才能正确输入文本
- **dotool 设置**：需要将你的用户添加到 `input` 组：`sudo usermod -aG input $USER`（然后注销并重新登录）

如果没有这些工具，Handy 会回退到 enigo，可能会有有限的兼容性，尤其是在 Wayland 上。

**其他注意事项：**

- **运行时库依赖（`libgtk-layer-shell.so.0`）**：
  - Handy 在 Linux 上链接 `gtk-layer-shell`。如果启动失败并显示 `error while loading shared libraries: libgtk-layer-shell.so.0`，请为你的发行版安装运行时包：

    | 发行版         | 需安装的包           | 示例命令                            |
    | ------------- | -------------------- | ---------------------------------- |
    | Ubuntu/Debian | `libgtk-layer-shell0` | `sudo apt install libgtk-layer-shell0` |
    | Fedora/RHEL   | `gtk-layer-shell`     | `sudo dnf install gtk-layer-shell`     |
    | Arch Linux    | `gtk-layer-shell`     | `sudo pacman -S gtk-layer-shell`       |

  - 在 Ubuntu/Debian 上从源代码构建时，你可能还需要 `libgtk-layer-shell-dev`。

- 在 Linux 上录音叠加层默认是禁用的（`Overlay Position: None`），因为某些合成器会将其视为活动窗口。当叠加层可见时可能会窃取焦点，这会阻止 Handy 粘贴回触发转录的应用程序。如果你仍然启用叠加层，请注意基于剪贴板的粘贴可能会失败或粘贴到错误的窗口。
- 如果你在使用应用时遇到问题，使用环境变量 `WEBKIT_DISABLE_DMABUF_RENDERER=1` 可能会有帮助
- **全局键盘快捷键（Wayland）：** 在 Wayland 上，系统级快捷键必须通过桌面环境或窗口管理器配置。使用 [CLI 参数](#命令行参数) 作为自定义快捷键的命令。

  **GNOME：**
  1. 打开 **设置 > 键盘 > 键盘快捷键 > 自定义快捷键**
  2. 点击 **+** 按钮添加新的快捷键
  3. 将 **名称** 设置为 `Toggle Handy Transcription`
  4. 将 **命令** 设置为 `handy --toggle-transcription`
  5. 点击 **设置快捷键** 并按下你想要的组合键（例如 `Super+O`）

  **KDE Plasma：**
  1. 打开 **系统设置 > 快捷键 > 自定义快捷键**
  2. 点击 **编辑 > 新建 > 全局快捷键 > 命令/URL**
  3. 命名为 `Toggle Handy Transcription`
  4. 在 **触发器** 选项卡中设置你想要的组合键
  5. 在 **操作** 选项卡中设置命令为 `handy --toggle-transcription`

  **Sway / i3：**

  添加到你的配置文件（`~/.config/sway/config` 或 `~/.config/i3/config`）：

  ```ini
  bindsym $mod+o exec handy --toggle-transcription
  ```

  **Hyprland：**

  添加到你的配置文件（`~/.config/hypr/hyprland.conf`）：

  ```ini
  bind = $mainMod, O, exec, handy --toggle-transcription
  ```

- 你也可以通过 Unix 信号在 Handy 外部管理全局快捷键，这让 Wayland 窗口管理器或其他快捷键守护进程保留快捷键绑定：

  | 信号       | 操作                              | 示例                    |
  | --------- | --------------------------------- | ---------------------- |
  | `SIGUSR2` | 切换转录                          | `pkill -USR2 -n handy` |
  | `SIGUSR1` | 切换带后处理的转录                | `pkill -USR1 -n handy` |

  Sway 配置示例：

  ```ini
  bindsym $mod+o exec pkill -USR2 -n handy
  bindsym $mod+p exec pkill -USR1 -n handy
  ```

  这里的 `pkill` 只是发送信号——它不会终止进程。

### 平台支持

- **macOS（Intel 和 Apple Silicon 均支持）**
- **x64 Windows**
- **x64 Linux**

### 系统要求/建议

以下是运行 Handy 的推荐配置。如果你达不到系统要求，应用程序的性能可能会下降。我们正在努力在各种计算机和硬件上改进性能。

**对于 Whisper 模型：**

- **macOS**：M 系列 Mac、Intel Mac
- **Windows**：Intel、AMD 或 NVIDIA GPU
- **Linux**：Intel、AMD 或 NVIDIA GPU
  - Ubuntu 22.04、24.04

**对于 Parakeet V3 模型：**

- **仅 CPU 运行** - 可在各种硬件上运行
- **最低要求**：Intel Skylake（第 6 代）或同等水平的 AMD 处理器
- **性能**：在中端硬件上约为 5 倍实时速度（已在 i5 上测试）
- **自动语言检测** - 无需手动选择语言

## 路线图与积极开发

我们正在积极开发多个功能和改进。欢迎贡献和反馈！

### 正在进行中

**调试日志：**

- 添加文件调试日志以帮助诊断问题

**macOS 键盘改进：**

- 支持 Globe 键作为转录触发器
- 重写 macOS 的全局快捷键处理，可能也会重写其他操作系统。

**可选分析：**

- 收集匿名使用数据以帮助改进 Handy
- 隐私优先方法，清晰的选择加入

**设置重构：**

- 清理和重构变得越来越臃肿和混乱的设置系统
- 为设置管理实现更好的抽象

**Tauri 命令清理：**

- 抽象和组织 Tauri 命令模式
- 探索 tauri-specta 以改进类型安全和组织

## 故障排除

### 手动模型安装（适用于代理用户或网络限制）

如果你在代理、防火墙或受限网络环境中，Handy 无法自动下载模型，你可以手动下载和安装。URL 可以从任何浏览器公开访问。

#### 第一步：找到你的应用数据目录

1. 打开 Handy 设置
2. 导航到 **关于** 部分
3. 复制显示的"应用数据目录"路径，或使用快捷键：
   - **macOS**：`Cmd+Shift+D` 打开调试菜单
   - **Windows/Linux**：`Ctrl+Shift+D` 打开调试菜单

典型路径为：

- **macOS**：`~/Library/Application Support/com.pais.handy/`
- **Windows**：`C:\Users\{username}\AppData\Roaming\com.pais.handy\`
- **Linux**：`~/.config/com.pais.handy/`

#### 第二步：创建模型目录

在你的应用数据目录中，创建 `models` 文件夹（如果不存在）：

```bash
# macOS/Linux
mkdir -p ~/Library/Application\ Support/com.pais.handy/models

# Windows (PowerShell)
New-Item -ItemType Directory -Force -Path "$env:APPDATA\com.pais.handy\models"
```

#### 第三步：下载模型文件

从下方下载你需要的模型

**Whisper 模型（单个 .bin 文件）：**

- Small（487 MB）：`https://blob.handy.computer/ggml-small.bin`
- Medium（492 MB）：`https://blob.handy.computer/whisper-medium-q4_1.bin`
- Turbo（1600 MB）：`https://blob.handy.computer/ggml-large-v3-turbo.bin`
- Large（1100 MB）：`https://blob.handy.computer/ggml-large-v3-q5_0.bin`

**Parakeet 模型（压缩归档）：**

- V2（473 MB）：`https://blob.handy.computer/parakeet-v2-int8.tar.gz`
- V3（478 MB）：`https://blob.handy.computer/parakeet-v3-int8.tar.gz`

#### 第四步：安装模型

**对于 Whisper 模型（.bin 文件）：**

直接将 `.bin` 文件放入 `models` 目录：

```
{app_data_dir}/models/
├── ggml-small.bin
├── whisper-medium-q4_1.bin
├── ggml-large-v3-turbo.bin
└── ggml-large-v3-q5_0.bin
```

**对于 Parakeet 模型（.tar.gz 归档）：**

1. 解压 `.tar.gz` 文件
2. 将**解压后的目录**放入 `models` 文件夹
3. 目录必须命名为以下确切的名称：
   - **Parakeet V2**：`parakeet-tdt-0.6b-v2-int8`
   - **Parakeet V3**：`parakeet-tdt-0.6b-v3-int8`

最终结构应如下：

```
{app_data_dir}/models/
├── parakeet-tdt-0.6b-v2-int8/     （包含模型文件的目录）
│   ├── （模型文件）
│   └── （配置文件）
└── parakeet-tdt-0.6b-v3-int8/     （包含模型文件的目录）
    ├── （模型文件）
    └── （配置文件）
```

**重要说明：**

- 对于 Parakeet 模型，解压后的目录名称**必须**与上面显示的完全匹配
- 不要重命名 Whisper 模型的 `.bin` 文件——使用下载 URL 中的确切文件名
- 放置文件后，重启 Handy 以检测新模型

#### 第五步：验证安装

1. 重启 Handy
2. 打开设置 → 模型
3. 你手动安装的模型现在应该显示为"已下载"
4. 选择你想使用的模型并测试转录

### 自定义 Whisper 模型

Handy 可以自动发现放置在 `models` 目录中的自定义 Whisper GGML 模型。这对想要使用默认模型列表中未包含的微调或社区模型的用户很有用。

**使用方法：**

1. 获取 GGML 格式的 Whisper 模型 `.bin` 文件（例如从 [Hugging Face](https://huggingface.co/models?search=whisper%20ggml)）
2. 将 `.bin` 文件放入你的 `models` 目录（请参阅上面的路径）
3. 重启 Handy 以发现新模型
4. 该模型将出现在模型设置页面的"自定义模型"部分

**重要提示：**

- 社区模型由用户提供，可能无法获得故障排除帮助
- 模型必须是有效的 Whisper GGML 格式（`.bin` 文件）
- 模型名称从文件名派生（例如 `my-custom-model.bin` → "My Custom Model"）

### 如何贡献

1. **检查现有问题** [github.com/cjpais/Handy/issues](https://github.com/cjpais/Handy/issues)
2. **Fork 仓库** 并创建功能分支
3. **在你的目标平台上彻底测试**
4. **提交拉取请求** 并清晰描述更改
5. **参与讨论** - 通过 [contact@handy.computer](mailto:contact@handy.computer) 联系我们

目标是创建一个有用的工具和供他人构建的基础——一个模式良好、简单易懂的代码库，为社区服务。

## 赞助商

<div align="center">
  我们感谢赞助商的支持，使 Handy 成为可能：
  <br><br>
  <a href="https://wordcab.com">
    <img src="sponsor-images/wordcab.png" alt="Wordcab" width="120" height="120">
  </a>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/epicenter-so/epicenter">
    <img src="sponsor-images/epicenter.png" alt="Epicenter" width="120" height="120">
  </a>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://boltai.com?utm_source=handy">
    <img src="sponsor-images/boltai.jpg" alt="Bolt AI" width="120" height="120">
  </a>
</div>

## 相关项目

- **[Handy CLI](https://github.com/cjpais/handy-cli)** - 最初的 Python 命令行版本
- **[handy.computer](https://handy.computer)** - 项目网站，包含演示和文档

## 许可证

MIT 许可证 - 详见 [LICENSE](https://github.com/cjpais/Handy/blob/main/LICENSE) 文件。

## 致谢

- **OpenAI 的 Whisper** 语音识别模型
- **whisper.cpp 和 ggml** 出色的跨平台 whisper 推理/加速
- **Silero** 优秀的轻量级 VAD
- **Tauri** 团队出色的基于 Rust 的应用框架
- **社区贡献者** 帮助让 Handy 变得更好
