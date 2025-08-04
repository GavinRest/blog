import{_ as a,c as n,o as p,ae as e}from"./chunks/framework.BHrE6nLq.js";const h=JSON.parse('{"title":"IDC 二层架构：从堆叠到去堆叠","description":"","frontmatter":{},"headers":[],"relativePath":"network/tcpip/layer2/unstacked.md","filePath":"network/tcpip/layer2/unstacked.md"}'),l={name:"network/tcpip/layer2/unstacked.md"};function i(t,s,c,o,r,d){return p(),n("div",null,s[0]||(s[0]=[e(`<h1 id="idc-二层架构-从堆叠到去堆叠" tabindex="-1">IDC 二层架构：从堆叠到去堆叠 <a class="header-anchor" href="#idc-二层架构-从堆叠到去堆叠" aria-label="Permalink to &quot;IDC 二层架构：从堆叠到去堆叠&quot;">​</a></h1><h2 id="堆叠技术" tabindex="-1">堆叠技术 <a class="header-anchor" href="#堆叠技术" aria-label="Permalink to &quot;堆叠技术&quot;">​</a></h2><p>堆叠技术很长一段时间主要 <strong>解决服务器 ToR（Top-of-Rack） 上联链路的高可用问题</strong>，即服务器双网卡分别接入两台交换机，堆叠让其形成一个逻辑设备，从而实现链路聚合（LACP）和主备切换的能力。</p><h3 id="堆叠优点" tabindex="-1">堆叠优点： <a class="header-anchor" href="#堆叠优点" aria-label="Permalink to &quot;堆叠优点：&quot;">​</a></h3><ul><li><strong>统一管理</strong>：作为单设备配置和监控，简化运维。</li><li><strong>上/下联聚合</strong>：支持跨设备链路聚合。</li><li><strong>主控冗余</strong>：主备热切换提供一定程度的高可用。</li><li><strong>资源共享</strong>：MAC 表、路由表、ARP 等控制平面资源统一。</li></ul><h3 id="常见堆叠技术" tabindex="-1">常见堆叠技术： <a class="header-anchor" href="#常见堆叠技术" aria-label="Permalink to &quot;常见堆叠技术：&quot;">​</a></h3><ul><li>Cisco StackWise（Catalyst 系列）</li><li>Huawei iStack</li><li>H3C IRF</li><li>Aruba VSF</li></ul><h2 id="二、堆叠弊端与演化" tabindex="-1">二、堆叠弊端与演化 <a class="header-anchor" href="#二、堆叠弊端与演化" aria-label="Permalink to &quot;二、堆叠弊端与演化&quot;">​</a></h2><p>尽管堆叠技术解决了初期网络规模扩展和高可用问题，但在大规模数据中心中暴露出不少问题：</p><table tabindex="0"><thead><tr><th>问题</th><th>描述</th></tr></thead><tbody><tr><td><strong>脑裂</strong></td><td>堆叠链中断导致堆叠设备产生多个“主控”，引发冲突和广播风暴</td></tr><tr><td><strong>升级困难</strong></td><td>大多数堆叠需要整组设备统一升级，涉及全链路中断</td></tr><tr><td><strong>厂商依赖强</strong></td><td>多为私有协议，跨厂商部署受限</td></tr></tbody></table><p>这些挑战促使业界开始探索“去堆叠”架构。</p><h2 id="三、技术演进-从堆叠到去堆叠" tabindex="-1">三、技术演进：从堆叠到去堆叠 <a class="header-anchor" href="#三、技术演进-从堆叠到去堆叠" aria-label="Permalink to &quot;三、技术演进：从堆叠到去堆叠&quot;">​</a></h2><p>在堆叠技术难以满足灵活性与可扩展性要求的背景下，出现了以下几类典型演进技术：</p><h3 id="✅-cisco-vpc-标准化-m-lag-mc-lag-multi-chassis-link-aggregation-group" tabindex="-1">✅ Cisco VPC / 标准化 M-LAG / MC-LAG（Multi-Chassis Link Aggregation Group） <a class="header-anchor" href="#✅-cisco-vpc-标准化-m-lag-mc-lag-multi-chassis-link-aggregation-group" aria-label="Permalink to &quot;✅ Cisco VPC / 标准化 M-LAG / MC-LAG（Multi-Chassis Link Aggregation Group）&quot;">​</a></h3><p>为了解决堆叠的诸多问题，Cisco 推出了 VPC（Virtual PortChannel） 技术，允许两台独立设备对下提供跨设备链路聚合能力。随后该思路被标准化并演化为 M-LAG（Multi-Chassis Link Aggregation）、MC-LAG 多点连接聚合 (Multi-Chassis Link Aggregation Group) 等技术。</p><p>这些方案通过一定的状态同步机制（keepalive 链路、状态数据库同步等），实现设备之间的协作，而非合并。</p><h3 id="参考文档" tabindex="-1">参考文档 <a class="header-anchor" href="#参考文档" aria-label="Permalink to &quot;参考文档&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://www.codenong.com/cs106890337/</span></span>
<span class="line"><span>https://zhuanlan.zhihu.com/p/62024674</span></span>
<span class="line"><span>https://www.ichenfu.com/2025/07/18/broadcast-arp-and-nd-on-hw-offloaded-bonding/</span></span>
<span class="line"><span>https://www.h3c.com/cn/Service/Document_Software/Document_Center/Home/Switches/00-Public/Configure/Practice/H3C_S_MLAG-BP_Long/</span></span>
<span class="line"><span>https://support.huawei.com/hedex/hdx.do?docid=EDOC1100457211&amp;id=ZH-CN_CONCEPT_0000001309217813</span></span></code></pre></div><p>为简化部署成本，在无聚合需求场景中，也可以通过服务器或交换机主动发送 Gratuitous ARP 或 Proxy ARP 的方式，让上游设备快速更新 ARP 缓存，实现流量切换。适合主备架构、低成本冗余场景。</p><h3 id="交换机配置" tabindex="-1">交换机配置 <a class="header-anchor" href="#交换机配置" aria-label="Permalink to &quot;交换机配置&quot;">​</a></h3><ul><li>华为交换机配置</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vlan 30 </span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface Eth-Trunk 30</span></span>
<span class="line"><span>  mode lacp-dynamic </span></span>
<span class="line"><span>  lacp system-id 00e0-fc12-3456</span></span>
<span class="line"><span>  port link-type access</span></span>
<span class="line"><span>  port default vlan 30</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface GE1/0/3</span></span>
<span class="line"><span> Eth-Trunk 30</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int vlan 30</span></span>
<span class="line"><span>  ip address 172.16.30.1 255.255.255.0</span></span>
<span class="line"><span>  arp proxy anyway enable</span></span>
<span class="line"><span>  mac-address 7073-8d35-f168</span></span>
<span class="line"><span>  arp delete trigger link-down enable</span></span>
<span class="line"><span>  arp direct-route enable</span></span>
<span class="line"><span>  arp direct-route preference 1</span></span></code></pre></div><hr><h3 id="linux-修改内核" tabindex="-1">Linux 修改内核 <a class="header-anchor" href="#linux-修改内核" aria-label="Permalink to &quot;Linux 修改内核&quot;">​</a></h3><p>默认情况 ARP 请求/回应只会从一个活跃的物理网卡发送，具体取决于 xmit_hash_policy 策略（比如基于 MAC、IP、端口哈希）。去堆叠架构如果 ARP 请求只从其中一个物理口发出，另一台交换机就学不到服务器的 MAC 地址，从而无法回送数据包。所以需要“ARP 双发”</p><ol><li>下载源码 &amp; 安装依赖</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo apt install linux-source</span></span>
<span class="line"><span>sudo apt install -y openssl flex bison ncurses* libelf-dev libssl-dev libffi-dev build-essential dwarves</span></span></code></pre></div><ol start="2"><li>修改代码重新编译</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ubuntu@ubuntu:/usr/src$ ls</span></span>
<span class="line"><span>linux-source-4.15.0  linux-source-4.15.0.tar.bz2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd linux-source-4.15.0</span></span>
<span class="line"><span>tar -xvf linux-source-4.15.0.tar.bz2</span></span>
<span class="line"><span>cd linux-source-4.15.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>make menuconfig</span></span>
<span class="line"><span>vim .config</span></span>
<span class="line"><span>CONFIG_DEBUG_INFO_BTF</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CONFIG_SYSTEM_TRUSTED_KEYS</span></span>
<span class="line"><span>CONFIG_SYSTEM_REVOCATION_KEYS</span></span>
<span class="line"><span></span></span>
<span class="line"><span>vim ./drivers/net/bonding/bond_main.c // 搜索 bond_3ad_xor_xmit 函数添加如下代码，实现在 LACP bond 模式下对 ARP 包进行广播（ARP 双发）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 在 bond_3ad_xor_xmit 函数上添加 \`static int bond_xmit_broadcast(struct sk_buff *skb, struct net_device *dev);\` 这行代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 在 bond_3ad_xor_xmit 函数中添加如下代码</span></span>
<span class="line"><span>// === [新增代码] 判断是否为 ARP 包，进行广播发送 ===</span></span>
<span class="line"><span>if (skb-&gt;protocol == htons(ETH_P_ARP)) {</span></span>
<span class="line"><span>    // 对 ARP 包进行广播</span></span>
<span class="line"><span>    return bond_xmit_broadcast(skb, dev);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>make -j 64 CFLAGS_MODULE=-fno-strict-aliasing</span></span>
<span class="line"><span>make modules_install</span></span>
<span class="line"><span>make install</span></span>
<span class="line"><span># 生成 deb 包</span></span>
<span class="line"><span>make -j64 bindeb-pkg</span></span></code></pre></div><ul><li><ol start="3"><li>网卡配置</li></ol></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>root@ubuntu:/home/eve# cat /etc/netplan/01-netcfg.yaml</span></span>
<span class="line"><span># This file describes the network interfaces available on your system</span></span>
<span class="line"><span># For more information, see netplan(5).</span></span>
<span class="line"><span>network:</span></span>
<span class="line"><span>  version: 2</span></span>
<span class="line"><span>  renderer: networkd</span></span>
<span class="line"><span>  ethernets:</span></span>
<span class="line"><span>    eth0:</span></span>
<span class="line"><span>        dhcp4: no</span></span>
<span class="line"><span>    eth1:</span></span>
<span class="line"><span>        dhcp4: no</span></span>
<span class="line"><span>    eth2:</span></span>
<span class="line"><span>      dhcp4: no</span></span>
<span class="line"><span>      addresses:</span></span>
<span class="line"><span>       - 192.168.170.200/24</span></span>
<span class="line"><span>      gateway4: 192.168.170.2</span></span>
<span class="line"><span>      nameservers:</span></span>
<span class="line"><span>        addresses: [192.168.5.1, 8.8.8.8]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  bonds:</span></span>
<span class="line"><span>    bond0:</span></span>
<span class="line"><span>      interfaces: [eth0, eth1]</span></span>
<span class="line"><span>      parameters:</span></span>
<span class="line"><span>        mode: 802.3ad</span></span>
<span class="line"><span>      addresses: [172.16.30.100/24]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 检查 bond0 状态</span></span>
<span class="line"><span>cat /proc/net/bonding/bond0</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 如果因为 speed eth-trunk 无法 Selected 可以手动调整</span></span>
<span class="line"><span>sudo ethtool -s eth0 autoneg off speed 1000 duplex full</span></span>
<span class="line"><span>sudo ethtool -s eth1 autoneg off speed 1000 duplex full</span></span>
<span class="line"><span>sudo ip link set bond0 down &amp;&amp; sudo ip link set bond0 up </span></span>
<span class="line"><span>sudo ip link set eth0 down &amp;&amp; sudo ip link set eth0 up </span></span>
<span class="line"><span>sudo ip link set eth1 down &amp;&amp; sudo ip link set eth1 up</span></span></code></pre></div>`,31)]))}const b=a(l,[["render",i]]);export{h as __pageData,b as default};
