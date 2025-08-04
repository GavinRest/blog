import{_ as a,c as n,o as p,ae as e}from"./chunks/framework.BHrE6nLq.js";const u=JSON.parse('{"title":"Linux 启动过程","description":"","frontmatter":{},"headers":[],"relativePath":"develop/linux/basics/boot.md","filePath":"develop/linux/basics/boot.md"}'),i={name:"develop/linux/basics/boot.md"};function l(t,s,c,o,d,r){return p(),n("div",null,s[0]||(s[0]=[e(`<h1 id="linux-启动过程" tabindex="-1">Linux 启动过程 <a class="header-anchor" href="#linux-启动过程" aria-label="Permalink to &quot;Linux 启动过程&quot;">​</a></h1><p>Linux 启动并不复杂，可以分为几个主要步骤。以 <strong>Ubuntu</strong> 为例。</p><h2 id="_1-bios-uefi-启动" tabindex="-1">1. BIOS / UEFI 启动 <a class="header-anchor" href="#_1-bios-uefi-启动" aria-label="Permalink to &quot;1. BIOS / UEFI 启动&quot;">​</a></h2><p>计算机开机后，BIOS 或 UEFI 会进行硬件自检，检查并加载系统。在这之后，操作系统接管控制权，继续加载内核。</p><h2 id="_2-内核引导" tabindex="-1">2. 内核引导 <a class="header-anchor" href="#_2-内核引导" aria-label="Permalink to &quot;2. 内核引导&quot;">​</a></h2><p>在 Ubuntu 系统中，内核存储在 <code>/boot</code> 目录下。启动时，内核从引导分区加载到内存，接管硬件控制。此时，操作系统准备开始启动。</p><h2 id="_3-init-进程" tabindex="-1">3. <code>init</code> 进程 <a class="header-anchor" href="#_3-init-进程" aria-label="Permalink to &quot;3. \`init\` 进程&quot;">​</a></h2><p>内核加载完成后，控制权转交给 <strong><code>init</code> 进程</strong>，它是系统中所有其他进程的起点。Ubuntu 使用 <code>systemd</code> 作为初始化系统，因此 <code>init</code> 进程由 <code>systemd</code> 替代，成为 PID 1 进程。<code>systemd</code> 会启动所有需要的服务和守护进程。</p><h2 id="_4-系统初始化" tabindex="-1">4. 系统初始化 <a class="header-anchor" href="#_4-系统初始化" aria-label="Permalink to &quot;4. 系统初始化&quot;">​</a></h2><p><code>systemd</code> 负责读取 <code>/etc/systemd/system/</code> 和 <code>/lib/systemd/system/</code> 目录下的单元文件（.service 文件），并根据这些文件并行启动系统服务。常见的初始化任务包括：</p><ul><li>激活交换分区（swap）。</li><li>检查文件系统。</li><li>启动硬件驱动程序。</li><li>启动网络服务、日志服务等。</li></ul><h2 id="_5-运行级别-targets" tabindex="-1">5. 运行级别（Targets） <a class="header-anchor" href="#_5-运行级别-targets" aria-label="Permalink to &quot;5. 运行级别（Targets）&quot;">​</a></h2><p>Ubuntu 使用 <strong><code>systemd</code></strong> 的目标（targets）来替代传统的运行级别。常见的目标包括：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在 Ubuntu 中，init 0-6 传统运行级别被 systemd targets取代。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> isolate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> multi-user.target</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 进入多用户模式。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> isolate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> graphical.target</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 进入图形界面模式。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reboot</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 重启系统。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> poweroff</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 关闭系统。</span></span></code></pre></div><h2 id="_6-登录终端" tabindex="-1">6. 登录终端 <a class="header-anchor" href="#_6-登录终端" aria-label="Permalink to &quot;6. 登录终端&quot;">​</a></h2><p>当系统初始化完成后，Ubuntu 会启动一个或多个终端。对于图形界面模式，用户会看到图形化登录界面；对于命令行模式，用户会看到一个文本登录界面。</p><p>在命令行模式下，<code>mingetty</code> 程序会提供 6 个终端，允许用户登录：</p><ul><li><code>tty1</code> 到 <code>tty6</code>。</li><li>用户可以使用 <code>Ctrl + Alt + F1~F6</code> 切换到不同的终端。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>+------------------+</span></span>
<span class="line"><span>|   Power On      |</span></span>
<span class="line"><span>|  BIOS/UEFI      |</span></span>
<span class="line"><span>|  Check Hardware |</span></span>
<span class="line"><span>+--------+---------+</span></span>
<span class="line"><span>         |</span></span>
<span class="line"><span>         v</span></span>
<span class="line"><span>+------------------+</span></span>
<span class="line"><span>| Boot Loader     |</span></span>
<span class="line"><span>|    GRUB         |</span></span>
<span class="line"><span>| Load Kernel     |</span></span>
<span class="line"><span>+--------+---------+</span></span>
<span class="line"><span>         |</span></span>
<span class="line"><span>         v</span></span>
<span class="line"><span>+------------------+</span></span>
<span class="line"><span>|    Kernel       |</span></span>
<span class="line"><span>|   Ubuntu Kernel |</span></span>
<span class="line"><span>| Start Kernel    |</span></span>
<span class="line"><span>+--------+---------+</span></span>
<span class="line"><span>         |</span></span>
<span class="line"><span>         v</span></span>
<span class="line"><span>+------------------+</span></span>
<span class="line"><span>|     Init        |</span></span>
<span class="line"><span>|    systemd      |</span></span>
<span class="line"><span>| Manage Services |</span></span>
<span class="line"><span>+--------+---------+</span></span>
<span class="line"><span>         |</span></span>
<span class="line"><span>         v</span></span>
<span class="line"><span>+------------------+</span></span>
<span class="line"><span>|  Runlevel       |</span></span>
<span class="line"><span>| multi-user      |</span></span>
<span class="line"><span>| graphical       |</span></span>
<span class="line"><span>| Load Services   |</span></span>
<span class="line"><span>+--------+---------+</span></span>
<span class="line"><span>         |</span></span>
<span class="line"><span>         v</span></span>
<span class="line"><span>+------------------+</span></span>
<span class="line"><span>|    Login        |</span></span>
<span class="line"><span>| User Login      |</span></span>
<span class="line"><span>| Get User Input  |</span></span>
<span class="line"><span>+------------------+</span></span></code></pre></div>`,19)]))}const k=a(i,[["render",l]]);export{u as __pageData,k as default};
