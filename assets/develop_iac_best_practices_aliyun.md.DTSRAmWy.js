import{_ as a,c as s,o as p,ae as l}from"./chunks/framework.BHrE6nLq.js";const e="/images/devops/IaC/aliyun_vpc.png",b=JSON.parse('{"title":"Aliyun 创建 VPC","description":"","frontmatter":{},"headers":[],"relativePath":"develop/iac/best_practices/aliyun.md","filePath":"develop/iac/best_practices/aliyun.md"}'),i={name:"develop/iac/best_practices/aliyun.md"};function t(o,n,c,r,u,d){return p(),s("div",null,n[0]||(n[0]=[l(`<h1 id="aliyun-创建-vpc" tabindex="-1">Aliyun 创建 VPC <a class="header-anchor" href="#aliyun-创建-vpc" aria-label="Permalink to &quot;Aliyun 创建 VPC&quot;">​</a></h1><blockquote><p><a href="https://registry.terraform.io/providers/aliyun/alicloud/latest" target="_blank" rel="noreferrer">https://registry.terraform.io/providers/aliyun/alicloud/latest</a></p></blockquote><h2 id="编写配置文件" tabindex="-1">编写配置文件 <a class="header-anchor" href="#编写配置文件" aria-label="Permalink to &quot;编写配置文件&quot;">​</a></h2><p>使用 HCL 编写配置文件</p><h3 id="配置terraform身份认证" tabindex="-1">配置Terraform身份认证 <a class="header-anchor" href="#配置terraform身份认证" aria-label="Permalink to &quot;配置Terraform身份认证&quot;">​</a></h3><blockquote><p><a href="https://help.aliyun.com/zh/terraform/create-a-custom-private-network-based-on-alibaba-cloud-through-terraform" target="_blank" rel="noreferrer">https://help.aliyun.com/zh/terraform/create-a-custom-private-network-based-on-alibaba-cloud-through-terraform</a></p></blockquote><ul><li>windows 为例 <ul><li>在桌面右键单击此电脑，选择属性 -&gt; 高级系统设置 -&gt; 环境变量 -&gt; 系统变量/用户变量。</li><li>在系统变量/用户变量中，单击新建，创建以下环境变量。</li></ul></li></ul><h3 id="创建-main-tf" tabindex="-1">创建 <code>main.tf</code> <a class="header-anchor" href="#创建-main-tf" aria-label="Permalink to &quot;创建 \`main.tf\`&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>D:\\project\\IaC\\terraform-demo</span></span>
<span class="line"><span>(base) λ cat main.tf</span></span>
<span class="line"><span>resource &quot;alicloud_vpc&quot; &quot;main&quot; {</span></span>
<span class="line"><span>  # VPC名称</span></span>
<span class="line"><span>  vpc_name = &quot;alicloud&quot;</span></span>
<span class="line"><span>  # VPC地址块</span></span>
<span class="line"><span>  cidr_block = &quot;10.1.0.0/21&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>resource &quot;alicloud_vswitch&quot; &quot;main&quot; {</span></span>
<span class="line"><span>  # VPC ID</span></span>
<span class="line"><span>  vpc_id            = alicloud_vpc.main.id</span></span>
<span class="line"><span>  # 交换机地址块</span></span>
<span class="line"><span>  cidr_block        = &quot;10.1.0.0/24&quot;</span></span>
<span class="line"><span>  # 可用区</span></span>
<span class="line"><span>  zone_id = &quot;cn-hangzhou-b&quot;</span></span>
<span class="line"><span>  # 资源依赖,会优先创建该依赖资源</span></span>
<span class="line"><span>  depends_on = [alicloud_vpc.main]</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="创建-provider-tf" tabindex="-1">创建 <code>provider.tf</code> <a class="header-anchor" href="#创建-provider-tf" aria-label="Permalink to &quot;创建 \`provider.tf\`&quot;">​</a></h3><blockquote><p><a href="https://help.aliyun.com/zh/terraform/install-and-configure-terraform-locally?spm=a2c4g.11186623.0.0.1019a613zmIabi#task-bts-tlz-dfb" target="_blank" rel="noreferrer">https://help.aliyun.com/zh/terraform/install-and-configure-terraform-locally?spm=a2c4g.11186623.0.0.1019a613zmIabi#task-bts-tlz-dfb</a></p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>(base) λ cat provider.tf</span></span>
<span class="line"><span>terraform {</span></span>
<span class="line"><span>  required_providers {</span></span>
<span class="line"><span>    alicloud = {</span></span>
<span class="line"><span>      source = &quot;aliyun/alicloud&quot;</span></span>
<span class="line"><span>      version = &quot;1.255.0&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>provider &quot;alicloud&quot; {</span></span>
<span class="line"><span>  region = &quot;cn-hangzhou&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="部署" tabindex="-1">部署 <a class="header-anchor" href="#部署" aria-label="Permalink to &quot;部署&quot;">​</a></h2><ul><li><p>初始化 <code>terraform init</code> 自动安装 <code>aliyun provider</code></p></li><li><p>查看变更计划 <code>terraform plan</code></p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>(base) λterraform plan</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:</span></span>
<span class="line"><span>  + create</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Terraform will perform the following actions:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # alicloud_vpc.main will be created</span></span>
<span class="line"><span>  + resource &quot;alicloud_vpc&quot; &quot;main&quot; {</span></span>
<span class="line"><span>      + cidr_block                                  = &quot;10.1.0.0/21&quot;</span></span>
<span class="line"><span>      + create_time                                 = (known after apply)</span></span>
<span class="line"><span>      + dns_hostname_status                         = (known after apply)</span></span>
<span class="line"><span>      + id                                          = (known after apply)</span></span>
<span class="line"><span>      + ipv6_cidr_block                             = (known after apply)</span></span>
<span class="line"><span>      + ipv6_cidr_blocks                            = (known after apply)</span></span>
<span class="line"><span>      + name                                        = (known after apply)</span></span>
<span class="line"><span>      + region_id                                   = (known after apply)</span></span>
<span class="line"><span>      + resource_group_id                           = (known after apply)</span></span>
<span class="line"><span>      + route_table_id                              = (known after apply)</span></span>
<span class="line"><span>      + router_id                                   = (known after apply)</span></span>
<span class="line"><span>      + router_table_id                             = (known after apply)</span></span>
<span class="line"><span>      + secondary_cidr_blocks                       = (known after apply)</span></span>
<span class="line"><span>      + status                                      = (known after apply)</span></span>
<span class="line"><span>      + system_route_table_route_propagation_enable = (known after apply)</span></span>
<span class="line"><span>      + user_cidrs                                  = (known after apply)</span></span>
<span class="line"><span>      + vpc_name                                    = &quot;alicloud&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # alicloud_vswitch.main will be created</span></span>
<span class="line"><span>  + resource &quot;alicloud_vswitch&quot; &quot;main&quot; {</span></span>
<span class="line"><span>      + availability_zone    = (known after apply)</span></span>
<span class="line"><span>      + cidr_block           = &quot;10.1.0.0/24&quot;</span></span>
<span class="line"><span>      + create_time          = (known after apply)</span></span>
<span class="line"><span>      + id                   = (known after apply)</span></span>
<span class="line"><span>      + ipv6_cidr_block      = (known after apply)</span></span>
<span class="line"><span>      + ipv6_cidr_block_mask = (known after apply)</span></span>
<span class="line"><span>      + name                 = (known after apply)</span></span>
<span class="line"><span>      + status               = (known after apply)</span></span>
<span class="line"><span>      + vpc_id               = (known after apply)</span></span>
<span class="line"><span>      + vswitch_name         = (known after apply)</span></span>
<span class="line"><span>      + zone_id              = &quot;cn-hangzhou-b&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Plan: 2 to add, 0 to change, 0 to destroy.</span></span></code></pre></div><ul><li>terraform apply 应用更改（按 y 确认）</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>(base) λterraform apply</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:</span></span>
<span class="line"><span>  + create</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Terraform will perform the following actions:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # alicloud_vpc.main will be created</span></span>
<span class="line"><span>  + resource &quot;alicloud_vpc&quot; &quot;main&quot; {</span></span>
<span class="line"><span>      + cidr_block                                  = &quot;10.1.0.0/21&quot;</span></span>
<span class="line"><span>      + create_time                                 = (known after apply)</span></span>
<span class="line"><span>      + dns_hostname_status                         = (known after apply)</span></span>
<span class="line"><span>      + id                                          = (known after apply)</span></span>
<span class="line"><span>      + ipv6_cidr_block                             = (known after apply)</span></span>
<span class="line"><span>      + ipv6_cidr_blocks                            = (known after apply)</span></span>
<span class="line"><span>      + name                                        = (known after apply)</span></span>
<span class="line"><span>      + region_id                                   = (known after apply)</span></span>
<span class="line"><span>      + resource_group_id                           = (known after apply)</span></span>
<span class="line"><span>      + route_table_id                              = (known after apply)</span></span>
<span class="line"><span>      + router_id                                   = (known after apply)</span></span>
<span class="line"><span>      + router_table_id                             = (known after apply)</span></span>
<span class="line"><span>      + secondary_cidr_blocks                       = (known after apply)</span></span>
<span class="line"><span>      + status                                      = (known after apply)</span></span>
<span class="line"><span>      + system_route_table_route_propagation_enable = (known after apply)</span></span>
<span class="line"><span>      + user_cidrs                                  = (known after apply)</span></span>
<span class="line"><span>      + vpc_name                                    = &quot;alicloud&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # alicloud_vswitch.main will be created</span></span>
<span class="line"><span>  + resource &quot;alicloud_vswitch&quot; &quot;main&quot; {</span></span>
<span class="line"><span>      + availability_zone    = (known after apply)</span></span>
<span class="line"><span>      + cidr_block           = &quot;10.1.0.0/24&quot;</span></span>
<span class="line"><span>      + create_time          = (known after apply)</span></span>
<span class="line"><span>      + id                   = (known after apply)</span></span>
<span class="line"><span>      + ipv6_cidr_block      = (known after apply)</span></span>
<span class="line"><span>      + ipv6_cidr_block_mask = (known after apply)</span></span>
<span class="line"><span>      + name                 = (known after apply)</span></span>
<span class="line"><span>      + status               = (known after apply)</span></span>
<span class="line"><span>      + vpc_id               = (known after apply)</span></span>
<span class="line"><span>      + vswitch_name         = (known after apply)</span></span>
<span class="line"><span>      + zone_id              = &quot;cn-hangzhou-b&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Plan: 2 to add, 0 to change, 0 to destroy.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Do you want to perform these actions?</span></span>
<span class="line"><span>  Terraform will perform the actions described above.</span></span>
<span class="line"><span>  Only &#39;yes&#39; will be accepted to approve.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  Enter a value: yes</span></span>
<span class="line"><span></span></span>
<span class="line"><span>alicloud_vpc.main: Creating...</span></span>
<span class="line"><span>alicloud_vpc.main: Creation complete after 8s [id=vpc-bp1rrcwl3kfm0xs0riivu]</span></span>
<span class="line"><span>alicloud_vswitch.main: Creating...</span></span>
<span class="line"><span>alicloud_vswitch.main: Creation complete after 5s [id=vsw-bp1kqpb1q3sx8sshi2bik]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Apply complete! Resources: 2 added, 0 changed, 0 destroyed.</span></span></code></pre></div><ul><li>查看配置</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>(base) λterraform show</span></span>
<span class="line"><span># alicloud_vpc.main:</span></span>
<span class="line"><span>resource &quot;alicloud_vpc&quot; &quot;main&quot; {</span></span>
<span class="line"><span>    cidr_block                                  = &quot;10.1.0.0/21&quot;</span></span>
<span class="line"><span>    classic_link_enabled                        = false</span></span>
<span class="line"><span>    create_time                                 = &quot;2025-08-01T05:07:55Z&quot;</span></span>
<span class="line"><span>    description                                 = null</span></span>
<span class="line"><span>    dns_hostname_status                         = &quot;DISABLED&quot;</span></span>
<span class="line"><span>    enable_ipv6                                 = false</span></span>
<span class="line"><span>    id                                          = &quot;vpc-bp1rrcwl3kfm0xs0riivu&quot;</span></span>
<span class="line"><span>    ipv6_cidr_block                             = null</span></span>
<span class="line"><span>    ipv6_cidr_blocks                            = []</span></span>
<span class="line"><span>    name                                        = &quot;alicloud&quot;</span></span>
<span class="line"><span>    region_id                                   = &quot;cn-hangzhou&quot;</span></span>
<span class="line"><span>    resource_group_id                           = &quot;rg-acfmwwni352kcma&quot;</span></span>
<span class="line"><span>    route_table_id                              = &quot;vtb-bp1t9fnwgor3qewykfvvg&quot;</span></span>
<span class="line"><span>    router_id                                   = &quot;vrt-bp1byhnq8fqzo2nozdtsr&quot;</span></span>
<span class="line"><span>    router_table_id                             = &quot;vtb-bp1t9fnwgor3qewykfvvg&quot;</span></span>
<span class="line"><span>    secondary_cidr_blocks                       = []</span></span>
<span class="line"><span>    status                                      = &quot;Available&quot;</span></span>
<span class="line"><span>    system_route_table_description              = null</span></span>
<span class="line"><span>    system_route_table_name                     = null</span></span>
<span class="line"><span>    system_route_table_route_propagation_enable = true</span></span>
<span class="line"><span>    user_cidrs                                  = []</span></span>
<span class="line"><span>    vpc_name                                    = &quot;alicloud&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># alicloud_vswitch.main:</span></span>
<span class="line"><span>resource &quot;alicloud_vswitch&quot; &quot;main&quot; {</span></span>
<span class="line"><span>    availability_zone = &quot;cn-hangzhou-b&quot;</span></span>
<span class="line"><span>    cidr_block        = &quot;10.1.0.0/24&quot;</span></span>
<span class="line"><span>    create_time       = &quot;2025-08-01T05:08:02Z&quot;</span></span>
<span class="line"><span>    description       = null</span></span>
<span class="line"><span>    id                = &quot;vsw-bp1kqpb1q3sx8sshi2bik&quot;</span></span>
<span class="line"><span>    ipv6_cidr_block   = null</span></span>
<span class="line"><span>    name              = null</span></span>
<span class="line"><span>    status            = &quot;Available&quot;</span></span>
<span class="line"><span>    vpc_id            = &quot;vpc-bp1rrcwl3kfm0xs0riivu&quot;</span></span>
<span class="line"><span>    vswitch_name      = null</span></span>
<span class="line"><span>    zone_id           = &quot;cn-hangzhou-b&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="控制台" tabindex="-1">控制台 <a class="header-anchor" href="#控制台" aria-label="Permalink to &quot;控制台&quot;">​</a></h3><ul><li>阿里云控制台展示</li></ul><p><img src="`+e+`" alt="控制台"></p><h3 id="销毁-terraform-destroy" tabindex="-1">销毁 <code>terraform destroy</code> <a class="header-anchor" href="#销毁-terraform-destroy" aria-label="Permalink to &quot;销毁 \`terraform destroy\`&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>(base) λterraform destroy</span></span>
<span class="line"><span>alicloud_vpc.main: Refreshing state... [id=vpc-bp1rrcwl3kfm0xs0riivu]</span></span>
<span class="line"><span>alicloud_vswitch.main: Refreshing state... [id=vsw-bp1kqpb1q3sx8sshi2bik]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:</span></span>
<span class="line"><span>  - destroy</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Terraform will perform the following actions:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # alicloud_vpc.main will be destroyed</span></span>
<span class="line"><span>  - resource &quot;alicloud_vpc&quot; &quot;main&quot; {</span></span>
<span class="line"><span>      - cidr_block                                  = &quot;10.1.0.0/21&quot; -&gt; null</span></span>
<span class="line"><span>      - classic_link_enabled                        = false -&gt; null</span></span>
<span class="line"><span>      - create_time                                 = &quot;2025-08-01T05:07:55Z&quot; -&gt; null</span></span>
<span class="line"><span>      - dns_hostname_status                         = &quot;DISABLED&quot; -&gt; null</span></span>
<span class="line"><span>      - enable_ipv6                                 = false -&gt; null</span></span>
<span class="line"><span>      - id                                          = &quot;vpc-bp1rrcwl3kfm0xs0riivu&quot; -&gt; null</span></span>
<span class="line"><span>      - ipv6_cidr_blocks                            = [] -&gt; null</span></span>
<span class="line"><span>      - name                                        = &quot;alicloud&quot; -&gt; null</span></span>
<span class="line"><span>      - region_id                                   = &quot;cn-hangzhou&quot; -&gt; null</span></span>
<span class="line"><span>      - resource_group_id                           = &quot;rg-acfmwwni352kcma&quot; -&gt; null</span></span>
<span class="line"><span>      - route_table_id                              = &quot;vtb-bp1t9fnwgor3qewykfvvg&quot; -&gt; null</span></span>
<span class="line"><span>      - router_id                                   = &quot;vrt-bp1byhnq8fqzo2nozdtsr&quot; -&gt; null</span></span>
<span class="line"><span>      - router_table_id                             = &quot;vtb-bp1t9fnwgor3qewykfvvg&quot; -&gt; null</span></span>
<span class="line"><span>      - secondary_cidr_blocks                       = [] -&gt; null</span></span>
<span class="line"><span>      - status                                      = &quot;Available&quot; -&gt; null</span></span>
<span class="line"><span>      - system_route_table_route_propagation_enable = true -&gt; null</span></span>
<span class="line"><span>      - tags                                        = {} -&gt; null</span></span>
<span class="line"><span>      - user_cidrs                                  = [] -&gt; null</span></span>
<span class="line"><span>      - vpc_name                                    = &quot;alicloud&quot; -&gt; null</span></span>
<span class="line"><span>        # (4 unchanged attributes hidden)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # alicloud_vswitch.main will be destroyed</span></span>
<span class="line"><span>  - resource &quot;alicloud_vswitch&quot; &quot;main&quot; {</span></span>
<span class="line"><span>      - availability_zone = &quot;cn-hangzhou-b&quot; -&gt; null</span></span>
<span class="line"><span>      - cidr_block        = &quot;10.1.0.0/24&quot; -&gt; null</span></span>
<span class="line"><span>      - create_time       = &quot;2025-08-01T05:08:02Z&quot; -&gt; null</span></span>
<span class="line"><span>      - id                = &quot;vsw-bp1kqpb1q3sx8sshi2bik&quot; -&gt; null</span></span>
<span class="line"><span>        name              = null</span></span>
<span class="line"><span>      - status            = &quot;Available&quot; -&gt; null</span></span>
<span class="line"><span>      - tags              = {} -&gt; null</span></span>
<span class="line"><span>      - vpc_id            = &quot;vpc-bp1rrcwl3kfm0xs0riivu&quot; -&gt; null</span></span>
<span class="line"><span>      - zone_id           = &quot;cn-hangzhou-b&quot; -&gt; null</span></span>
<span class="line"><span>        # (3 unchanged attributes hidden)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Plan: 0 to add, 0 to change, 2 to destroy.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Do you really want to destroy all resources?</span></span>
<span class="line"><span>  Terraform will destroy all your managed infrastructure, as shown above.</span></span>
<span class="line"><span>  There is no undo. Only &#39;yes&#39; will be accepted to confirm.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  Enter a value: yes</span></span>
<span class="line"><span></span></span>
<span class="line"><span>alicloud_vswitch.main: Destroying... [id=vsw-bp1kqpb1q3sx8sshi2bik]</span></span>
<span class="line"><span>alicloud_vswitch.main: Destruction complete after 5s</span></span>
<span class="line"><span>alicloud_vpc.main: Destroying... [id=vpc-bp1rrcwl3kfm0xs0riivu]</span></span>
<span class="line"><span>alicloud_vpc.main: Destruction complete after 6s</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Destroy complete! Resources: 2 destroyed.</span></span></code></pre></div>`,24)]))}const q=a(i,[["render",t]]);export{b as __pageData,q as default};
