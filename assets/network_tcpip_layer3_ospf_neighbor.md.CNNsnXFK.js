import{_ as a,c as e,o as s,ae as l}from"./chunks/framework.BHrE6nLq.js";const o="/images/tcpip/layer3/ospf_neighbor_topology.png",n="/images/tcpip/layer3/ospf_first_hello_R2.png",i="/images/tcpip/layer3/ospf_first_hello_R1.png",d="/images/tcpip/layer3/ospf_second_hello_R2.png",p="/images/tcpip/layer3/ospf_second_hello_R1.png",r="/images/tcpip/layer3/ospf_neighbor_master_R2.png",c="/images/tcpip/layer3/ospf_neighbor_master_R1.png",y=JSON.parse('{"title":"OSPF 邻居建立","description":"","frontmatter":{},"headers":[],"relativePath":"network/tcpip/layer3/ospf_neighbor.md","filePath":"network/tcpip/layer3/ospf_neighbor.md"}'),h={name:"network/tcpip/layer3/ospf_neighbor.md"};function _(g,t,f,m,u,R){return s(),e("div",null,t[0]||(t[0]=[l('<h1 id="ospf-邻居建立" tabindex="-1">OSPF 邻居建立 <a class="header-anchor" href="#ospf-邻居建立" aria-label="Permalink to &quot;OSPF 邻居建立&quot;">​</a></h1><blockquote><p>本节主要介绍 ospf Neighbor &amp; Adjacency 建立过程 <a href="./.html">ospf_neighbor.pcapng</a></p></blockquote><h2 id="拓扑结构" tabindex="-1">拓扑结构 <a class="header-anchor" href="#拓扑结构" aria-label="Permalink to &quot;拓扑结构&quot;">​</a></h2><hr><p>拓扑结构比较简单 2 台路由器 <code>f0/0</code> 口互联。</p><p><img src="'+o+'" alt="ospf_neighbor_topology"></p><h3 id="建立过程" tabindex="-1">建立过程 <a class="header-anchor" href="#建立过程" aria-label="Permalink to &quot;建立过程&quot;">​</a></h3><hr><ol><li><p><strong>INIT</strong>: R2 发送第一个 Hello包，R1收到第一个 Hello 包，并且双方收到这个 Hello 包中发现没有自己的 route-id（只有发起方route-id）。此时收到第一个包的路由器就进入INIT状态。（第一个Hello包只有 44 字节）</p><ul><li>R2 发送的第一个 hello 包 <img src="'+n+'" alt="ospf_first_hello"></li><li>R1 发送的第一个 hello 包 <img src="'+i+'" alt="ospf_first_hello_R1"></li></ul></li><li><p><strong>2-Way</strong>: R2 发送第二个Hello包，R1收到第二个 Hello 包，发现有自己的 route-id（如果是 MA 网络选举 DR/BDR），然后进入 <code>2-Way</code> 状态，反之如此。当双方均进入 <code>2-Way</code> 状态说明已经建立邻居关系（第二个hello包48字节多了对端 Route-ID ）</p><ul><li>a. R2 发送第二个 hello 包 <img src="'+d+'" alt="ospf_second_hello_R2"></li><li>b. R1 发送第二个 hello 包 <img src="'+p+'" alt="ospf_second_hello_R1"></li></ul></li><li><p><strong>Exstart</strong>:第一个 DBD 确认主从关系（route-id大为主），在此阶段检查 MTU，如果 MTU 不一致将卡在 Exstart 状态。DBD 传输中通过序列号隐式确认的方式保证可靠性。</p></li><li><p><strong>Exchange</strong>: 通过后续的DBD交换LSA头部信息。</p><ul><li>a. 通过下面两个包可以看到R2的 Maser 置位为1，R1 为0。所以 R2 成为了Master <img src="'+r+'" alt="ospf_neighbor_master_R2"><img src="'+c+`" alt="ospf_neighbor_master_R1"></li><li>b. DBD 隐式确认 （通过下图表分析）</li></ul><table tabindex="0"><thead><tr><th></th><th>INIT</th><th>More</th><th>Master/Slave</th><th>Sequence</th><th>备注</th></tr></thead><tbody><tr><td>R2</td><td>1</td><td>1</td><td>1</td><td>8637</td><td>1-2个 DBD 包确立主从关系</td></tr><tr><td>R1</td><td>1</td><td>1</td><td>1</td><td>9663</td><td>1-2个 DBD 包确立主从关系</td></tr><tr><td>R2</td><td>1</td><td>1</td><td>1</td><td>8637</td><td>3个包已经确立R2为主</td></tr><tr><td>R1</td><td>0</td><td>1</td><td>0</td><td>8637</td><td>4个包用 seq 隐式确认</td></tr><tr><td>R2</td><td>0</td><td>0</td><td>1</td><td>8638</td><td>后续都通过 seq 隐式确认</td></tr><tr><td>R1</td><td>0</td><td>0</td><td>0</td><td>8638</td><td>后续都通过 seq 隐式确认</td></tr></tbody></table></li></ol><ul><li>first dbd: first dbd 不携带LSA头部信息，通过first dbd确认主从关系。主的作用是为了控制序列号的同步，以保证可靠传输。Route-id大的为主。</li><li>普通 dbd: 只携带 LSA 头部信息，没有携带 LSA 的具体信息。承载完整 LSA 的是LSU包。</li><li>R1 和 R2 相互发送 LSR 、LSU 、LSACK。</li></ul><ol start="5"><li>Loading：DBD交换完成进入。</li><li>Full：完成邻接关系建立</li></ol><h4 id="补充-hello-包主要内容" tabindex="-1">补充 hello 包主要内容 <a class="header-anchor" href="#补充-hello-包主要内容" aria-label="Permalink to &quot;补充 hello 包主要内容&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 始发路由器 router-id</span></span>
<span class="line"><span>2. 始发路由器接口 area-id</span></span>
<span class="line"><span>3. 始发路由器接口的地址掩码</span></span>
<span class="line"><span>4. 始发路由器接口的 authentication type 和 authentication message</span></span>
<span class="line"><span>5. 始发路由器接口的 hello-interval</span></span>
<span class="line"><span>6. 始发路由器接口的 dead-interval</span></span>
<span class="line"><span>7. 路由器优先级</span></span>
<span class="line"><span>8. 指定 DR 和 BDR</span></span>
<span class="line"><span>9. 标识可选性能的5个标志位</span></span>
<span class="line"><span>10. 始发路由器的所有有效邻居的 router-id</span></span></code></pre></div>`,13)]))}const D=a(h,[["render",_]]);export{y as __pageData,D as default};
