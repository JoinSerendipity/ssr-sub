/**
 * Clash Verge / Mihomo Script
 * Updated based on user provided DNS, Rule-Providers, and Rules.
 */

function main(config) {
  // 1. 提取当前订阅中的所有代理节点名称
  const allProxies = (config.proxies || []).map((p) => p.name);
  const filterProxies = (regex) =>
    allProxies.filter((name) => regex.test(name));

  // 2. 定义需要在 Rules 和 DNS 中引用的代理组名称
  const MainProxyGroup = "🌏️Main Proxy";
  const AutoGroup = "♻️ 自动选择";

  // 3. 定义 Rule Providers (直接应用你提供的配置)
  const newRuleProviders = {
    "Apple-Site": {
      type: "http",
      behavior: "domain",
      format: "mrs",
      url: "https://cdn.jsdmirror.com/gh/HosheaPDNX/rule-set@V2.0.2/mihomo/Apple/Apple-Site.mrs",
      path: "./ruleset/Apple-Site.mrs",
      proxy: "DIRECT",
      interval: 86400,
    },
    "Apple-IP": {
      type: "http",
      behavior: "ipcidr",
      format: "mrs",
      url: "https://cdn.jsdmirror.com/gh/HosheaPDNX/rule-set@V2.0.2/mihomo/Apple/Apple-IP.mrs",
      path: "./ruleset/Apple-IP.mrs",
      proxy: "DIRECT",
      interval: 86400,
    },
    "Bahamut-Site": {
      type: "http",
      behavior: "domain",
      format: "mrs",
      url: "https://cdn.jsdmirror.com/gh/HosheaPDNX/rule-set@V2.0.2/mihomo/Bahamut/Bahamut-Site.mrs",
      path: "./ruleset/Bahamut-Site.mrs",
      proxy: "DIRECT",
      interval: 86400,
    },
    "Bilibili-Site": {
      type: "http",
      behavior: "domain",
      format: "mrs",
      url: "https://cdn.jsdmirror.com/gh/HosheaPDNX/rule-set@V2.0.2/mihomo/Bilibili/Bilibili-Site.mrs",
      path: "./ruleset/Bilibili-Site.mrs",
      proxy: "DIRECT",
      interval: 86400,
    },
    "Bilibili-IP": {
      type: "http",
      behavior: "ipcidr",
      format: "mrs",
      url: "https://cdn.jsdmirror.com/gh/HosheaPDNX/rule-set@V2.0.2/mihomo/Bilibili/Bilibili-IP.mrs",
      path: "./ruleset/Bilibili-IP.mrs",
      proxy: "DIRECT",
      interval: 86400,
    },
    "China-Site": {
      type: "http",
      behavior: "domain",
      format: "mrs",
      url: "https://cdn.jsdmirror.com/gh/HosheaPDNX/rule-set@V2.0.2/mihomo/China/China-Site.mrs",
      path: "./ruleset/China-Site.mrs",
      proxy: "DIRECT",
      interval: 86400,
    },
    "China-IP": {
      type: "http",
      behavior: "ipcidr",
      format: "mrs",
      url: "https://cdn.jsdmirror.com/gh/HosheaPDNX/rule-set@V2.0.2/mihomo/China/China-IP.mrs",
      path: "./ruleset/China-IP.mrs",
      proxy: "DIRECT",
      interval: 86400,
    },
    "Discord-Site": {
      type: "http",
      behavior: "domain",
      format: "mrs",
      url: "https://cdn.jsdmirror.com/gh/HosheaPDNX/rule-set@V2.0.2/mihomo/Discord/Discord-Site.mrs",
      path: "./ruleset/Discord-Site.mrs",
      proxy: "DIRECT",
      interval: 86400,
    },
    "GFWList-Site": {
      type: "http",
      behavior: "domain",
      format: "mrs",
      url: "https://cdn.jsdmirror.com/gh/HosheaPDNX/rule-set@V2.0.2/mihomo/GFWList/GFWList-Site.mrs",
      path: "./ruleset/GFWList-Site.mrs",
      proxy: "DIRECT",
      interval: 86400,
    },
    "Google-Site": {
      type: "http",
      behavior: "domain",
      format: "mrs",
      url: "https://cdn.jsdmirror.com/gh/HosheaPDNX/rule-set@V2.0.2/mihomo/Google/Google-Site.mrs",
      path: "./ruleset/Google-Site.mrs",
      proxy: "DIRECT",
      interval: 86400,
    },
    "Google-IP": {
      type: "http",
      behavior: "ipcidr",
      format: "mrs",
      url: "https://cdn.jsdmirror.com/gh/HosheaPDNX/rule-set@V2.0.2/mihomo/Google/Google-IP.mrs",
      path: "./ruleset/Google-IP.mrs",
      proxy: "DIRECT",
      interval: 86400,
    },
    "GoogleFCM-Site": {
      type: "http",
      behavior: "domain",
      format: "mrs",
      url: "https://cdn.jsdmirror.com/gh/HosheaPDNX/rule-set@V2.0.2/mihomo/GoogleFCM/GoogleFCM-Site.mrs",
      path: "./ruleset/GoogleFCM-Site.mrs",
      proxy: "DIRECT",
      interval: 86400,
    },
    "Local-IP": {
      type: "http",
      behavior: "ipcidr",
      format: "mrs",
      url: "https://cdn.jsdmirror.com/gh/HosheaPDNX/rule-set@V2.0.2/mihomo/Local/Local-IP.mrs",
      path: "./ruleset/Local-IP.mrs",
      proxy: "DIRECT",
      interval: 86400,
    },
    "Microsoft-Site": {
      type: "http",
      behavior: "domain",
      format: "mrs",
      url: "https://cdn.jsdmirror.com/gh/HosheaPDNX/rule-set@V2.0.2/mihomo/Microsoft/Microsoft-Site.mrs",
      path: "./ruleset/Microsoft-Site.mrs",
      proxy: "DIRECT",
      interval: 86400,
    },
    "Netflix-Site": {
      type: "http",
      behavior: "domain",
      format: "mrs",
      url: "https://cdn.jsdmirror.com/gh/HosheaPDNX/rule-set@V2.0.2/mihomo/Netflix/Netflix-Site.mrs",
      path: "./ruleset/Netflix-Site.mrs",
      proxy: "DIRECT",
      interval: 86400,
    },
    "Netflix-IP": {
      type: "http",
      behavior: "ipcidr",
      format: "mrs",
      url: "https://cdn.jsdmirror.com/gh/HosheaPDNX/rule-set@V2.0.2/mihomo/Netflix/Netflix-IP.mrs",
      path: "./ruleset/Netflix-IP.mrs",
      proxy: "DIRECT",
      interval: 86400,
    },
    "OpenAI-Site": {
      type: "http",
      behavior: "domain",
      format: "mrs",
      url: "https://cdn.jsdmirror.com/gh/HosheaPDNX/rule-set@V2.0.2/mihomo/OpenAI/OpenAI-Site.mrs",
      path: "./ruleset/OpenAI-Site.mrs",
      proxy: "DIRECT",
      interval: 86400,
    },
    "OpenAI-IP": {
      type: "http",
      behavior: "ipcidr",
      format: "mrs",
      url: "https://cdn.jsdmirror.com/gh/HosheaPDNX/rule-set@V2.0.2/mihomo/OpenAI/OpenAI-IP.mrs",
      path: "./ruleset/OpenAI-IP.mrs",
      proxy: "DIRECT",
      interval: 86400,
    },
    "Speedtest-Site": {
      type: "http",
      behavior: "domain",
      format: "mrs",
      url: "https://cdn.jsdmirror.com/gh/HosheaPDNX/rule-set@V2.0.2/mihomo/Speedtest/Speedtest-Site.mrs",
      path: "./ruleset/Speedtest-Site.mrs",
      proxy: "DIRECT",
      interval: 86400,
    },
    "Spotify-Site": {
      type: "http",
      behavior: "domain",
      format: "mrs",
      url: "https://cdn.jsdmirror.com/gh/HosheaPDNX/rule-set@V2.0.2/mihomo/Spotify/Spotify-Site.mrs",
      path: "./ruleset/Spotify-Site.mrs",
      proxy: "DIRECT",
      interval: 86400,
    },
    "Spotify-IP": {
      type: "http",
      behavior: "ipcidr",
      format: "mrs",
      url: "https://cdn.jsdmirror.com/gh/HosheaPDNX/rule-set@V2.0.2/mihomo/Spotify/Spotify-IP.mrs",
      path: "./ruleset/Spotify-IP.mrs",
      proxy: "DIRECT",
      interval: 86400,
    },
    "Steam-Site": {
      type: "http",
      behavior: "domain",
      format: "mrs",
      url: "https://cdn.jsdmirror.com/gh/HosheaPDNX/rule-set@V2.0.2/mihomo/Steam/Steam-Site.mrs",
      path: "./ruleset/Steam-Site.mrs",
      proxy: "DIRECT",
      interval: 86400,
    },
    "Telegram-Site": {
      type: "http",
      behavior: "domain",
      format: "mrs",
      url: "https://cdn.jsdmirror.com/gh/HosheaPDNX/rule-set@V2.0.2/mihomo/Telegram/Telegram-Site.mrs",
      path: "./ruleset/Telegram-Site.mrs",
      proxy: "DIRECT",
      interval: 86400,
    },
    "Telegram-IP": {
      type: "http",
      behavior: "ipcidr",
      format: "mrs",
      url: "https://cdn.jsdmirror.com/gh/HosheaPDNX/rule-set@V2.0.2/mihomo/Telegram/Telegram-IP.mrs",
      path: "./ruleset/Telegram-IP.mrs",
      proxy: "DIRECT",
      interval: 86400,
    },
    "TikTok-Site": {
      type: "http",
      behavior: "domain",
      format: "mrs",
      url: "https://cdn.jsdmirror.com/gh/HosheaPDNX/rule-set@V2.0.2/mihomo/TikTok/TikTok-Site.mrs",
      path: "./ruleset/TikTok-Site.mrs",
      proxy: "DIRECT",
      interval: 86400,
    },
    "Taiwan-Site": {
      type: "http",
      behavior: "domain",
      format: "mrs",
      url: "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetMrs/Taiwan.mrs",
      path: "./ruleset/Taiwan.mrs",
      proxy: "DIRECT",
      interval: 86400,
    },
    "Twitch-Site": {
      type: "http",
      behavior: "domain",
      format: "mrs",
      url: "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetMrs/Twitch.mrs",
      path: "./ruleset/Twitch.mrs",
      proxy: "DIRECT",
      interval: 86400,
    },
    "HongKong-Site": {
      type: "http",
      behavior: "domain",
      format: "mrs",
      url: "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetMrs/HongKong.mrs",
      path: "./ruleset/HongKong.mrs",
      proxy: "DIRECT",
      interval: 86400,
    },
  };

  // 4. 重建 Proxy Groups
  // Rules 中引用了大量的特定 Group，如果不创建这些 Group，配置会报错。
  // 我们创建辅助函数来生成这些组。

  // 自动选择组
  const groupAuto = {
    name: AutoGroup,
    type: "url-test",
    url: "http://www.gstatic.com/generate_204",
    interval: 300,
    tolerance: 50,
    proxies: filterProxies(/.*/),
  };
  if (groupAuto.proxies.length === 0) groupAuto.proxies = ["DIRECT"];

  // 主代理组 (对应 Rules 中的 🌏️Main Proxy)
  const groupMain = {
    name: MainProxyGroup,
    type: "select",
    proxies: ["DIRECT", AutoGroup, ...filterProxies(/.*/)],
  };

  // 辅助函数：创建 Select 组
  // 如果提供了 regex，则优先筛选节点；否则放入所有节点
  const createGroup = (name, regexStr = null) => {
    let specificProxies = [];
    if (regexStr) {
      specificProxies = filterProxies(new RegExp(regexStr));
    }
    // 如果筛选结果为空，或没有筛选，则默认放入主代理和自动选择
    const fallbackProxies = [MainProxyGroup, AutoGroup, ...filterProxies(/.*/)];

    return {
      name,
      type: "select",
      proxies:
        specificProxies.length > 0
          ? ["DIRECT", MainProxyGroup, AutoGroup, ...specificProxies]
          : ["DIRECT", ...fallbackProxies],
    };
  };

  // 根据 Rules 中出现的名称创建组
  const proxyGroups = [
    groupMain,
    groupAuto,

    // 地区/服务特定组 (尝试匹配常见的节点关键字)
    createGroup("🌸Bahamut", "(台湾|Taiwan|TW)"),
    createGroup("🇨🇳 Taiwan", "(台湾|Taiwan|TW)"),
    createGroup("🇭🇰 HongKong", "(香港|Hong Kong|HK)"),
    createGroup("📺Bilibili", "(香港|Hong Kong|HK|台湾|Taiwan|TW|CN|China)"),

    // 应用特定组 (通常包含所有节点供选择)
    createGroup("🔍Google"),
    createGroup("🎙 Twitch"),
    createGroup("🎙️Discord"),
    createGroup("☁️GoogleFCM"),
    createGroup("📽️Netflix"),
    createGroup("🤖OpenAI"),
    createGroup("⏱️Speedtest"),
    createGroup("🎵Spotify"),
    createGroup("🎮Steam"),
    createGroup("✈️Telegram"),
    createGroup("🎶TikTok"),
    createGroup("🍎Apple"),
    createGroup("💻Microsoft"),

    // 功能组
    {
      name: "🧱Blocked Services",
      type: "select",
      proxies: ["REJECT", MainProxyGroup, ...filterProxies(/.*/)],
    },
    {
      name: "🇨🇳China Services",
      type: "select",
      proxies: ["DIRECT", MainProxyGroup],
    },
  ];

  // 5. 应用配置
  config["rule-providers"] = newRuleProviders;
  config["proxy-groups"] = proxyGroups;

  // 6. 应用 DNS 配置
  config.dns = {
    enable: true,
    "prefer-h3": false,
    listen: "0.0.0.0:1053",
    ipv6: false,
    "enhanced-mode": "fake-ip",
    "fake-ip-range": "198.18.0.1/16",
    "fake-ip-filter": [
      "+.lan",
      "+.local",
      "localhost.ptlogin2.qq.com",
      "+.msftconnecttest.com",
      "+.msftncsi.com",
      "+.googleapis.com",
      "+.googleapis.cn",
      "alt1-mtalk.google.com",
      "alt2-mtalk.google.com",
      "alt3-mtalk.google.com",
      "alt4-mtalk.google.com",
      "alt5-mtalk.google.com",
      "alt6-mtalk.google.com",
      "alt7-mtalk.google.com",
      "alt8-mtalk.google.com",
      "mtalk.google.com",
    ],
    "use-hosts": true,
    "default-nameserver": [
      "114.114.114.114#DIRECT",
      "223.5.5.5#DIRECT",
      "119.29.29.29#DIRECT",
      "180.76.76.76#DIRECT",
      "180.184.1.1#DIRECT",
    ],
    "proxy-server-nameserver": [
      "https://dns.alidns.com/dns-query#DIRECT",
      "https://doh.pub/dns-query#DIRECT",
      "https://doh.onedns.net/dns-query#DIRECT",
    ],
    nameserver: [`https://cloudflare-dns.com/dns-query#${MainProxyGroup}`],
    "nameserver-policy": {
      "ntp.aliyun.com": "https://dns.alidns.com/dns-query#DIRECT",
      "+.jsdmirror.com": "https://dns.alidns.com/dns-query#DIRECT",
      "fastly.jsdelivr.net": "https://dns.alidns.com/dns-query#DIRECT",
      "+.msftconnecttest.com,+.msftncsi.com": `https://cloudflare-dns.com/dns-query#${MainProxyGroup}`,
      "+.googleapis.com,+.googleapis.cn":
        "https://cloudflare-dns.com/dns-query#🔍Google",

      // Rule-Set DNS 分流映射 (对应 Rule Providers 和 Proxy Groups)
      "rule-set:Bahamut-Site": "https://cloudflare-dns.com/dns-query#🌸Bahamut",
      "rule-set:Taiwan-Site": "https://cloudflare-dns.com/dns-query#🇨🇳 Taiwan",
      "rule-set:HongKong-Site":
        "https://cloudflare-dns.com/dns-query#🇭🇰 HongKong",
      "rule-set:Twitch-Site": "https://cloudflare-dns.com/dns-query#🎙 Twitch",
      "rule-set:Bilibili-Site": "https://dns.alidns.com/dns-query#📺Bilibili",
      "rule-set:Discord-Site": "https://cloudflare-dns.com/dns-query#🎙️Discord",
      "rule-set:GoogleFCM-Site":
        "https://cloudflare-dns.com/dns-query#☁️GoogleFCM",
      "rule-set:Netflix-Site": "https://cloudflare-dns.com/dns-query#📽️Netflix",
      "rule-set:OpenAI-Site": "https://cloudflare-dns.com/dns-query#🤖OpenAI",
      "rule-set:Speedtest-Site":
        "https://cloudflare-dns.com/dns-query#⏱️Speedtest",
      "rule-set:Spotify-Site": "https://cloudflare-dns.com/dns-query#🎵Spotify",
      "rule-set:Steam-Site": "https://doh.pub/dns-query#🎮Steam",
      "rule-set:Telegram-Site":
        "https://cloudflare-dns.com/dns-query#✈️Telegram",
      "rule-set:TikTok-Site": "https://cloudflare-dns.com/dns-query#🎶TikTok",
      "rule-set:Apple-Site": "https://doh.pub/dns-query#🍎Apple",
      "rule-set:Google-Site": "https://cloudflare-dns.com/dns-query#🔍Google",
      "rule-set:Microsoft-Site": "https://doh.pub/dns-query#💻Microsoft",
      "rule-set:GFWList-Site":
        "https://cloudflare-dns.com/dns-query#🧱Blocked Services",
      "rule-set:China-Site":
        "https://dns.alidns.com/dns-query#🇨🇳China Services",
    },
  };

  // 7. 应用 Rules 配置
  config.rules = [
    "AND,((DST-PORT,443),(NETWORK,UDP)),REJECT",
    "DOMAIN,ntp.aliyun.com,DIRECT",
    "DOMAIN,proxy.sakuraikaede.com,DIRECT",
    "DOMAIN,converter-mitce.sakuraikaede.com,DIRECT",
    `DOMAIN-KEYWORD,msftconnecttest.com,${MainProxyGroup}`,
    `DOMAIN-KEYWORD,msftncsi.com,${MainProxyGroup}`,
    "DOMAIN-KEYWORD,googleapis,🔍Google",
    // YouTube 主域名与视频流
    "DOMAIN-SUFFIX,youtube.com, 🔍Google",
    "DOMAIN-SUFFIX,googlevideo.com, 🔍Google",
    "DOMAIN-SUFFIX,youtu.be, 🔍Google",
    "DOMAIN-SUFFIX,ytimg.com, 🔍Google",
    "DOMAIN-SUFFIX,ggpht.com, 🔍Google",

    //YouTube 专用 API 与服务
    "DOMAIN,youtubei.googleapis.com, 🔍Google",
    "DOMAIN,yt3.ggpht.com, 🔍Google",
    "DOMAIN-SUFFIX,youtube-nocookie.com, 🔍Google",
    "DOMAIN-SUFFIX,youtubeeducation.com, 🔍Google",
    "DOMAIN-SUFFIX,yt.be, 🔍Google",

    // 关键词匹配 (防漏掉的长尾域名)
    "DOMAIN-KEYWORD,youtube, 🔍Google",

    // Rule Sets
    "RULE-SET,Bahamut-Site,🌸Bahamut",
    "RULE-SET,Bilibili-Site,📺Bilibili",
    "RULE-SET,Taiwan-Site,🇨🇳 Taiwan",
    "RULE-SET,HongKong-Site,🇭🇰 HongKong",
    "RULE-SET,Twitch-Site,🎙 Twitch",
    "RULE-SET,Discord-Site,🎙️Discord",
    "RULE-SET,GoogleFCM-Site,☁️GoogleFCM",
    "RULE-SET,Netflix-Site,📽️Netflix",
    "RULE-SET,OpenAI-Site,🤖OpenAI",
    "RULE-SET,Speedtest-Site,⏱️Speedtest",
    "RULE-SET,Spotify-Site,🎵Spotify",
    "RULE-SET,Steam-Site,🎮Steam",
    "RULE-SET,Telegram-Site,✈️Telegram",
    "RULE-SET,TikTok-Site,🎶TikTok",
    "RULE-SET,Apple-Site,🍎Apple",
    "RULE-SET,Google-Site,🔍Google",
    "RULE-SET,Microsoft-Site,💻Microsoft",
    "RULE-SET,GFWList-Site,🧱Blocked Services",
    "RULE-SET,China-Site,🇨🇳China Services",

    // Local / IP Rules
    "RULE-SET,Local-IP,DIRECT,no-resolve",
    "RULE-SET,Bilibili-IP,📺Bilibili",
    "RULE-SET,Netflix-IP,📽️Netflix",
    "RULE-SET,OpenAI-IP,🤖OpenAI",
    "RULE-SET,Spotify-IP,🎵Spotify",
    "RULE-SET,Telegram-IP,✈️Telegram",
    "RULE-SET,Apple-IP,🍎Apple",
    "RULE-SET,Google-IP,🔍Google",
    "RULE-SET,China-IP,🇨🇳China Services",

    // Match
    `MATCH,${MainProxyGroup}`,
  ];

  return config;
}
