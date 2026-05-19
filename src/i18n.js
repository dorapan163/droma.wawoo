window.DromaI18n = (function () {
  const STORAGE_KEY = 'droma-lang';

  const messages = {
    en: {
      'meta.title': 'Droma | The Power of AI',
      'nav.features': 'Features',
      'nav.tech': 'Tech',
      'nav.download': 'Download',
      'cta.getStarted': 'Get Started',
      'lang.switchToZh': '中文',
      'lang.switchToEn': 'EN',
      'lang.aria': 'Switch language',
      'menu.aria': 'Toggle menu',
      'features.tag': 'Features',
      'hero.title': 'Droma: The Power of AI, Carved into Your Phone',
      'hero.subtitle':
        'No network required after download — run local LLM inference on mobile, built for performance, privacy, and ease of use.',
      'hero.launchConsole': 'Download',
      'hero.documentation': 'Docs',
      'hero.explore': 'Explore',
      'hero.carouselAria': 'Droma product gallery',
      'hero.chooseSlide': 'Choose slide',
      'hero.slideAlt': 'Droma showcase',
      'hero.slideAria': 'Slide {n}',
      'features.luxury.title': 'Technical Strength',
      'features.luxury.desc':
        'Everything you need to run powerful AI models locally — without compromising speed or security.',
      'features.npu.title': 'NPU Acceleration',
      'features.npu.desc':
        'Neural engines tuned for local inference with zero-latency hardware handshake.',
      'features.npu.status': 'CORE STATUS: OPTIMIZED',
      'features.npu.latency': 'LATENCY: 0.04ms',
      'features.npu.imgAlt': 'NPU acceleration',
      'features.privacy.title': 'Privacy First',
      'features.privacy.desc':
        'Your data never leaves the device. Local weights, zero cloud telemetry.',
      'features.neural.title': 'Neural Synapse',
      'features.neural.active': 'DYNAMIC RESOURCE ALLOCATION ACTIVE',
      'features.integration.title':
        'Seamless Local Knowledge Base & RAG Integration',
      'features.integration.desc':
        'Local inference and RAG on mobile through the Droma Bridge API.',
      'features.modelHub.title': 'Model Hub',
      'features.modelHub.desc':
        'Import GGUF, task, tflite, and custom weights. One-tap quantization for your device tier.',
      'features.chat.title': 'Multi-Session Chat',
      'features.chat.desc':
        'Parallel chats with isolated context windows and persistent local history.',
      'features.control.title': 'Fine Control',
      'features.control.desc':
        'Temperature, top-p, context length — full inference parameters at your fingertips.',
      'tech.tag': 'Tech',
      'tech.title': 'Architecture Under the Hood',
      'tech.desc':
        'Droma v2.0 stacks a mobile-native runtime on hardware-accelerated inference — designed for offline-first deployment.',
      'tech.layer04.label': 'LAYER 04',
      'tech.layer04.title': 'Droma Console UI',
      'tech.layer04.desc': 'Mobile-native · real-time token streaming · model switcher',
      'tech.layer03.label': 'LAYER 03',
      'tech.layer03.title': 'Droma Bridge API',
      'tech.layer03.desc': 'C++ relay · real-time RAG · open model hub hooks',
      'tech.layer02.label': 'LAYER 02',
      'tech.layer02.title': 'Inference Engine',
      'tech.layer02.desc': 'llama.cpp core · Metal / Vulkan / NNAPI backends · KV-cache pooling',
      'tech.layer01.label': 'LAYER 01',
      'tech.layer01.title': 'Hardware Runtime',
      'tech.layer01.desc': 'NPU / GPU dispatch · thermal-aware throttling · unified memory mapping',
      'tech.formats.title': 'Supported Formats',
      'tech.backends.title': 'Backends',
      'tech.stat.tokens': 'TOKENS / SEC',
      'tech.stat.tokensNote': '7B Q4 · Qualcomm / MediaTek / Apple silicon',
      'tech.stat.ram': 'RAM FOOTPRINT',
      'tech.stat.ramNote': '8K context window',
      'tech.stat.offline': 'FULLY OFFLINE',
      'tech.stat.offlineNote': 'Zero network requests',
      'tech.stat.encNote': 'Encryption at rest',
      'tech.table.component': 'Component',
      'tech.table.technology': 'Technology',
      'tech.table.version': 'Version',
      'tech.table.inference': 'Inference Core',
      'tech.table.inferenceTech': 'llama.cpp + custom ops',
      'tech.table.shell': 'Mobile Shell',
      'tech.table.shellTech': 'Android / iOS native',
      'tech.table.bridge': 'Bridge API',
      'tech.table.bridgeTech': 'C++ / Transformer stack',
      'tech.table.security': 'Security',
      'tech.table.securityTech': 'Secure Enclave · Keychain',
      'tech.table.platform': 'Platform',
      'download.tag': 'Download',
      'download.title': 'Own the Edge.',
      'download.desc':
        'Download the Droma mobile console and unlock the full potential of your device\'s neural processing unit.',
      'download.version': 'Latest release · v2.0.4 · Build 240518',
      'download.qrGoogleAlt': 'Google Play download QR code',
      'download.qrAppleAlt': 'App Store download QR code',
      'download.android': 'Android 12+',
      'download.ios': 'iOS 16+',
      'download.requirements': 'System Requirements',
      'download.ram': 'RAM',
      'download.ramDesc': 'Minimum 6 GB · 8 GB+ recommended for 7B models',
      'download.storage': 'Storage',
      'download.storageDesc': '~2 GB app + 4–12 GB per model (varies by quantization)',
      'download.processor': 'Processor',
      'download.processorDesc':
        'Snapdragon 8 Gen 2+, Apple A15+ CPU, or equivalent chips with NPU support',
      'download.quickStart': 'Quick Start',
      'download.step1.title': 'Install Droma',
      'download.step1.desc':
        'Download from your app store or scan the QR code on the matching card above.',
      'download.step2.title': 'Import a Model',
      'download.step2.desc':
        'Open Models → import local GGUF files, or browse the online model library in Droma and download.',
      'download.step3.title': 'Load Model & Start Inference',
      'download.step3.desc':
        'Choose a model, tune parameters, and start a chat — fully offline.',
      'footer.tagline': '© 2026 Droma.Studio. Carved for ultra-lightweight performance.',
      'footer.documentation': 'Docs',
      'footer.privacy': 'Privacy',
      'footer.security': 'Security',
      'footer.terms': 'Terms',
      'nav.docs': 'User Guide',
      'docs.meta.title': 'Droma User Guide',
      'docs.hero.title': 'Droma User Guide',
      'docs.hero.subtitle': 'Learn how to install, configure, and run local AI on your device.',
      'docs.sidebar.title': 'Contents',
      'docs.sidebar.gettingStarted': 'Getting Started',
      'docs.sidebar.install': 'Installation',
      'docs.sidebar.models': 'Model Hub',
      'docs.sidebar.chat': 'Chat',
      'docs.sidebar.settings': 'Inference Settings',
      'docs.sidebar.api': 'Bridge API',
      'docs.sidebar.troubleshoot': 'Troubleshooting',
      'docs.sidebar.faq': 'FAQ',
      'docs.gettingStarted.title': 'Getting Started',
      'docs.gettingStarted.p1': 'Droma is a mobile console for running large language models entirely on your device. No cloud account is needed after setup.',
      'docs.gettingStarted.p2': 'After install, complete the first-run wizard, download and pick a default model tier, and enable on-device encryption for stored weights.',
      'docs.gettingStarted.p3': 'Open the Console tab for your first chat. All inference runs locally on your CPU, GPU, or NPU.',
      'docs.install.title': 'Installation',
      'docs.install.p1': 'Get Droma from Google Play or the App Store, or scan the QR code on our download page.',
      'docs.install.p2': 'Allow storage access when prompted so the app can import and cache model files. Microphone permission is only needed for voice input.',
      'docs.install.p3': 'Keep at least 6 GB free RAM and enough storage for your models (typically 4–12 GB per 7B-class model, depending on quantization).',
      'docs.models.title': 'Model Hub',
      'docs.models.p1': 'Open Model Hub from the bottom bar to browse online models or import your own GGUF, task, and tflite files.',
      'docs.models.p2': 'Tap a model card for size, quantization, and estimated tokens per second on your device. Use Benchmark to match your hardware.',
      'docs.models.p3': 'Downloaded weights stay in the app sandbox, encrypted at rest with AES-256-GCM. Delete unused models in Model Hub to free space.',
      'docs.chat.title': 'Chat',
      'docs.chat.p1': 'Chat supports multiple parallel sessions, each with its own context and on-device history.',
      'docs.chat.p2': 'Long-press a message to copy, regenerate, or branch. Swipe left on a session in the drawer to archive or delete.',
      'docs.chat.p3': 'Replies stream token by token. If it feels slow, try a smaller quantization (e.g. Q4_K_M) or shorten context length in settings.',
      'docs.settings.title': 'Inference Settings',
      'docs.settings.p1': 'Under Settings → Inference, adjust temperature, top-p, top-k, repeat penalty, and max context — per session or as global defaults.',
      'docs.settings.p2': 'Turn on NPU / GPU acceleration when your chip supports it. The app falls back to CPU (NEON / AVX2) if hardware paths are unavailable.',
      'docs.settings.p3': 'Advanced users can export a diagnostic log (no message content) to help tune backend selection.',
      'docs.api.title': 'Bridge API (Coming Soon)',
      'docs.api.p1': 'While the app is in the foreground, Droma Bridge will offer backend search and RAG over your local network.',
      'docs.api.p2': 'Copy the base URL and API key from the API tab. Third-party clients can list models, run chat completions, and stream tokens from your loaded local model.',
      'docs.troubleshoot.title': 'Troubleshooting',
      'docs.troubleshoot.p1': 'Model won\'t load: check free storage, re-download weights, and confirm the format (GGUF recommended).',
      'docs.troubleshoot.p2': 'App exits under load: close background apps, lower context length, or use a smaller model. Thermal throttling may slow inference briefly.',
      'docs.troubleshoot.p3': 'The app is offline-first; cloud features are unavailable. Bridge API works only when Droma is open and the local server toggle is on.',
      'docs.faq.title': 'FAQ',
      'docs.faq.q1': 'Is my data sent to the cloud?',
      'docs.faq.a1': 'No. Chat history and model weights stay on your device unless you export them or use Bridge API on your local network.',
      'docs.faq.q2': 'Which model formats are supported?',
      'docs.faq.a2': 'GGUF is primary. ONNX Mobile and custom Droma Packs can be imported through Model Hub.',
      'docs.faq.q3': 'How do I update the app?',
      'docs.faq.a3': 'Update via your platform store like any other app. Model files are managed separately in Model Hub.',
      'docs.backHome': 'Back to website',
      'docs.downloadCta': 'Download Droma',
    },
    zh: {
      'meta.title': 'Droma | AI 的力量',
      'nav.features': '功能',
      'nav.tech': '技术',
      'nav.download': '下载',
      'cta.getStarted': '立即开始',
      'lang.switchToZh': '中文',
      'lang.switchToEn': 'EN',
      'lang.aria': '切换语言',
      'menu.aria': '打开菜单',
      'features.tag': '功能',
      'hero.title': 'Droma：将 AI 的力量，刻进你的手机',
      'hero.subtitle':
        '下载后无需网络，体验移动端本地大模型部署推理，为性能、隐私与便捷而生。',
      'hero.launchConsole': '下载',
      'hero.documentation': '文档',
      'hero.explore': '探索',
      'hero.carouselAria': 'Droma 产品展示',
      'hero.chooseSlide': '选择幻灯片',
      'hero.slideAlt': 'Droma 展示',
      'hero.slideAria': '第 {n} 张',
      'features.luxury.title': '技术强大',
      'features.luxury.desc': '在本地运行强大 AI 模型所需的一切——速度与安全兼得。',
      'features.npu.title': 'NPU 加速',
      'features.npu.desc': '专为本地推理优化的神经引擎，硬件握手零延迟。',
      'features.npu.status': '核心状态：已优化',
      'features.npu.latency': '延迟：0.04ms',
      'features.npu.imgAlt': 'NPU 加速',
      'features.privacy.title': '隐私优先',
      'features.privacy.desc': '数据永不离开设备。本地化权重，零云端遥测。',
      'features.neural.title': '神经突触',
      'features.neural.active': '动态资源分配已启用',
      'features.integration.title': '无缝集成本地知识库与RAG服务',
      'features.integration.desc': '通过 Droma Bridge API 使用移动端进行本地推理与RAG服务',
      'features.modelHub.title': '模型中心',
      'features.modelHub.desc': '导入 GGUF、task、tflite与自定义权重。一键按设备档位量化。',
      'features.chat.title': '多会话聊天',
      'features.chat.desc': '并行对话、隔离上下文窗口与持久本地历史。',
      'features.control.title': '精细调控',
      'features.control.desc': '温度、top-p、上下文长度——推理参数尽在掌握。',
      'tech.tag': '技术',
      'tech.title': '底层架构',
      'tech.desc': 'Droma v2.0 在硬件加速推理之上构建移动原生运行时——为离线优先部署而设计。',
      'tech.layer04.label': '第 04 层',
      'tech.layer04.title': 'Droma 控制台界面',
      'tech.layer04.desc': '移动端原生 · 实时 token 流 · 模型切换',
      'tech.layer03.label': '第 03 层',
      'tech.layer03.title': 'Droma Bridge API',
      'tech.layer03.desc': ' C++中继站，实时RAG，开源模型站钩子',
      'tech.layer02.label': '第 02 层',
      'tech.layer02.title': '推理引擎',
      'tech.layer02.desc': 'llama.cpp 核心 · Metal / Vulkan / NNAPI 后端 · KV 缓存池',
      'tech.layer01.label': '第 01 层',
      'tech.layer01.title': '硬件运行时',
      'tech.layer01.desc': 'NPU / GPU 调度 · 温控节流 · 统一内存映射',
      'tech.formats.title': '支持格式',
      'tech.backends.title': '推理后端',
      'tech.stat.tokens': 'Token / 秒',
      'tech.stat.tokensNote': '7B Q4 · 高通/联发科/苹果芯片支持',
      'tech.stat.ram': '内存占用',
      'tech.stat.ramNote': '8K 上下文窗口',
      'tech.stat.offline': '完全离线',
      'tech.stat.offlineNote': '零网络请求',
      'tech.stat.encNote': '静态加密',
      'tech.table.component': '组件',
      'tech.table.technology': '技术栈',
      'tech.table.version': '版本',
      'tech.table.inference': '推理核心',
      'tech.table.inferenceTech': 'llama.cpp + 自定义算子',
      'tech.table.shell': '移动外壳',
      'tech.table.shellTech': 'Android/iOS原生',
      'tech.table.bridge': 'Bridge API',
      'tech.table.bridgeTech': 'C++/Transformer架构',
      'tech.table.security': '安全',
      'tech.table.securityTech': 'Secure Enclave · Keychain',
      'tech.table.platform': '平台',
      'download.tag': '下载',
      'download.title': '掌控边缘算力。',
      'download.desc': '下载 Droma 移动控制台，释放设备神经处理单元的全部潜能。',
      'download.version': '最新版本 · v2.0.4 · 构建 240518',
      'download.qrGoogleAlt': 'Google Play 下载二维码',
      'download.qrAppleAlt': 'App Store 下载二维码',
      'download.android': 'Android 12+',
      'download.ios': 'iOS 16+',
      'download.requirements': '系统要求',
      'download.ram': '内存',
      'download.ramDesc': '最低 6 GB · 运行 7B 模型建议 8 GB 及以上',
      'download.storage': '存储',
      'download.storageDesc': '应用约 2 GB + 每个模型 4–12 GB（因量化而异）',
      'download.processor': '处理器',
      'download.processorDesc': '骁龙 8 Gen 2+、Apple A15+ CPU或同等支持 NPU 的芯片',
      'download.quickStart': '快速开始',
      'download.step1.title': '安装 Droma',
      'download.step1.desc': '从应用商店下载，或扫描上方对应平台的二维码。',
      'download.step2.title': '导入模型',
      'download.step2.desc': '打开模型页面 → 导入本地 GGUF 或使用Droma浏览在线模型库并下载。',
      'download.step3.title': '装载大模型并启动推理',
      'download.step3.desc': '选择模型、调整参数，创建对话——完全离线。',
      'footer.tagline': '© 2026 Droma.Studio 为极致轻量化的性能而雕琢。',
      'footer.documentation': '文档',
      'footer.privacy': '隐私',
      'footer.security': '安全',
      'footer.terms': '条款',
      'nav.docs': '使用文档',
      'docs.meta.title': 'Droma 使用文档',
      'docs.hero.title': 'Droma 使用指南',
      'docs.hero.subtitle': '了解如何在设备上安装、配置并运行本地 AI。',
      'docs.sidebar.title': '目录',
      'docs.sidebar.gettingStarted': '快速入门',
      'docs.sidebar.install': '安装',
      'docs.sidebar.models': '模型中心',
      'docs.sidebar.chat': '对话',
      'docs.sidebar.settings': '推理设置',
      'docs.sidebar.api': 'Bridge API',
      'docs.sidebar.troubleshoot': '故障排除',
      'docs.sidebar.faq': '常见问题',
      'docs.gettingStarted.title': '快速入门',
      'docs.gettingStarted.p1': 'Droma 是一款在设备上完全运行大语言模型的移动控制台。完成设置后无需云端账号。',
      'docs.gettingStarted.p2': '安装应用后，完成首次引导向导，下载并选择默认模型档位，并为本地权重启用设备端加密。',
      'docs.gettingStarted.p3': '打开「控制台」标签开始首次对话。所有推理均在本地完成，使用手机的 CPU、GPU 或 NPU。',
      'docs.install.title': '安装',
      'docs.install.p1': '从 Google Play 或 App Store 下载 Droma，或扫描官网下载页的二维码。',
      'docs.install.p2': '在提示时授予存储权限，以便导入与缓存模型文件。麦克风权限仅在您使用语音输入时需要。',
      'docs.install.p3': '请保持至少 6 GB 可用内存，并为所选模型预留足够存储空间（7B 级模型通常需 4–12 GB，视量化而定）。',
      'docs.models.title': '模型中心',
      'docs.models.p1': '从底部导航进入模型中心，浏览在线模型，或导入自有 GGUF、task、tflite文件。',
      'docs.models.p2': '点击模型卡片查看体积、量化方式及在您设备上的预估 Token 速度。可使用Benchmark以匹配硬件。',
      'docs.models.p3': '已下载权重保存在应用沙盒中，静态加密为 AES-256-GCM。可在模型中心删除不用的模型以释放空间。',
      'docs.chat.title': '对话',
      'docs.chat.p1': '对话界面支持多个并行会话。每个会话在设备上拥有独立的上下文窗口与历史记录。',
      'docs.chat.p2': '长按消息可复制、重新生成或分支对话。在侧栏左滑会话可归档或删除。',
      'docs.chat.p3': '回复以流式逐 Token 显示。若生成较慢，可尝试更小量化（如 Q4_K_M）或在设置中缩短上下文长度。',
      'docs.settings.title': '推理设置',
      'docs.settings.p1': '在 设置 → 推理 中可调节 temperature、top-p、top-k、重复惩罚与最大上下文长度，可为单次会话或全局默认值。',
      'docs.settings.p2': '在芯片支持时启用 NPU / GPU 加速。若硬件路径不可用，应用会自动回退至 CPU（NEON / AVX2）。',
      'docs.settings.p3': '高级用户可导出诊断日志（不含消息内容），便于支持团队协助优化后端选择。',
      'docs.api.title': 'Bridge API（暂未开放）',
      'docs.api.p1': 'Droma Bridge 在应用处于前台时，于本地网络提供兼容后台搜索和RAG服务。',
      'docs.api.p2': '在 API 标签页复制基础 URL 与 API 密钥。第三方客户端可列出模型、创建聊天补全，并对已加载的本地模型进行流式输出。',
      'docs.troubleshoot.title': '故障排除',
      'docs.troubleshoot.p1': '模型加载失败：检查剩余存储、重新下载权重文件，并确认格式受支持（推荐 GGUF）。',
      'docs.troubleshoot.p2': '高负载时应用退出：关闭后台应用、降低上下文长度或换用更小模型。温控节流可能暂时降低速度。',
      'docs.troubleshoot.p3': '离线设计下云端功能不可用。Bridge API 仅在 Droma 打开且启用本地服务开关时可用。',
      'docs.faq.title': '常见问题',
      'docs.faq.q1': '数据会上传到云端吗？',
      'docs.faq.a1': '不会。对话历史与模型权重保留在设备上，除非您主动导出或在本地网络使用 Bridge API。',
      'docs.faq.q2': '支持哪些模型格式？',
      'docs.faq.a2': '主要支持 GGUF。ONNX Mobile 与自定义 Droma Pack 可通过模型中心导入。',
      'docs.faq.q3': '如何更新应用？',
      'docs.faq.a3': '与应用商店中其他应用相同，通过平台商店更新。模型文件在模型中心内单独管理。',
      'docs.backHome': '返回官网',
      'docs.downloadCta': '下载 Droma',
    },
  };

  let lang = localStorage.getItem(STORAGE_KEY) || 'en';
  if (lang !== 'en' && lang !== 'zh') lang = 'en';

  function t(key, vars) {
    let s = messages[lang][key] ?? messages.en[key] ?? key;
    if (vars) {
      Object.entries(vars).forEach(([k, v]) => {
        s = s.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v));
      });
    }
    return s;
  }

  function getLang() {
    return lang;
  }

  function updateToggleLabels() {
    const label = lang === 'en' ? t('lang.switchToZh') : t('lang.switchToEn');
    document.querySelectorAll('[data-lang-toggle-label]').forEach((el) => {
      el.textContent = label;
    });
    document.querySelectorAll('#lang-toggle, #lang-toggle-mobile').forEach((btn) => {
      btn.setAttribute('aria-label', t('lang.aria'));
    });
  }

  function apply() {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = t('meta.title');

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (key) el.textContent = t(key);
    });

    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const key = el.getAttribute('data-i18n-alt');
      if (key) el.alt = t(key);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      if (key) el.setAttribute('aria-label', t(key));
    });

    updateToggleLabels();
    document.dispatchEvent(new CustomEvent('droma:langchange', { detail: { lang } }));
  }

  function setLang(next) {
    lang = next === 'zh' ? 'zh' : 'en';
    localStorage.setItem(STORAGE_KEY, lang);
    apply();
  }

  function toggle() {
    setLang(lang === 'en' ? 'zh' : 'en');
  }

  function init() {
    const bind = () => {
      document.querySelectorAll('#lang-toggle, #lang-toggle-mobile').forEach((btn) => {
        btn.addEventListener('click', toggle);
      });
      apply();
    };
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', bind);
    } else {
      bind();
    }
  }

  return { t, getLang, setLang, toggle, init, apply };
})();
