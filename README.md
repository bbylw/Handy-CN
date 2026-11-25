# Handy

> **汉化说明**：本文档为 [Handy](https://github.com/cjpais/Handy) 项目的中文翻译版本，原项目地址：https://github.com/cjpais/Handy
>
> 当前对应上游版本：**v0.10.2**（2026 年 11 月）

[![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/invite/WVBeWsNXK4)

**一款免费、开源且可扩展的离线语音转文字应用程序。**

Handy 是一款跨平台桌面应用程序，提供简单、保护隐私的语音转录功能。按下快捷键，说话，你的文字就会出现在任何文本框中。整个过程在你的电脑上完成，不会向云端发送任何信息。

## 为什么选择 Handy？

Handy 的诞生是为了填补一款真正开源、可扩展的语音转文字工具的空白。正如 [handy.computer](https://handy.computer) 所说：

- **免费**：辅助工具应该每个人都能使用，而不是被付费墙挡在门外
- **开源**：我们一起可以走得更远。为自己扩展 Handy，为更大的事业做贡献
- **隐私保护**：你的声音留在你自己的电脑上。获取转录而不必向云端发送音频
- **简单**：一个工具，一个功能。转录你说的话并输入到文本框中

## 工作原理

1. **按下**可配置的键盘快捷键：按住开始录音、松开停止，或者轻按一下开启/关闭录音（也可以只保留"按住"或"轻按切换"模式）
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
   - **Debian/Ubuntu**：请使用 APT 安装下载的 `.deb`，这样所需依赖会自动装好：
     ```bash
     sudo apt install ./Handy_*.deb
     ```
     除非依赖已经安装，否则不要使用 `dpkg -i`。如果你已经用过，请运行 `sudo apt --fix-broken install`。
2. 安装应用程序
3. 启动 Handy 并授予必要的系统权限（麦克风、无障碍功能）
4. 在设置中配置你喜欢的键盘快捷键
5. 开始转录！

### 开发环境设置

有关详细的构建说明和平台特定要求，请参阅 [BUILD.md](https://github.com/cjpais/Handy/blob/main/BUILD.md)。

## 赞助商

<div align="center">
  我们感谢赞助商的支持，使 Handy 成为可能：
  <br><br>
  <a href="https://wordcab.com">
    <img src="https://github.com/cjpais/Handy/blob/main/sponsor-images/wordcab.png" alt="Wordcab" width="120" height="120">
  </a>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/epicenter-so/epicenter">
    <img src="https://github.com/cjpais/Handy/blob/main/sponsor-images/epicenter.png" alt="Epicenter" width="120" height="120">
  </a>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://boltai.com?utm_source=handy">
    <img src="https://github.com/cjpais/Handy/blob/main/sponsor-images/boltai.jpg" alt="Bolt AI" width="120" height="120">
  </a>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://cantydigital.com.au/">
    <img src="https://github.com/cjpais/Handy/blob/main/sponsor-images/cantydigital.png" alt="Canty Digital" width="120" height="120">
  </a>
</div>

## 集成

<a href="https://www.raycast.com/mattiacolombomc/handy" title="安装 Handy Raycast 扩展"><img src="https://www.raycast.com/mattiacolombomc/handy/install_button@2x.png?v=1.1" height="64" style="height: 64px;" alt="安装 Handy Raycast 扩展" /></a>

通过 [Raycast](https://www.raycast.com) 控制 Handy — 开始/停止录音、浏览转录历史、管理词典、切换模型和语言。

[源代码](https://github.com/mattiacolombomc/raycast-handy) · 作者 [@mattiacolombomc](https://github.com/mattiacolombomc)

### 调试模式

Handy 包含高级调试模式，用于开发和故障排除。通过以下方式访问：

- **macOS**：`Cmd+Shift+D`
- **Windows/Linux**：`Ctrl+Shift+D`

### 命令行参数

Handy 支持命令行参数来控制正在运行的实例和自定义启动行为。这些在所有平台（macOS、Windows、Linux）上都可用。这在很大程度上仍是一个 Beta 功能。

**远程控制参数**（通过单实例插件发送到已运行的实例；如果 Handy 没有运行，切换类参数会启动它并开始录音）：

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

### 转录钩子

macOS 和 Linux 的高级用户可以在 Handy 粘贴之前重写文本。将可执行文件放到 Handy 应用数据目录下的 `hooks/transcription`（macOS 为 `~/Library/Application Support/com.pais.handy/`，Linux 为 `~/.local/share/com.pais.handy/`）。经过 LLM 后处理之后，Handy 会把文本写入该脚本的标准输入，并粘贴它的标准输出。输出末尾的一个换行会被移除，输出为空则不粘贴任何内容。如果钩子执行失败或运行超过 30 秒，将粘贴原始文本。

钩子不会获得你 shell 的 `PATH`：在 macOS 上，从 Dock 或 Finder 启动的 Handy 只能看到 `/usr/bin:/bin:/usr/sbin:/sbin`。其他路径请使用绝对路径，例如 `/opt/homebrew/bin/opencc`。

示例：当 Terminal 是前台应用时，在文本前加上 `#`（macOS）：

```bash
mkdir -p ~/Library/Application\ Support/com.pais.handy/hooks
cd ~/Library/Application\ Support/com.pais.handy/hooks
cat > transcription << 'EOF'
#!/bin/bash
app=$(osascript -e 'tell application "System Events" to get name of first application process whose frontmost is true')
if [ "$app" = "Terminal" ]; then echo "# $(cat)"; else cat; fi
EOF
chmod +x transcription
```

## 已知问题和当前限制

该项目正在积极开发中，存在一些 [已知问题](https://github.com/cjpais/Handy/issues)。我们相信对当前状态保持透明是很重要的：

### 蓝牙耳机麦克风（macOS）

在 macOS 上使用蓝牙耳机麦克风时，录音期间播放质量或音量可能会暂时下降，因为蓝牙会切换到双向音频。请将耳机保持为输出设备，并在 Handy 中选择 Mac 内置麦克风或外接麦克风，以避免这个问题。

### fn 与 Globe 键快捷键（macOS）

包含 `fn`（Globe）键的快捷键**仅在 Apple 键盘上有效** —— 即 Mac 内置键盘或 Apple 外接键盘。在第三方键盘上它们永远不会触发，即使该键盘连接的是同一台 Mac。

这是硬件限制，而不是 Handy 的缺陷。`fn` 不属于标准 USB HID 键盘规范的一部分：Apple 通过一种厂商特定的用途来报告它，macOS 只对 Apple 设备作出响应；而第三方键盘完全在固件中处理其 `Fn` 键，不会向电脑发送任何事件。没有任何事件可供 Handy 监听。

如果你在 MacBook 键盘和外接键盘之间切换，请选择由标准修饰键（`ctrl`、`option`、`shift`、`command`）或普通按键组成的快捷键。

### 管理员权限应用（Windows）

Windows 不允许 Handy 粘贴到以管理员身份运行的应用中，因此 Handy 会显示错误，并把转录内容保存在历史记录里。使用 Handy Keys 键盘实现时，当焦点位于管理员应用上，快捷键同样不会生效。这是预期行为。若要在这些应用中使用 Handy，请也以管理员身份运行 Handy。

### Linux 注意事项

**粘贴方式：**

在 Linux 上，新安装默认使用 **Shift+Insert** 粘贴（**高级 → 粘贴方式** 中的 **剪贴板 (Shift+Insert)**）。它会同时把转录文本放到剪贴板和主选择区，因此同一个按键既能在 GUI 应用（读取剪贴板）中粘贴，也能在 kitty、Ghostty、Alacritty、GNOME Terminal 等终端（读取主选择区）中粘贴，随后再恢复两者。**直接输入** 仍然可用，但它依赖你的键盘布局：在非美式布局下可能丢失大写字母和带重音符号的字符，或输入错误的字符。

**文本输入工具：**

Handy 需要一个工具来发送粘贴按键（或在"直接输入"模式下输入文本）。请为你的显示服务器安装合适的工具：

| 显示服务器 | 推荐工具 | 安装命令                                          |
| --------- | -------- | ----------------------------------------------- |
| X11       | `xdotool` | `sudo apt install xdotool`                      |
| Wayland   | `wtype`  | `sudo apt install wtype`                        |
| 两者皆可   | `dotool` | `sudo apt install dotool`（需要 `input` 组）    |

- **X11**：安装 `xdotool`，用于直接输入和剪贴板粘贴快捷键
- **Ubuntu 26.04**：默认使用 Wayland 显示服务器。`wtype` 无法工作，需要安装 `ydotool` 并按 [此处](https://github.com/cjpais/Handy/pull/557#issuecomment-3781249267) 的说明配置 systemd。
- **Wayland**：安装 `wtype`（首选）或 `dotool`，文本输入才能正常工作
- **dotool 设置**：需要将你的用户添加到 `input` 组：`sudo usermod -aG input $USER`（然后注销并重新登录）

如果没有这些工具，Handy 会回退到 enigo，可能会有有限的兼容性，尤其是在 Wayland 上。

**Wayland 支持（Linux）：**

- 对 Wayland 显示服务器支持有限
- 需要 [`wtype`](https://github.com/atx/wtype) 或 [`dotool`](https://sr.ht/~geb/dotool/) 才能正确输入文本（安装方法请参阅下面的 [Linux 注意事项](#linux-注意事项)）

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
- Handy 会根据所链接的 WebKitGTK 版本选择 Linux 上的 WebKit 渲染器：2.54 及更新版本让合成器保持在共享内存上（`WEBKIT_DMABUF_RENDERER_FORCE_SHM=1`），更早的版本则禁用 DMA-BUF 渲染（`WEBKIT_DISABLE_DMABUF_RENDERER=1`）。显式设置其中任一变量都会被保留。有关渲染方面的变通方法，请参阅 [故障排除 → Linux 启动崩溃或不稳定](#linux-启动崩溃或不稳定)。
- 如果 Handy 在 Linux 上无法稳定启动，请参阅 [故障排除 → Linux 启动崩溃或不稳定](#linux-启动崩溃或不稳定)。
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

- 你也可以通过 Unix 信号或 CLI 参数从 Handy 外部触发转录，这让 Wayland 窗口管理器或其他快捷键守护进程继续拥有快捷键绑定：

  | 操作                       | 触发方式                                                  |
  | ------------------------- | ------------------------------------------------------- |
  | 切换转录                   | `pkill -USR2 -n handy` 或 `handy --toggle-transcription` |
  | 切换带后处理的转录          | `handy --toggle-post-process`                             |

  Sway 配置示例：

  ```ini
  bindsym $mod+o exec pkill -USR2 -n handy
  bindsym $mod+p exec handy --toggle-post-process
  ```

  这里的 `pkill` 只是发送信号——它不会终止进程。

  > **行为变更：** 旧版本还接受 `SIGUSR1` 来切换带后处理的转录。WebKitGTK —— Linux 上 Handy 内嵌的 webview 引擎 —— 内部使用 SIGUSR1 协调 JavaScript 垃圾回收，因此监听它会导致莫名其妙的录音，以及每隔几分钟被中断的听写（[#1660](https://github.com/cjpais/Handy/issues/1660)）。Handy 在 Linux 上不再监听 SIGUSR1；带后处理的切换仍可通过 `handy --toggle-post-process` 使用。**请移除任何 `pkill -USR1` 绑定**：该信号现在会直接送达 WebKit 的内部处理器，可能导致应用崩溃。

**叠加层与粘贴问题（Linux）：**

- 录音叠加层窗口可能会干扰在 Linux（X11）上向目标应用粘贴转录文本
- **解决方法：** 打开 **设置 > 高级**，将 **"Overlay Position"** 设置为 **"None"** 以禁用叠加层
- 如果你仍希望有录音状态的听觉确认，请启用 **"音频反馈"**（同样在"高级"中）
- 从旧版本升级或从其他平台导入设置的用户可能需要手动应用此更改

## 验证发布签名

Handy 的发布产物使用 Tauri 的更新器签名格式签名。公钥保存在 [`src-tauri/tauri.conf.json`](https://github.com/cjpais/Handy/blob/main/src-tauri/tauri.conf.json) 的 `plugins.updater.pubkey` 下。

要手动验证某个发布版本，请将 `ARTIFACT` 设置为你下载的文件名，把 `src-tauri/tauri.conf.json` 中的 `pubkey` 值保存为 `handy.pub.b64`，然后从 base64 解码公钥和对应的 `.sig` 文件，并用 `minisign` 验证该产物：

```bash
# 替换为你下载的文件
ARTIFACT="Handy_0.8.1_amd64.AppImage"

python3 - "$ARTIFACT" <<'PY'
import base64, pathlib, sys

artifact = sys.argv[1]

pub = pathlib.Path("handy.pub.b64").read_text().strip()
pathlib.Path("handy.pub").write_bytes(base64.b64decode(pub))

sig = pathlib.Path(f"{artifact}.sig").read_text().strip()
pathlib.Path(f"{artifact}.minisig").write_bytes(base64.b64decode(sig))
PY

minisign -Vm "$ARTIFACT" \
  -p handy.pub \
  -x "$ARTIFACT.minisig"
```

验证成功时，`minisign` 会输出：

```text
Signature and comment signature verified
```

不要用 `gpg` 处理这些 `.sig` 文件。

## 故障排除

### 上一条剪贴板内容被粘贴，而不是转录结果

如果 **历史记录** 中的转录是正确的，但 Handy 插入的却是你之前复制的内容，请参阅 [issue #502](https://github.com/cjpais/Handy/issues/502)。在标准剪贴板粘贴方式下，Handy 会在固定延迟后恢复你之前的剪贴板。在高负载时，接收应用可能要到这次恢复之后才读取剪贴板。

1. 打开 Handy 的设置窗口，按 `Cmd+Shift+D`（macOS）或 `Ctrl+Shift+D`（Windows/Linux）显示 **调试**。
2. 在 **macOS 和 Windows** 上，选择一种剪贴板粘贴方式后，在调试中尝试 **可靠粘贴（Beta）**（Reliable Paste）。它使用剪贴板读取通知来延迟恢复，而不是依赖标准的固定延迟。请在实际出现问题的应用中测试；它仍处于实验阶段。
3. 如果"可靠粘贴"不可用或被禁用，请增大调试中的 **粘贴延迟（之后）**（Paste Delay (After)）并再次测试。它控制恢复之前剪贴板内容前的等待时间。**粘贴延迟（之前）**（Paste Delay (Before)）控制发送粘贴按键前的等待时间，解决的是操作中的另一个环节。这些延迟设置仅适用于标准粘贴路径，不适用于"可靠粘贴"。

如果问题仍然存在，请在现有 issue 中补充你的 Handy 版本、操作系统、接收应用、粘贴方式、"可靠粘贴"设置以及前后延迟。分享日志前请隐去私密的听写文本。

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

**Parakeet Unified EN 0.6B（单个 `.gguf` 文件，推荐）：**

- Q8_0（731 MB）：`https://huggingface.co/handy-computer/parakeet-unified-en-0.6b-gguf/resolve/main/parakeet-unified-en-0.6b-Q8_0.gguf`

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

**对于 GGUF 模型（.gguf 文件）：**

将 `.gguf` 文件直接放入 `models` 目录，与上面的 Whisper `.bin` 文件完全一样。Handy 也会识别共享的 Hugging Face 缓存（`~/.cache/huggingface/hub`）中已有的模型，因此其他工具下载的副本无需移动即可使用。

**重要说明：**

- 不要重命名 `.bin` 或 `.gguf` 文件——使用下载 URL 中的确切文件名
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

### Linux 启动崩溃或不稳定

如果 Handy 在 Linux 上无法稳定启动——例如启动后很快崩溃、始终不显示窗口，或报告 Wayland 协议错误——请按顺序尝试以下步骤。

**1. 安装（或重新安装）`gtk-layer-shell`**

Handy 使用 `gtk-layer-shell` 绘制录音叠加层，并在运行时链接它。缺失或损坏的安装是启动失败最常见的原因，可能表现为崩溃，或在显示任何窗口之前就挂起。请确认已为你的发行版安装运行时包：

| 发行版         | 需安装的包           | 示例命令                            |
| ------------- | -------------------- | ---------------------------------- |
| Ubuntu/Debian | `libgtk-layer-shell0` | `sudo apt install libgtk-layer-shell0` |
| Fedora/RHEL   | `gtk-layer-shell`     | `sudo dnf install gtk-layer-shell`     |
| Arch Linux    | `gtk-layer-shell`     | `sudo pacman -S gtk-layer-shell`       |

如果已经安装但仍然出现启动问题，请尝试重新安装（例如再次执行 `sudo pacman -S gtk-layer-shell`），以防部分升级损坏了库文件。

**2. 禁用 GTK layer shell 叠加层（`HANDY_NO_GTK_LAYER_SHELL`）**

如果安装库没有帮助，可以完全跳过 `gtk-layer-shell` 的初始化作为变通方法。在某些合成器（尤其是 Wayland 下的 KDE Plasma）上，曾报告它与录音叠加层配合不佳。设置此变量后，叠加层会回退为普通的置顶窗口：

```bash
HANDY_NO_GTK_LAYER_SHELL=1 handy
```

**3. 配置 WebKit 渲染器（`WEBKIT_DISABLE_DMABUF_RENDERER` / `WEBKIT_DMABUF_RENDERER_FORCE_SHM`）**

Handy 在启动时根据所链接的 WebKitGTK 构建选择渲染器，因为 DMA-BUF 渲染器在某些 GPU/驱动组合上会崩溃，而非合成回退在 2.54 系列上会丢失像素：

- **WebKitGTK 2.54 及更新版本：** 保持合成器启用，并用 `WEBKIT_DMABUF_RENDERER_FORCE_SHM=1` 强制其使用共享内存。2.54 只合成每一帧的损坏区域，因此之前的变通方法（`WEBKIT_DISABLE_DMABUF_RENDERER=1`）会让透明窗口（例如录音叠加层）只显示有动画的部分（[#2166](https://github.com/cjpais/Handy/issues/2166)）。
- **更早的版本：** 用 `WEBKIT_DISABLE_DMABUF_RENDERER=1` 禁用 DMA-BUF 渲染，这可能导致空白窗口，但与之前的行为一致。

显式设置的环境变量值会被保留，包括在 Nix 包中：

```bash
# 强制使用旧的非合成渲染器（2.54 上可能重新出现部分帧）
WEBKIT_DISABLE_DMABUF_RENDERER=1 handy

# 让合成器保持在共享内存上（下面 2.54 的默认行为）
WEBKIT_DMABUF_RENDERER_FORCE_SHM=1 handy

# 在支持时允许 WebKit 使用 DMA-BUF（可能重新引入 GPU/驱动崩溃）
WEBKIT_DISABLE_DMABUF_RENDERER=0 handy
```

测试某个值之前，请完全退出 Handy，包括托盘中的实例。用 `--toggle-transcription` 运行第二个实例不会改变正在运行的进程的环境变量。

**让变通方法永久生效**

请在实际启动 Handy 的启动器环境中设置该变量。shell 配置文件中的导出可能不会应用于桌面菜单或自动启动的启动方式。如果你通过 `.desktop` 文件启动 Handy，可以在 `Exec=` 行前加前缀，例如：

```ini
Exec=env HANDY_NO_GTK_LAYER_SHELL=1 handy
```

Handy 内置的自动启动会重写它生成的桌面条目，因此编辑该条目并不是持久的变通方法。对于自动启动，请使用合适的会话/服务环境，或禁用 Handy 内置的自动启动，并用自己的启动条目配合所需变量进行管理。

如果某个变通方法对你有效，请 [提交 issue](https://github.com/cjpais/Handy/issues) 说明你的发行版、桌面环境和会话类型——这些信息有助于我们定位底层缺陷。

### Hyprland / Omarchy 上的空白录音叠加层

如果录音叠加层是空白或只有边框，请完全退出 Handy，并在启用 Wayland 的情况下启动
[原生安装](https://github.com/cjpais/Handy/blob/main/BUILD.md#linux-install-from-source)：

```bash
env -u HANDY_NO_GTK_LAYER_SHELL GDK_BACKEND=wayland handy
```

如果这样可行，请只对 Handy 的启动器应用 `GDK_BACKEND=wayland`。

AppImage 会在你的环境之后于启动脚本中强制 `GDK_BACKEND=x11`，因此
`GDK_BACKEND=wayland ./Handy.AppImage` 不会生效。请改用 `HANDY_GDK_BACKEND`；Handy 会在 GTK 启动前把它复制到 `GDK_BACKEND`：

```bash
HANDY_GDK_BACKEND=wayland ./Handy_x.y.z_amd64.AppImage
```

对于启动器，请把该变量写入 `.desktop` 条目，例如
`Exec=env HANDY_GDK_BACKEND=wayland /path/to/Handy_x.y.z_amd64.AppImage`。

如果 AppImage 出现语言下拉框冻结、关闭到托盘后重新启动时黑屏（[#1729](https://github.com/cjpais/Handy/issues/1729)），或在 Niri 等没有 XWayland 的纯 Wayland 合成器上以
`Failed to initialize gtk backend` 退出（[#2034](https://github.com/cjpais/Handy/issues/2034)），请尝试原生 Wayland。由于
[tauri#8541](https://github.com/tauri-apps/tauri/issues/8541)，AppImage 默认使用 X11，所以这需要手动开启。

### Windows 上的 Vulkan 叠加层与捕获工具（`HANDY_KEEP_VULKAN_IMPLICIT_LAYERS`）

在 Windows 上，Handy 会让 Vulkan 加载器跳过隐式层，以避免叠加层和捕获钩子导致的崩溃（[#2049](https://github.com/cjpais/Handy/issues/2049)）。GPU 加速仍然启用；这不会更改系统级设置。

如果为了 GPU 选择或调试工具需要关闭此行为，请完全退出 Handy（包括托盘图标），然后在同一个 PowerShell 窗口中运行两条命令：

```powershell
$env:HANDY_KEEP_VULKAN_IMPLICIT_LAYERS = "1"
& "$env:ProgramFiles\Handy\handy.exe"
```

如有需要，请调整可执行文件路径。此覆盖仅对该 PowerShell 会话中启动的应用生效，不适用于开始菜单。Handy 也会保留任何已存在的 `VK_LOADER_LAYERS_DISABLE` 值。

### 如何贡献

1. **检查现有问题** [github.com/cjpais/Handy/issues](https://github.com/cjpais/Handy/issues)
2. **Fork 仓库** 并创建功能分支
3. **在你的目标平台上彻底测试**
4. **提交拉取请求** 并清晰描述更改
5. **参与讨论** - 通过 [contact@handy.computer](mailto:contact@handy.computer) 联系我们

目标是创建一个有用的工具和供他人构建的基础——一个模式良好、简单易懂的代码库，为社区服务。

## 相关项目

- **[Handy CLI](https://github.com/cjpais/handy-cli)** - 最初的 Python 命令行版本
- **[handy.computer](https://handy.computer)** - 项目网站，包含演示和文档

## 许可证

MIT 许可证 - 详见 [LICENSE](https://github.com/cjpais/Handy/blob/main/LICENSE) 文件。

Handy 是开源软件，但 Handy 的名称、徽标、图标和品牌资源并非开源。非官方分支、重写和再分发必须使用自己的品牌，且不得暗示获得认可或存在关联。

## 致谢

- **OpenAI 的 Whisper** 语音识别模型
- **ggml** 出色的跨平台张量库
- **Silero** 优秀的轻量级 VAD
- **Tauri** 团队出色的基于 Rust 的应用框架
- **社区贡献者** 帮助让 Handy 变得更好
