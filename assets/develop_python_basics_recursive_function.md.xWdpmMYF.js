import{_ as i,c as a,o as n,ae as t}from"./chunks/framework.BHrE6nLq.js";const c=JSON.parse('{"title":"Python 递归函数与高阶函数","description":"","frontmatter":{},"headers":[],"relativePath":"develop/python/basics/recursive_function.md","filePath":"develop/python/basics/recursive_function.md"}'),h={name:"develop/python/basics/recursive_function.md"};function l(p,s,e,k,r,d){return n(),a("div",null,s[0]||(s[0]=[t(`<h1 id="python-递归函数与高阶函数" tabindex="-1">Python 递归函数与高阶函数 <a class="header-anchor" href="#python-递归函数与高阶函数" aria-label="Permalink to &quot;Python 递归函数与高阶函数&quot;">​</a></h1><p>函数不仅能“运行代码”，还可以像变量一样使用、传递和返回。把函数当作“第一类对象”来看待。这种特性是理解 <strong>装饰器（Decorator）</strong> 的前提。</p><h2 id="一、高阶函数-函数也能传来传去" tabindex="-1">一、高阶函数：函数也能传来传去 <a class="header-anchor" href="#一、高阶函数-函数也能传来传去" aria-label="Permalink to &quot;一、高阶函数：函数也能传来传去&quot;">​</a></h2><p>高阶函数就是：<strong>把函数当作参数</strong>，或者<strong>把函数当作返回值</strong>的函数。</p><h3 id="高阶函数示例" tabindex="-1">高阶函数示例 <a class="header-anchor" href="#高阶函数示例" aria-label="Permalink to &quot;高阶函数示例&quot;">​</a></h3><p><code>apply</code> 函数接收另一个函数 <code>square</code>，并在内部调用它。这就叫做高阶函数。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> apply</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(func, value):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> func(value)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> square</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(apply(square, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出: 16</span></span></code></pre></div><h3 id="python-闭包-函数也能有-记忆" tabindex="-1">Python 闭包：函数也能有“记忆” <a class="header-anchor" href="#python-闭包-函数也能有-记忆" aria-label="Permalink to &quot;Python 闭包：函数也能有“记忆”&quot;">​</a></h3><p>在 Python 中，函数不仅能执行代码，还能“记住信息”！这种能力叫做 <strong>闭包（Closure）</strong>。虽然这个概念听起来有点神秘，其实非常实用也很好理解。</p><p>闭包 = <strong>一个函数 + 它记住的外部变量</strong> 也就是说，当一个内部函数引用了外部函数的变量，并且外部函数已经执行完毕，这个内部函数仍然可以使用那个外部变量，这种情况就叫闭包。</p><h3 id="闭包示例" tabindex="-1">闭包示例 <a class="header-anchor" href="#闭包示例" aria-label="Permalink to &quot;闭包示例&quot;">​</a></h3><p>下面这段代码演示了闭包的结构和作用：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 定义外部函数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> outside</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x):</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 定义内部函数，并引用了 x 变量</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> inside</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(y):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 返回内部函数地址（不是调用）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> inside</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 调用外部函数，返回 inside 函数（它记住了 x=1）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">in_func </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> outside(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 调用返回的函数，相当于执行 inside(2)，即 1 + 2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> in_func(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出: 3</span></span></code></pre></div><h2 id="二、递归函数-函数自己调用自己" tabindex="-1">二、递归函数：函数自己调用自己 <a class="header-anchor" href="#二、递归函数-函数自己调用自己" aria-label="Permalink to &quot;二、递归函数：函数自己调用自己&quot;">​</a></h2><h3 id="_2-1-什么是递归" tabindex="-1">2.1 什么是递归？ <a class="header-anchor" href="#_2-1-什么是递归" aria-label="Permalink to &quot;2.1 什么是递归？&quot;">​</a></h3><p>递归就是<strong>一个函数在里面调用自己本身</strong>，直到满足终止条件。</p><h3 id="_2-2-示例-计算阶乘" tabindex="-1">2.2 示例：计算阶乘 <a class="header-anchor" href="#_2-2-示例-计算阶乘" aria-label="Permalink to &quot;2.2 示例：计算阶乘&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> factorial</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(n):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> factorial(n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(factorial(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出: 120</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>下一步：理解装饰器</p></div>`,19)]))}const E=i(h,[["render",l]]);export{c as __pageData,E as default};
