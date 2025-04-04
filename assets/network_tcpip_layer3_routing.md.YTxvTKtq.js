import{_ as o,c as r,o as n,ae as a}from"./chunks/framework.BHrE6nLq.js";const p=JSON.parse('{"title":"什么是路由？","description":"","frontmatter":{},"headers":[],"relativePath":"network/tcpip/layer3/routing.md","filePath":"network/tcpip/layer3/routing.md"}'),i={name:"network/tcpip/layer3/routing.md"};function e(l,t,s,g,c,u){return n(),r("div",null,t[0]||(t[0]=[a('<h1 id="什么是路由" tabindex="-1">什么是路由？ <a class="header-anchor" href="#什么是路由" aria-label="Permalink to &quot;什么是路由？&quot;">​</a></h1><blockquote><p><strong>路由（Routing）</strong> 是指在互联的网络中，将信息从源地址传输到目的地址的过程。路由发生在 <strong>OSI 网络参考模型</strong> 的 <strong>第三层（网络层）</strong>。</p></blockquote><h2 id="路由含义" tabindex="-1">路由含义 <a class="header-anchor" href="#路由含义" aria-label="Permalink to &quot;路由含义&quot;">​</a></h2><p>路由在网络工程通常有2种含义</p><ol><li><strong>物理层路由</strong>：指光缆的实际铺设路径，例如它经过哪些街道或管井。</li><li><strong>网络层路由</strong>：指路由表中的某个条目，用于指引数据包的去向。</li></ol><h2 id="路由类型" tabindex="-1">路由类型 <a class="header-anchor" href="#路由类型" aria-label="Permalink to &quot;路由类型&quot;">​</a></h2><h3 id="静态路由-static-routing" tabindex="-1"><strong>静态路由（Static Routing）</strong> <a class="header-anchor" href="#静态路由-static-routing" aria-label="Permalink to &quot;**静态路由（Static Routing）**&quot;">​</a></h3><blockquote><p>由管理员手动配置的路由，不会自动调整路径，适用于小型或拓扑结构稳定的网络。</p></blockquote><ul><li>需要手动更新，管理成本较高。</li><li>适用于小型网络或特殊用途（如默认路由）。</li><li>不适用于大型或动态变化的网络。</li></ul><h3 id="动态路由-dynamic-routing" tabindex="-1"><strong>动态路由（Dynamic Routing）</strong> <a class="header-anchor" href="#动态路由-dynamic-routing" aria-label="Permalink to &quot;**动态路由（Dynamic Routing）**&quot;">​</a></h3><blockquote><p>由路由协议自动计算并维护的路由，根据网络状态变化自动调整路径。</p></blockquote><ul><li>路由器会定期交换信息，动态更新路由表。</li><li>适用于大型网络，减少管理开销。</li><li>依赖路由协议进行计算，可能会引入额外的带宽和计算资源消耗。</li></ul><h2 id="路由协议" tabindex="-1">路由协议 <a class="header-anchor" href="#路由协议" aria-label="Permalink to &quot;路由协议&quot;">​</a></h2><blockquote><p><strong>路由协议（Routing Protocol）</strong> 是用于确定数据包转发方式的网络协议，根据工作机制可分为 <strong>距离矢量</strong> 和 <strong>链路状态</strong> 两种主要类型。</p></blockquote><h3 id="距离矢量路由协议-distance-vector-routing-protocol" tabindex="-1"><strong>距离矢量路由协议（Distance-Vector Routing Protocol）</strong> <a class="header-anchor" href="#距离矢量路由协议-distance-vector-routing-protocol" aria-label="Permalink to &quot;**距离矢量路由协议（Distance-Vector Routing Protocol）**&quot;">​</a></h3><blockquote><p><strong>“听说”路由协议</strong> —— 依赖相邻路由器的更新信息进行路径选择。</p></blockquote><ul><li><strong>RIP（Routing Information Protocol）</strong>：使用跳数（Hop Count）作为度量，最大支持 15 跳，适用于小型网络。</li><li><strong><a href="./eigrp_introduction.html">EIGRP</a>（Enhanced Interior Gateway Routing Protocol）</strong>：思科私有协议，结合了距离矢量和链路状态机制。</li><li><strong><a href="./bgp_introduction.html">BGP</a>（Border Gateway Protocol）</strong>：主要用于互联网的自治系统（AS）之间的路由选择，是一种路径矢量协议。</li></ul><h3 id="链路状态路由协议-link-state-routing-protocol" tabindex="-1"><strong>链路状态路由协议（Link-State Routing Protocol）</strong> <a class="header-anchor" href="#链路状态路由协议-link-state-routing-protocol" aria-label="Permalink to &quot;**链路状态路由协议（Link-State Routing Protocol）**&quot;">​</a></h3><blockquote><p><strong>“相信自己”路由协议</strong> —— 通过计算整个网络的拓扑结构选择最优路径。</p></blockquote><ul><li><strong><a href="./ospf_introduction.html">OSPF</a>（Open Shortest Path First）</strong>：使用 Dijkstra 算法计算最短路径，适用于大型网络。</li><li><strong>IS-IS（Intermediate System to Intermediate System）</strong>：与 OSPF 类似，但更常用于运营商网络。</li></ul><h2 id="内部网关协议-igp-vs-外部网关协议-egp" tabindex="-1">内部网关协议（IGP） vs. 外部网关协议（EGP） <a class="header-anchor" href="#内部网关协议-igp-vs-外部网关协议-egp" aria-label="Permalink to &quot;内部网关协议（IGP） vs. 外部网关协议（EGP）&quot;">​</a></h2><p>路由协议还可以根据作用范围划分为 <strong>内部网关协议（IGP）</strong> 和 <strong>外部网关协议（EGP）</strong>：</p><ul><li><p><strong>IGP（Interior Gateway Protocol）</strong>：用于 <strong>同一自治系统（AS）</strong> 内部的路由选择，如：</p><ul><li><strong>RIP</strong></li><li><strong>EIGRP</strong></li><li><strong>OSPF</strong></li><li><strong>IS-IS</strong></li></ul></li><li><p><strong>EGP（Exterior Gateway Protocol）</strong>：用于 <strong>不同自治系统（AS）之间</strong> 的路由，如：</p><ul><li><strong>BGP</strong>（全球互联网的核心路由协议）</li></ul></li></ul>',23)]))}const d=o(i,[["render",e]]);export{p as __pageData,d as default};
