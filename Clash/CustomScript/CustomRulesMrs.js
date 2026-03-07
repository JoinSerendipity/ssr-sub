/**
 * Clash Verge / Mihomo Script
 * - rule-providers: 生成 XXX-Site，全部 behavior=domain，支持 yaml -> mrs 升级
 * - dns: 注入“和他一样”的 nameserver-policy(rule-set:XXX-Site)
 * - rules: 仍按你原逻辑，只是 RULE-SET 名称改成 XXX-Site
 */

// 以后你把每个规则集都转成 .mrs 并托管后，改成 true
// const USE_MRS = false;

// 你的规则集源（全部 domain）
// 说明：现在是 yaml 源；你未来上 mrs 后，把 url_mrs 填上即可
const ruleProviderSources = {
  LocalAreaNetwork: {
    url_yaml:
      "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/LocalAreaNetwork.yaml",
    url_mrs: null,
    proxy: "DIRECT",
    behavior: "classical",
    interval: 86400,
  },
  ChatGPT: {
    url_yaml: null,
    url_mrs:
      "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetMrs/ChatGPT.mrs",
    proxy: "DIRECT",
    behavior: "domain",
    interval: 86400,
  },
  Netflix: {
    url_yaml:
      "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/Netflix.yaml",
    url_mrs: null,
    proxy: "DIRECT",
    behavior: "classical",
    interval: 86400,
  },
  Taiwan: {
    url_yaml: null,
    url_mrs:
      "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetMrs/Taiwan.mrs",
    proxy: "DIRECT",
    behavior: "domain",
    interval: 86400,
  },
  BILIBILI: {
    url_yaml:
      "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/bilibili.yaml",
    url_mrs: null,
    proxy: "DIRECT",
    behavior: "classical",
    interval: 86400,
  },
  SteamDownload: {
    url_yaml:
      "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/SteamDownload.yaml",
    url_mrs: null,
    proxy: "DIRECT",
    behavior: "classical",
    interval: 86400,
  },
  Steam: {
    url_yaml:
      "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/Steam.yaml",
    url_mrs: null,
    proxy: "DIRECT",
    behavior: "classical",
    interval: 86400,
  },
  PikPak: {
    url_yaml:
      "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/PikPak.yaml",
    url_mrs: null,
    proxy: "DIRECT",
    behavior: "classical",
    interval: 86400,
  },
  HongKong: {
    url_yaml:
      "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/HongKong.yaml",
    url_mrs: null,
    proxy: "DIRECT",
    behavior: "classical",
    interval: 86400,
  },
  Tiktok: {
    url_yaml:
      "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/Tiktok.yaml",
    url_mrs: null,
    proxy: "DIRECT",
    behavior: "classical",
    interval: 86400,
  },
  Twitch: {
    url_yaml:
      "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/Twitch.yaml",
    url_mrs: null,
    proxy: "DIRECT",
    behavior: "classical",
    interval: 86400,
  },
  Disney: {
    url_yaml:
      "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/Disney.yaml",
    url_mrs: null,
    proxy: "DIRECT",
    behavior: "classical",
    interval: 86400,
  },
  Japan: {
    url_yaml:
      "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/Japan.yaml",
    url_mrs: null,
    proxy: "DIRECT",
    behavior: "classical",
    interval: 86400,
  },
  Korea: {
    url_yaml:
      "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/Korea.yaml",
    url_mrs: null,
    proxy: "DIRECT",
    behavior: "classical",
    interval: 86400,
  },
  Epic: {
    url_yaml:
      "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/Epic.yaml",
    url_mrs: null,
    proxy: "DIRECT",
    behavior: "classical",
    interval: 86400,
  },
  EpicDownload: {
    url_yaml:
      "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/EpicDownload.yaml",
    url_mrs: null,
    proxy: "DIRECT",
    behavior: "classical",
    interval: 86400,
  },
  Emby: {
    url_yaml:
      "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/Emby.yaml",
    url_mrs: null,
    proxy: "DIRECT",
    behavior: "classical",
    interval: 86400,
  },
  Porn: {
    url_yaml:
      "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/Porn.yaml",
    url_mrs: null,
    proxy: "DIRECT",
    behavior: "classical",
    interval: 86400,
  },
  BanAD: {
    url_yaml:
      "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/BanAD.yaml",
    url_mrs: null,
    proxy: "DIRECT",
    behavior: "classical",
    interval: 86400,
  },
  Reject: {
    url_yaml: null,
    url_mrs:
      "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetMrs/Reject.mrs",
    proxy: "DIRECT",
    behavior: "domain",
    interval: 86400,
  },
  BanProgramAD: {
    url_yaml:
      "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/BanProgramAD.yaml",
    url_mrs: null,
    proxy: "DIRECT",
    behavior: "classical",
    interval: 86400,
  },
  Google: {
    url_yaml: null,
    url_mrs:
      "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetMrs/Google.mrs",
    proxy: "DIRECT",
    behavior: "domain",
    interval: 86400,
  },
  GoogleCN: {
    url_yaml: null,
    url_mrs:
      "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetMrs/GoogleCN.mrs",
    proxy: "DIRECT",
    behavior: "domain",
    interval: 86400,
  },
  Microsoft: {
    url_yaml:
      "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/Microsoft.yaml",
    url_mrs: null,
    proxy: "DIRECT",
    behavior: "classical",
    interval: 86400,
  },
  ProxyList: {
    url_yaml:
      "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/ProxyList.yaml",
    url_mrs: null,
    proxy: "DIRECT",
    behavior: "classical",
    interval: 86400,
  },
  Proxy: {
    url_yaml:
      "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/Proxy.yaml",
    url_mrs: null,
    proxy: "DIRECT",
    behavior: "classical",
    interval: 86400,
  },
  CustomDirect: {
    url_yaml:
      "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/CustomDirect.yaml",
    url_mrs: null,
    proxy: "DIRECT",
    behavior: "classical",
    interval: 86400,
  },
  ChinaDomain: {
    url_yaml: null,
    url_mrs:
      "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetMrs/ChinaDomain.mrs",
    proxy: "DIRECT",
    behavior: "domain",
    interval: 86400,
  },
  // ChinaCompany: {
  //   url_yaml: null,
  //   url_mrs:
  //     "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetMrs/ChinaCompanyIp.mrs",
  //   proxy: "DIRECT",
  //   behavior: "ipcidr",
  //   interval: 86400,
  // },
};

// --- 工具函数：选择 url 和 format ---
function pickUrl(meta) {
  if (!meta) return null;
  if (meta.url_mrs && !meta.url_yaml)
    return { url: meta.url_mrs, format: "mrs" };
  return { url: meta.url_yaml, format: "yaml" };
}

// 生成 rule-providers：全部输出为 XXX-Site，behavior=domain
function buildRuleProviders() {
  const ruleProviders = {};
  for (const [base, meta] of Object.entries(ruleProviderSources)) {
    const picked = pickUrl(meta);
    if (!picked) continue;

    const ext = picked.format === "mrs" ? "mrs" : "yaml";
    let name;
    meta.behavior === "domain" || meta.behavior === "classical"
      ? (name = `${base}-Site`)
      : (name = `${base}-IP`);

    ruleProviders[name] = {
      type: "http",
      behavior: meta.behavior,
      format: picked.format,
      url: picked.url,
      path: `./ruleset/${name}.${ext}`,
      proxy: meta.proxy || "DIRECT",
      interval: meta.interval ?? 86400,
    };
  }
  return ruleProviders;
}

function main(config) {
  // 1) 代理组（保持你原来的逻辑）
  const manualSelectGroup = "🚀 节点选择";
  const autoSelectGroup = "♻️ 自动选择";
  const directGroup = "🎯 全球直连";

  // 2) 注入 DNS（“像他一样”的结构：nameserver-policy rule-set:XXX-Site）
  // 说明：DNS 的 rule-set 必须是 domain 行为；我们这里全部是 XXX-Site
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
      "mtalk.google.com",
      "alt1-mtalk.google.com",
      "alt2-mtalk.google.com",
      "alt3-mtalk.google.com",
      "alt4-mtalk.google.com",
      "alt5-mtalk.google.com",
      "alt6-mtalk.google.com",
      "alt7-mtalk.google.com",
      "alt8-mtalk.google.com",
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
    nameserver: [`https://cloudflare-dns.com/dns-query#${manualSelectGroup}`],
    "nameserver-policy": {
      "ntp.aliyun.com": "https://dns.alidns.com/dns-query#DIRECT",
      "+.jsdmirror.com": "https://dns.alidns.com/dns-query#DIRECT",
      "fastly.jsdelivr.net": "https://dns.alidns.com/dns-query#DIRECT",

      "+.msftconnecttest.com,+.msftncsi.com": `https://cloudflare-dns.com/dns-query#${manualSelectGroup}`,
      "+.googleapis.com,+.googleapis.cn":
        "https://cloudflare-dns.com/dns-query#🈲 Google",

      // 你的规则集 DNS 分流（按你自己的策略组名）
      "rule-set:ChatGPT-Site":
        "https://cloudflare-dns.com/dns-query#💬 ChatGPT",
      "rule-set:Netflix-Site":
        "https://cloudflare-dns.com/dns-query#📽️ Netflix",
      "rule-set:Taiwan-Site": "https://dns.alidns.com/dns-query#🇨🇳 Taiwan",
      "rule-set:BILIBILI-Site": "https://dns.alidns.com/dns-query#🎬 BILIBILI",
      "rule-set:SteamDownload-Site":
        "https://doh.pub/dns-query#🎮 Steam 登录/下载",
      "rule-set:Steam-Site": "https://doh.pub/dns-query#🎮 Steam 商店/社区",
      "rule-set:PikPak-Site": "https://cloudflare-dns.com/dns-query#🛠 PIKPAK",
      "rule-set:HongKong-Site": "https://dns.alidns.com/dns-query#🇭🇰 HongKong",
      "rule-set:Tiktok-Site": "https://cloudflare-dns.com/dns-query#📺 TIKTOK",
      "rule-set:Twitch-Site": "https://cloudflare-dns.com/dns-query#🎙 Twitch",
      "rule-set:Disney-Site": "https://cloudflare-dns.com/dns-query#🎥 Disney",
      "rule-set:Japan-Site": "https://dns.alidns.com/dns-query#🇯🇵 Japan",
      "rule-set:Korea-Site": "https://dns.alidns.com/dns-query#🇰🇷 Korea",
      "rule-set:Epic-Site": "https://cloudflare-dns.com/dns-query#🎮 Epic",
      "rule-set:EpicDownload-Site":
        "https://cloudflare-dns.com/dns-query#🎮 EpicDownload",
      "rule-set:Emby-Site": "https://cloudflare-dns.com/dns-query#🖥 Emby",
      "rule-set:Porn-Site": "https://cloudflare-dns.com/dns-query#🌍 国外媒体",

      "rule-set:BanAD-Site": "https://dns.alidns.com/dns-query#🛑 全球拦截",
      "rule-set:Reject-Site": "https://dns.alidns.com/dns-query#🛑 全球拦截",
      "rule-set:BanProgramAD-Site":
        "https://dns.alidns.com/dns-query#🍃 应用净化",

      "rule-set:Google-Site": "https://cloudflare-dns.com/dns-query#🈲 Google",
      "rule-set:GoogleCN-Site": "https://dns.alidns.com/dns-query#🈲 Google",
      "rule-set:Microsoft-Site": "https://doh.pub/dns-query#Ⓜ️ Microsoft",

      "rule-set:ProxyList-Site": `https://cloudflare-dns.com/dns-query#${manualSelectGroup}`,
      "rule-set:Proxy-Site": `https://cloudflare-dns.com/dns-query#${manualSelectGroup}`,

      "rule-set:CustomDirect-Site":
        "https://dns.alidns.com/dns-query#🎯 全球直连",
      "rule-set:ChinaDomain-Site":
        "https://dns.alidns.com/dns-query#🎯 全球直连",
      // "rule-set:ChinaCompany-IP":
      //   "https://dns.alidns.com/dns-query#🎯 全球直连",
      "rule-set:LocalAreaNetwork-Site":
        "https://dns.alidns.com/dns-query#🎯 全球直连",
    },
  };

  // 3) 注入 rule-providers（符合你贴的格式）
  config["rule-providers"] = {
    // ...config["rule-providers"],
    ...buildRuleProviders(),
  };

  // 4) 提取当前订阅中的所有代理节点名称
  const allProxies = (config.proxies || []).map((p) => p.name);
  const filterProxies = (regex) =>
    allProxies.filter((name) => regex.test(name));

  // 新增：主代理出口组（DNS 里 nameserver 需要它）
  //   const mainProxyGroup = "🌏️Main Proxy";

  const groupAuto = {
    name: autoSelectGroup,
    type: "url-test",
    url: "http://www.gstatic.com/generate_204",
    interval: 300,
    tolerance: 50,
    proxies: filterProxies(/.*/),
  };
  if (groupAuto.proxies.length === 0) groupAuto.proxies = ["DIRECT"];

  const groupSelect = {
    name: manualSelectGroup,
    type: "select",
    proxies: ["DIRECT", autoSelectGroup, ...filterProxies(/.*/)],
  };

  const groupDirect = {
    name: directGroup,
    type: "select",
    proxies: ["DIRECT", manualSelectGroup, autoSelectGroup],
  };

  //   const groupMainProxy = {
  //     name: mainProxyGroup,
  //     type: "select",
  //     proxies: [directGroup, manualSelectGroup, autoSelectGroup],
  //   };

  const createSelectGroup = (name, regexStr = null) => {
    let specificProxies = [];
    if (regexStr) specificProxies = filterProxies(new RegExp(regexStr));
    return {
      name,
      type: "select",
      proxies: [
        directGroup,
        manualSelectGroup,
        autoSelectGroup,
        ...specificProxies,
      ],
    };
  };

  const groups = [
    groupSelect,
    groupAuto,

    createSelectGroup("💬 ChatGPT", "(.*)"),
    createSelectGroup("📽️ Netflix", "(.*)"),
    createSelectGroup("🇨🇳 Taiwan", "(台湾|Taiwan|TW|香港|Hong Kong|HK)"),
    createSelectGroup("🎬 BILIBILI", "(香港|Hong Kong|台湾|Taiwan|TW)"),
    createSelectGroup("🎮 Steam 登录/下载", "(.*)"),
    createSelectGroup("🎮 Steam 商店/社区", "(.*)"),
    createSelectGroup("🛠 PIKPAK", "(.*)"),
    createSelectGroup("🇭🇰 HongKong", "(香港|Hong Kong|HK)"),
    {
      name: "Ⓜ️ Microsoft",
      type: "select",
      proxies: [directGroup, manualSelectGroup, ...filterProxies(/.*/)],
    },
    createSelectGroup("🈲 Google", "(.*)"),
    createSelectGroup("📺 TIKTOK", "(.*)"),
    createSelectGroup("🎙 Twitch", "(.*)"),
    createSelectGroup("🎥 Disney", "(.*)"),
    createSelectGroup("🇯🇵 Japan", "(日本|Japan|JP)"),
    createSelectGroup("🇰🇷 Korea", "(.*)"),
    createSelectGroup("🎮 Epic", "(.*)"),
    createSelectGroup("🎮 EpicDownload", "(.*)"),
    {
      name: "🖥 Emby",
      type: "select",
      proxies: ["DIRECT", autoSelectGroup, ...filterProxies(/.*/)],
    },
    createSelectGroup("🌍 国外媒体", "(.*)"),

    groupDirect,
    { name: "🛑 全球拦截", type: "select", proxies: ["REJECT", "DIRECT"] },
    { name: "🍃 应用净化", type: "select", proxies: ["REJECT", "DIRECT"] },
    {
      name: "🐟 漏网之鱼",
      type: "select",
      proxies: [
        directGroup,
        manualSelectGroup,
        autoSelectGroup,
        ...filterProxies(/.*/),
      ],
    },
  ];

  config["proxy-groups"] = groups;

  // 5) Rules（保持你原规则逻辑，只把 RULE-SET 名称换成 XXX-Site）
  const rules = [
    // 局域网 & 直连
    "RULE-SET,LocalAreaNetwork-Site,🎯 全球直连",

    // 特定应用规则
    "RULE-SET,ChatGPT-Site,💬 ChatGPT",
    "RULE-SET,Netflix-Site,📽️ Netflix",
    "RULE-SET,Taiwan-Site,🇨🇳 Taiwan",
    "RULE-SET,BILIBILI-Site,🎬 BILIBILI",
    "RULE-SET,SteamDownload-Site,🎮 Steam 登录/下载",
    "RULE-SET,Steam-Site,🎮 Steam 商店/社区",
    "RULE-SET,PikPak-Site,🛠 PIKPAK",
    "RULE-SET,HongKong-Site,🇭🇰 HongKong",
    "RULE-SET,Tiktok-Site,📺 TIKTOK",
    "RULE-SET,Twitch-Site,🎙 Twitch",
    "RULE-SET,Disney-Site,🎥 Disney",
    "RULE-SET,Japan-Site,🇯🇵 Japan",
    "RULE-SET,Korea-Site,🇰🇷 Korea",
    "RULE-SET,Epic-Site,🎮 Epic",
    "RULE-SET,EpicDownload-Site,🎮 EpicDownload",
    "RULE-SET,Emby-Site,🖥 Emby",
    "RULE-SET,Porn-Site,🌍 国外媒体",

    // 拦截规则
    "RULE-SET,BanAD-Site,🛑 全球拦截",
    "RULE-SET,Reject-Site,🛑 全球拦截",
    "RULE-SET,BanProgramAD-Site,🍃 应用净化",

    // 谷歌 & 微软
    "RULE-SET,Google-Site,🈲 Google",
    "RULE-SET,GoogleCN-Site,🈲 Google",
    "RULE-SET,Microsoft-Site,Ⓜ️ Microsoft",

    // 节点选择规则
    "RULE-SET,ProxyList-Site,🚀 节点选择",
    "RULE-SET,Proxy-Site,🚀 节点选择",

    // 剩余直连规则
    "RULE-SET,CustomDirect-Site,🎯 全球直连",
    "RULE-SET,ChinaDomain-Site,🎯 全球直连",
    // "RULE-SET,ChinaCompany-IP,🎯 全球直连",

    // GeoIP 规则
    "GEOIP,CN,🎯 全球直连",

    // 兜底规则
    "MATCH,🐟 漏网之鱼",
  ];

  config.rules = rules;

  return config;
}
