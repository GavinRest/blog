import{_ as i,c as a,o as t,ae as n}from"./chunks/framework.BHrE6nLq.js";const o=JSON.parse('{"title":"Python 条件判断","description":"","frontmatter":{},"headers":[],"relativePath":"develop/python/basics/if.md","filePath":"develop/python/basics/if.md"}'),h={name:"develop/python/basics/if.md"};function l(e,s,p,k,d,r){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="python-条件判断" tabindex="-1">Python 条件判断 <a class="header-anchor" href="#python-条件判断" aria-label="Permalink to &quot;Python 条件判断&quot;">​</a></h1><p>在 Python 中条件判断主要依赖 <code>if</code> 语句，并且支持 <code>elif</code> 和 <code>else</code> 关键字。</p><h2 id="_1-基本的-if-语句" tabindex="-1">1. 基本的 <code>if</code> 语句 <a class="header-anchor" href="#_1-基本的-if-语句" aria-label="Permalink to &quot;1. 基本的 \`if\` 语句&quot;">​</a></h2><p><code>if</code> 语句用于判断一个条件是否为 <code>True</code>，如果条件成立，则执行代码块。</p><h3 id="示例" tabindex="-1">示例： <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例：&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 18</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 18</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;你已成年&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="_2-if-else-语句" tabindex="-1">2. <code>if...else</code> 语句 <a class="header-anchor" href="#_2-if-else-语句" aria-label="Permalink to &quot;2. \`if...else\` 语句&quot;">​</a></h2><p><code>if...else</code> 语句用于在条件不成立时执行另一个代码块。</p><h3 id="示例-1" tabindex="-1">示例： <a class="header-anchor" href="#示例-1" aria-label="Permalink to &quot;示例：&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 16</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 18</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;你已成年&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;你未成年&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="_3-if-elif-else-语句" tabindex="-1">3. <code>if...elif...else</code> 语句 <a class="header-anchor" href="#_3-if-elif-else-语句" aria-label="Permalink to &quot;3. \`if...elif...else\` 语句&quot;">​</a></h2><p>当有多个条件需要判断时，可以使用 <code>elif</code> 关键字。</p><h3 id="示例-2" tabindex="-1">示例： <a class="header-anchor" href="#示例-2" aria-label="Permalink to &quot;示例：&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">score </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 85</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> score </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 90</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;优秀&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">elif</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> score </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;良好&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">elif</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> score </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 60</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;及格&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;不及格&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="_4-条件判断的表达式" tabindex="-1">4. 条件判断的表达式 <a class="header-anchor" href="#_4-条件判断的表达式" aria-label="Permalink to &quot;4. 条件判断的表达式&quot;">​</a></h2><p>Python 允许使用<strong>比较运算符</strong>和<strong>逻辑运算符</strong>来构建条件。</p><h3 id="_4-1-比较运算符" tabindex="-1">4.1 比较运算符 <a class="header-anchor" href="#_4-1-比较运算符" aria-label="Permalink to &quot;4.1 比较运算符&quot;">​</a></h3><table tabindex="0"><thead><tr><th>运算符</th><th>含义</th></tr></thead><tbody><tr><td><code>==</code></td><td>等于</td></tr><tr><td><code>!=</code></td><td>不等于</td></tr><tr><td><code>&gt;</code></td><td>大于</td></tr><tr><td><code>&lt;</code></td><td>小于</td></tr><tr><td><code>&gt;=</code></td><td>大于等于</td></tr><tr><td><code>&lt;=</code></td><td>小于等于</td></tr></tbody></table><p>示例：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;x 小于 y&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h3 id="_4-2-逻辑运算符" tabindex="-1">4.2 逻辑运算符 <a class="header-anchor" href="#_4-2-逻辑运算符" aria-label="Permalink to &quot;4.2 逻辑运算符&quot;">​</a></h3><table tabindex="0"><thead><tr><th>运算符</th><th>含义</th></tr></thead><tbody><tr><td><code>and</code></td><td>逻辑与（两个条件都为 <code>True</code> 才返回 <code>True</code>）</td></tr><tr><td><code>or</code></td><td>逻辑或（只要一个条件为 <code>True</code> 就返回 <code>True</code>）</td></tr><tr><td><code>not</code></td><td>逻辑非（取反）</td></tr></tbody></table><p>示例：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 15</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;x 和 y 都满足条件&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="_5-三元运算符-条件表达式" tabindex="-1">5. 三元运算符（条件表达式） <a class="header-anchor" href="#_5-三元运算符-条件表达式" aria-label="Permalink to &quot;5. 三元运算符（条件表达式）&quot;">​</a></h2><p>Python 支持使用<strong>单行表达式</strong>来进行条件判断，格式如下：</p><p>示例：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">status </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;成年人&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 18</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> else</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;未成年人&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(status)</span></span></code></pre></div><h2 id="_6-pass-语句" tabindex="-1">6. <code>pass</code> 语句 <a class="header-anchor" href="#_6-pass-语句" aria-label="Permalink to &quot;6. \`pass\` 语句&quot;">​</a></h2><p><code>pass</code> 语句可以用来作为占位符，在代码未完成时避免语法错误。</p><p>示例：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 18</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    pass</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 未来添加更多逻辑</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;未成年&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="_7-match-case-语句-python-3-10" tabindex="-1">7. <code>match-case</code> 语句（Python 3.10+） <a class="header-anchor" href="#_7-match-case-语句-python-3-10" aria-label="Permalink to &quot;7. \`match-case\` 语句（Python 3.10+）&quot;">​</a></h2><p>Python 3.10 引入了 <code>match-case</code> 语句，用于替代多个 <code>if-elif-else</code> 结构，提高代码可读性。</p><h3 id="语法结构" tabindex="-1">语法结构： <a class="header-anchor" href="#语法结构" aria-label="Permalink to &quot;语法结构：&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">match</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 变量:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 值1:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        代码块1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 值2:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        代码块2</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        代码块3  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 默认情况</span></span></code></pre></div><h3 id="示例-3" tabindex="-1">示例： <a class="header-anchor" href="#示例-3" aria-label="Permalink to &quot;示例：&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> process_command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(command):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    match</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> command:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        case</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;start&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;系统启动&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        case</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;stop&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;系统停止&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;未知命令&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">process_command(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;start&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div>`,38)]))}const c=i(h,[["render",l]]);export{o as __pageData,c as default};
