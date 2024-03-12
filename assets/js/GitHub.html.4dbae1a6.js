"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[3363],{3671:(e,n)=>{n.A=(e,n)=>{const a=e.__vccOpts||e;for(const[e,t]of n)a[e]=t;return a}},9258:(e,n,a)=>{a.r(n),a.d(n,{comp:()=>E,data:()=>R});var t=a(7847);const s=(0,t.Fv)('<h2 id="github-actions" tabindex="-1"><a class="header-anchor" href="#github-actions"><span>GitHub Actions</span></a></h2><p>GitHub Actions 是一个持续集成和持续交付 (CI/CD) 平台，可用于自动执行构建、测试和部署管道。您可以创建工作流程来构建和测试存储库的每个拉取请求，或将合并的拉取请求部署到生产环境。将 GitHub Actions 命令保存为 <code>main.yml</code>，放于 <code>.github\\workflows</code> 目录下，repo 发生指定调节的改变时，Actions 会自动运行。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p>',2),o={href:"https://github.com/marketplace?type=actions",target:"_blank",rel:"noopener noreferrer"},i={href:"https://github.com/sdras/awesome-actions",target:"_blank",rel:"noopener noreferrer"},l=(0,t.Lk)("p",null,[(0,t.eW)("如果 GitHub Actions 命令中有涉及密码等私密信息，则进入项目仓库的「Settings」>「Secrets and variables」>「Actions」，添加密钥进行加密处理。比如新建密钥 PERSONAL_TOKEN，Actions 命令中使用 "),(0,t.Lk)("code",null,"${{ secrets.PERSONAL_TOKEN }}"),(0,t.eW)(" 来指代该密钥。")],-1),c=(0,t.Lk)("h3",{id:"dependabot",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#dependabot"},[(0,t.Lk)("span",null,"Dependabot")])],-1),p={href:"https://docs.github.com/zh/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions#common-dependabot-automations",target:"_blank",rel:"noopener noreferrer"},r={href:"https://github.com/rockbenben/tools-by-ai/tree/main/.github",target:"_blank",rel:"noopener noreferrer"},u=(0,t.Fv)('<p>完成上述配置后，Actions 可能会报错 <code>failed to create review: GraphQL: GitHub Actions is not permitted</code>。这是由于 Actions 权限未开启的原因。我们需要继续进行以下设置：</p><ol><li>进入项目仓库的「Settings」。</li><li>选择「General」&gt;「Pull Requests」，勾选 <code>Allow auto-merge</code>，以赋予 Actions 合并操作权限。</li><li>在同一界面，选择「Code and automation」&gt;「Actions」&gt;「General」&gt;「Workflow permissions」，选中 <code>Read and write permissions</code>，并勾选 <code>Allow GitHub Actions to create and approve pull requests</code>，然后点击保存。这样可以授予 Actions 批准拉取请求的权限。</li></ol><p>注意：GitHub Free 账户只支持在公共仓库中使用自动标记、批准拉取请求以及合并操作。</p><h3 id="不同仓库间复制" tabindex="-1"><a class="header-anchor" href="#不同仓库间复制"><span>不同仓库间复制</span></a></h3><p>复制文件到目的地，文档没变化则不会执行。案例为将当前仓库 main 分支下 docs 的 README.md 文件复制到另一个仓库 rockbenben/LearnData/ 路径下，如果目标路径存在相同文件，则将覆盖。如果让 <code>clean: true</code> 生效，Actions 会将目标路径情况，然后执行复制。</p>',5),d={href:"https://docs.github.com/cn/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-token",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},m=(0,t.Fv)('<div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Copy file\n  <span class="token key atrule">uses</span><span class="token punctuation">:</span> andstor/copycat<span class="token punctuation">-</span>action@v3\n  <span class="token key atrule">with</span><span class="token punctuation">:</span>\n    <span class="token key atrule">personal_token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.PERSONAL_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>\n    <span class="token key atrule">src_path</span><span class="token punctuation">:</span> docs/README.md\n    <span class="token key atrule">dst_path</span><span class="token punctuation">:</span> /\n    <span class="token key atrule">dst_owner</span><span class="token punctuation">:</span> rockbenben\n    <span class="token key atrule">dst_repo_name</span><span class="token punctuation">:</span> LearnData\n    <span class="token key atrule">dst_branch</span><span class="token punctuation">:</span> main\n    <span class="token key atrule">src_branch</span><span class="token punctuation">:</span> main\n    <span class="token comment">#clean: true</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="actions-失败重试" tabindex="-1"><a class="header-anchor" href="#actions-失败重试"><span>Actions 失败重试</span></a></h3><p>在 job 和 step 中使用 if 语句，只有满足条件时才执行具体的 job 或 step。<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 任务状态检查函数</span>\nsuccess<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 当上一步执行成功时返回 true</span>\nalways<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 总是返回 true</span>\ncancelled<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 当 workflow 被取消时返回 true</span>\nfailure<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 当上一步执行失败时返回 true</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>first_step 会总是执行，second_step 需要上一步 first_step 执行成功才会执行，third_step 只有上一步 second_step 执行失败才执行。当 third_step 与 second_step 命令相同时，就可以达到失败重试的效果了。</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">jobs</span><span class="token punctuation">:</span>\n  <span class="token key atrule">first_job</span><span class="token punctuation">:</span>\n    <span class="token key atrule">name</span><span class="token punctuation">:</span> My first job\n    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest\n    <span class="token key atrule">steps</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> first_step\n        <span class="token key atrule">if</span><span class="token punctuation">:</span> always()\n\n      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> second_step\n        <span class="token key atrule">if</span><span class="token punctuation">:</span> success()\n\n      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> third_step\n        <span class="token key atrule">if</span><span class="token punctuation">:</span> failure()\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uses-版本号" tabindex="-1"><a class="header-anchor" href="#uses-版本号"><span>uses 版本号</span></a></h3><p><code>uses: SamKirkland/FTP-Deploy-Action@4.3.1</code>：uses 会指定此步骤运行 SamKirkland/FTP-Deploy-Action 存储库中的 4.3.1 版本。</p><p>但有时 Actions 的版本不会这么快更新，又必须使用最新版，可以将版本号改为 branch name，比如 <code>uses: SamKirkland/FTP-Deploy-Action@master</code>。</p><h2 id="git-commit" tabindex="-1"><a class="header-anchor" href="#git-commit"><span>Git Commit</span></a></h2>',10),b={href:"https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.conventionalcommits.org/zh-hans/",target:"_blank",rel:"noopener noreferrer"},g=(0,t.Fv)('<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">&lt;</span>type<span class="token operator">&gt;</span><span class="token punctuation">[</span>optional scope<span class="token punctuation">]</span>: <span class="token operator">&lt;</span>description<span class="token operator">&gt;</span>\n\n<span class="token punctuation">[</span>optional body<span class="token punctuation">]</span>\n\n<span class="token punctuation">[</span>optional footer<span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type"><span>Type</span></a></h3><p>Type 用于说明 git commit 的类别，只允许使用下面的标识。<sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup></p><ul><li>feat: 新特性或功能（feature）</li><li>fix: 修复 bug</li><li>docs: 文档更新（documentation）</li><li>style: 代码风格或者组件样式更新（不影响代码运行的变动）</li><li>refactor: 代码重构，不引入新功能和缺陷修复</li><li>perf: 优化相关，比如提升性能、体验</li><li>test: 增加测试</li><li>chore: 构建过程或辅助工具的变动</li><li>revert: 回滚到上一个版本</li></ul><h3 id="scope" tabindex="-1"><a class="header-anchor" href="#scope"><span>Scope</span></a></h3><p>Scope 用于说明 commit 影响的范围，比如 Controller、DAO、View 等等，视项目不同而不同。如果其中包含了多个 scope，可以使用 <code>*</code> 代替。</p><h3 id="footer" tabindex="-1"><a class="header-anchor" href="#footer"><span>Footer</span></a></h3><p>如果当前代码与上一个版本不兼容，则 Footer 部分以 BREAKING CHANGE 开头，后面是对变动的描述、以及变动理由和迁移方法。<sup class="footnote-ref"><a href="#footnote4">[4]</a><a class="footnote-anchor" id="footnote-ref4"></a></sup></p><p>如果当前 commit 针对某个 issue，那么可以在 Footer 部分使用 <code>Closes #265</code> 关闭这个 issue。也可以在任意位置输入 <code>#265</code>，将 commit 与对应问题相关联。</p><h2 id="pull-requests" tabindex="-1"><a class="header-anchor" href="#pull-requests"><span>Pull Requests</span></a></h2><p>在 GitHub 中，有三种常见的 Pull Request（PR）合并方式：Create a merge commit（创建合并提交），Squash and merge（压缩合并）和 Rebase and merge（变基合并）。</p><p>一般情况下，推荐使用 Squash and merge。在项目仓库的「Settings」中，选择「General」&gt;「Pull Requests」，取消勾选 <code>Allow merge commits</code> 和 <code>Allow rebase merging</code>，即可默认显示 Squash and merge。</p><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2><h3 id="github-忽略指定文件" tabindex="-1"><a class="header-anchor" href="#github-忽略指定文件"><span>GitHub 忽略指定文件</span></a></h3><p>项目路径新建一个命名为 .gitignore 的文件，将想要忽略的文件夹和文件写入 .gitignore 文件，换行分隔。</p><p>比如要忽略 node_modules 文件夹，就直接在文件中输入 node_modules。</p><h3 id="添加-github-源作为依赖" tabindex="-1"><a class="header-anchor" href="#添加-github-源作为依赖"><span>添加 Github 源作为依赖</span></a></h3><p>一般情况下，依赖包会使用 npm 进行管理。但有时开发者可能并不会立即更新到 npm 上，这时我们可以选择使用 GitHub 源作为备用方案。</p><p>另外，在国内服务器连接不上 GitHub 的情况下，可以先使用 npm 安装依赖包，然后手动替换 node_modules 目录中对应的源为下载好的文件。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> strapi-google-auth\n<span class="token function">yarn</span> <span class="token function">add</span> https://github.com/arjusmoon860/strapi-google-auth.git\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr class="footnotes-sep">',21),f={class:"footnotes"},v={class:"footnotes-list"},y={id:"footnote1",class:"footnote-item"},A={href:"https://docs.github.com/cn/actions/learn-github-actions/understanding-github-actions",target:"_blank",rel:"noopener noreferrer"},G=(0,t.Lk)("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),_={id:"footnote2",class:"footnote-item"},L={href:"https://blog.csdn.net/Ber_Bai/article/details/120310024",target:"_blank",rel:"noopener noreferrer"},w=(0,t.Lk)("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1),H={id:"footnote3",class:"footnote-item"},C={href:"https://www.jianshu.com/p/6433679cd10f",target:"_blank",rel:"noopener noreferrer"},W=(0,t.Lk)("a",{href:"#footnote-ref3",class:"footnote-backref"},"↩︎",-1),F={id:"footnote4",class:"footnote-item"},x={href:"http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html",target:"_blank",rel:"noopener noreferrer"},D=(0,t.Lk)("a",{href:"#footnote-ref4",class:"footnote-backref"},"↩︎",-1),S={},E=(0,a(3671).A)(S,[["render",function(e,n){const a=(0,t.g2)("ExternalLinkIcon");return(0,t.uX)(),(0,t.CE)("div",null,[s,(0,t.Lk)("ul",null,[(0,t.Lk)("li",null,[(0,t.Lk)("a",o,[(0,t.eW)("GitHub Actions 官方市场"),(0,t.bF)(a)])]),(0,t.Lk)("li",null,[(0,t.Lk)("a",i,[(0,t.eW)("Awesome Actions"),(0,t.bF)(a)])])]),l,c,(0,t.Lk)("p",null,[(0,t.eW)("Dependabot 是 GitHub 提供的官方自动化工具，可监视项目中使用的依赖项中的漏洞，并确保这些依赖项保持最新。你可以使用"),(0,t.Lk)("a",p,[(0,t.eW)("常用 Dependabot 自动化"),(0,t.bF)(a)]),(0,t.eW)(" 中的 GitHub Actions 命令，使 Dependabot 自动完成依赖的标记、批准拉取请求以及合并操作。如果仍有疑问，可以参考 tools-by-ai 中的 "),(0,t.Lk)("a",r,[(0,t.eW)(".github"),(0,t.bF)(a)]),(0,t.eW)(" 配置。")]),u,(0,t.Lk)("p",null,[(0,t.eW)("此动作需按 "),(0,t.Lk)("a",d,[(0,t.eW)("Creating a personal access token"),(0,t.bF)(a)]),(0,t.eW)(" 建立"),(0,t.Lk)("a",h,[(0,t.eW)("个人访问令牌"),(0,t.bF)(a)]),(0,t.eW)("，勾选权限「repo Full control of private repositories」，然后将该 token 值其保存在项目仓库的 Action 密钥。")]),m,(0,t.Lk)("p",null,[(0,t.eW)("标准化的 Commit message 可以提供清晰、易读的历史记录，使我们更容易理解每个提交的目的和内容，这有助于追踪和审查代码变更。通过 "),(0,t.Lk)("a",b,[(0,t.eW)("conventional-changelog-cli"),(0,t.bF)(a)]),(0,t.eW)(" 可以自动生成 CHANGELOG.md。建议都按照 "),(0,t.Lk)("a",k,[(0,t.eW)("Conventional Commits"),(0,t.bF)(a)]),(0,t.eW)(" 的规范来进行提交。")]),g,(0,t.Lk)("section",f,[(0,t.Lk)("ol",v,[(0,t.Lk)("li",y,[(0,t.Lk)("p",null,[(0,t.Lk)("a",A,[(0,t.eW)("了解 GitHub Actions"),(0,t.bF)(a)]),(0,t.eW)(),G])]),(0,t.Lk)("li",_,[(0,t.Lk)("p",null,[(0,t.Lk)("a",L,[(0,t.eW)("最全总结，GitHub Action 自动化部署"),(0,t.bF)(a)]),(0,t.eW)(),w])]),(0,t.Lk)("li",H,[(0,t.Lk)("p",null,[(0,t.Lk)("a",C,[(0,t.eW)("Git Commit 规范"),(0,t.bF)(a)]),(0,t.eW)(),W])]),(0,t.Lk)("li",F,[(0,t.Lk)("p",null,[(0,t.Lk)("a",x,[(0,t.eW)("Commit message 和 Change log 编写指南"),(0,t.bF)(a)]),(0,t.eW)(),D])])])])])}]]),R=JSON.parse('{"path":"/deploy/GitHub.html","title":"GitHub","lang":"zh-CN","frontmatter":{"article":false,"title":"GitHub","icon":"github","order":4,"description":"GitHub Actions GitHub Actions 是一个持续集成和持续交付 (CI/CD) 平台，可用于自动执行构建、测试和部署管道。您可以创建工作流程来构建和测试存储库的每个拉取请求，或将合并的拉取请求部署到生产环境。将 GitHub Actions 命令保存为 main.yml，放于 .github\\\\workflows 目录下，repo ...","head":[["meta",{"property":"og:url","content":"https://newzone.top/deploy/GitHub.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"GitHub"}],["meta",{"property":"og:description","content":"GitHub Actions GitHub Actions 是一个持续集成和持续交付 (CI/CD) 平台，可用于自动执行构建、测试和部署管道。您可以创建工作流程来构建和测试存储库的每个拉取请求，或将合并的拉取请求部署到生产环境。将 GitHub Actions 命令保存为 main.yml，放于 .github\\\\workflows 目录下，repo ..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-12T09:38:42.000Z"}],["meta",{"property":"article:author","content":"LearnData"}],["meta",{"property":"article:modified_time","content":"2024-03-12T09:38:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"GitHub\\",\\"description\\":\\"GitHub Actions GitHub Actions 是一个持续集成和持续交付 (CI/CD) 平台，可用于自动执行构建、测试和部署管道。您可以创建工作流程来构建和测试存储库的每个拉取请求，或将合并的拉取请求部署到生产环境。将 GitHub Actions 命令保存为 main.yml，放于 .github\\\\\\\\workflows 目录下，repo ...\\"}"]]},"headers":[{"level":2,"title":"GitHub Actions","slug":"github-actions","link":"#github-actions","children":[{"level":3,"title":"Dependabot","slug":"dependabot","link":"#dependabot","children":[]},{"level":3,"title":"不同仓库间复制","slug":"不同仓库间复制","link":"#不同仓库间复制","children":[]},{"level":3,"title":"Actions 失败重试","slug":"actions-失败重试","link":"#actions-失败重试","children":[]},{"level":3,"title":"uses 版本号","slug":"uses-版本号","link":"#uses-版本号","children":[]}]},{"level":2,"title":"Git Commit","slug":"git-commit","link":"#git-commit","children":[{"level":3,"title":"Type","slug":"type","link":"#type","children":[]},{"level":3,"title":"Scope","slug":"scope","link":"#scope","children":[]},{"level":3,"title":"Footer","slug":"footer","link":"#footer","children":[]}]},{"level":2,"title":"Pull Requests","slug":"pull-requests","link":"#pull-requests","children":[]},{"level":2,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[{"level":3,"title":"GitHub 忽略指定文件","slug":"github-忽略指定文件","link":"#github-忽略指定文件","children":[]},{"level":3,"title":"添加 Github 源作为依赖","slug":"添加-github-源作为依赖","link":"#添加-github-源作为依赖","children":[]}]}],"git":{"createdTime":1710236322000,"updatedTime":1710236322000,"contributors":[{"name":"moco","email":"111498269+d-moco@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":5.16,"words":1548},"filePathRelative":"deploy/GitHub.md","localizedDate":"2024年3月12日","excerpt":"<h2>GitHub Actions</h2>\\n<p>GitHub Actions 是一个持续集成和持续交付 (CI/CD) 平台，可用于自动执行构建、测试和部署管道。您可以创建工作流程来构建和测试存储库的每个拉取请求，或将合并的拉取请求部署到生产环境。将 GitHub Actions 命令保存为 <code>main.yml</code>，放于 <code>.github\\\\workflows</code> 目录下，repo 发生指定调节的改变时，Actions 会自动运行。<sup class=\\"footnote-ref\\"><a href=\\"#footnote1\\">[1]</a><a class=\\"footnote-anchor\\" id=\\"footnote-ref1\\"></a></sup></p>","autoDesc":true}')}}]);