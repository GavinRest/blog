import{_ as i,c as a,o as n,ae as h}from"./chunks/framework.BHrE6nLq.js";const g=JSON.parse('{"title":"Linux 文件属性介绍（以 Ubuntu 为例）","description":"","frontmatter":{},"headers":[],"relativePath":"develop/linux/basics/file_attr.md","filePath":"develop/linux/basics/file_attr.md"}'),t={name:"develop/linux/basics/file_attr.md"};function l(k,s,p,e,r,E){return n(),a("div",null,s[0]||(s[0]=[h(`<h1 id="linux-文件属性介绍-以-ubuntu-为例" tabindex="-1">Linux 文件属性介绍（以 Ubuntu 为例） <a class="header-anchor" href="#linux-文件属性介绍-以-ubuntu-为例" aria-label="Permalink to &quot;Linux 文件属性介绍（以 Ubuntu 为例）&quot;">​</a></h1><p>本文内容包括文件权限、文件类型、时间戳、扩展属性以及硬链接和软链接等方面。</p><h2 id="文件权限-file-permissions" tabindex="-1">文件权限（File Permissions） <a class="header-anchor" href="#文件权限-file-permissions" aria-label="Permalink to &quot;文件权限（File Permissions）&quot;">​</a></h2><p>Linux 文件系统有三种基本权限：<strong>读取（r）</strong>、<strong>写入（w）</strong> 和 <strong>执行（x）</strong>。</p><h3 id="权限类型" tabindex="-1">权限类型： <a class="header-anchor" href="#权限类型" aria-label="Permalink to &quot;权限类型：&quot;">​</a></h3><ul><li><strong>r (read)</strong>：读取文件的内容。</li><li><strong>w (write)</strong>：修改文件内容。</li><li><strong>x (execute)</strong>：执行文件，适用于可执行文件或脚本。</li></ul><h3 id="权限分配" tabindex="-1">权限分配： <a class="header-anchor" href="#权限分配" aria-label="Permalink to &quot;权限分配：&quot;">​</a></h3><p>每个文件或目录都有三类用户：</p><ol><li><strong>文件拥有者（Owner）</strong>：文件的创建者。</li><li><strong>文件所在组（Group）</strong>：文件所属的用户组。</li><li><strong>其他用户（Others）</strong>：不属于文件拥有者和所属组的其他用户。</li></ol><ul><li>终端中使用 <code>ls -l</code> 可以查看文件权限</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -l</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /path/to/file</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-rwxr-xr-x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> group</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1234</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Mar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 28</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 12:34</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file.txt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-rwxr-xr-x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">第一个字符</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> **</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;-&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">**</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 表示是普通文件（如果是目录则为</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> **</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;d&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">**</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">，如果是符号链接则为</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> **</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">**</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 等）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;rwx&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 表示文件拥有者的权限：</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">r</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">（读）、</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">w</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">（写）、</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">（执行）。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;r-x&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 表示同组用户的权限：</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">r</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">（读）、无写权限、</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">（执行）。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;r-x&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 表示其他用户的权限，同样为 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">r</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">（读）、无写权限、</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">（执行）。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：表示该文件的硬链接数，默认是1。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">user</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：显示文件的所有者。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">group</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：显示文件所属的用户组。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1234</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：表示文件大小，单位通常是字节（Bytes）。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Mar 28 12:34</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：表示文件最后修改的日期和时间</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">file.txt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：显示文件的名称。</span></span></code></pre></div><h2 id="文件属性" tabindex="-1">文件属性 <a class="header-anchor" href="#文件属性" aria-label="Permalink to &quot;文件属性&quot;">​</a></h2><p>使用 <code>lsattr</code> 命令可以查看文件的属性</p>`,13)]))}const F=i(t,[["render",l]]);export{g as __pageData,F as default};
