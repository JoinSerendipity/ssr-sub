// 定义规则集 (Rule Providers) 的源链接
// 严格按照你提供的列表映射
const ruleProviderSources = {
  "LocalAreaNetwork": "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/LocalAreaNetwork.yaml",
  "ChatGPT": "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/ChatGPT.yaml",
  "Netflix": "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/Netflix.yaml",
  "Taiwan": "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/Taiwan.yaml",
  "BILIBILI": "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/bilibili.yaml",
  "SteamDownload": "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/SteamDownload.yaml",
  "Steam": "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/Steam.yaml",
  "PikPak": "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/PikPak.yaml",
  "HongKong": "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/HongKong.yaml",
  "Tiktok": "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/Tiktok.yaml",
  "Twitch": "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/Twitch.yaml",
  "Disney": "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/Disney.yaml",
  "Japan": "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/Japan.yaml",
  "Korea": "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/Korea.yaml",
  "Epic": "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/Epic.yaml",
  "EpicDownload": "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/EpicDownload.yaml",
  "Emby": "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/Emby.yaml",
  "Porn": "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/Porn.yaml",
  "BanAD": "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/BanAD.yaml",
  "BanProgramAD": "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/Clash/BanProgramAD.yaml",
  "Google": "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/Google.yaml",
  "GoogleCN": "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/GoogleCN.yaml",
  "Microsoft": "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/Microsoft.yaml",
  "ProxyList": "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/ProxyList.yaml",
  "Proxy": "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/Proxy.yaml",
  "CustomDirect": "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/CustomDirect.yaml",
  "ChinaDomain": "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/ChinaDomain.yaml",
  "ChinaCompanyIp": "https://raw.githubusercontent.com/JoinSerendipity/ssr-sub/refs/heads/master/Clash/RuleSetYaml/ChinaCompanyIp.yaml"
};

function main(config) {
  // 1. 生成 Rule Providers 配置
  const ruleProviders = {};
  for (const [key, url] of Object.entries(ruleProviderSources)) {
    ruleProviders[key] = {
      type: "http",
      behavior: "classical",
      url: url,
      path: `./rules/${key}.yaml`,
      interval: 86400,
    };
  }
  
  // 注入 Rule Providers
  config["rule-providers"] = {
    ...config["rule-providers"],
    ...ruleProviders
  };

  // 2. 提取当前订阅中的所有代理节点名称
  // 注意：Clash Verge 在运行脚本时，proxies 列表通常包含在 config.proxies 中
  const allProxies = (config.proxies || []).map(p => p.name);
  
  // 辅助函数：根据正则筛选节点
  const filterProxies = (regex) => {
    return allProxies.filter(name => regex.test(name));
  };

  // 3. 定义策略组 (Proxy Groups)
  // 严格按照你提供的 custom_proxy_group 逻辑构建
  
  const manualSelectGroup = "🚀 节点选择";
  const autoSelectGroup = "♻️ 自动选择";
  const directGroup = "🎯 全球直连";

  // 基础组：自动选择 (url-test)
  const groupAuto = {
    name: autoSelectGroup,
    type: "url-test",
    url: "http://www.gstatic.com/generate_204",
    interval: 300,
    tolerance: 50,
    proxies: filterProxies(/.*/) // 包含所有节点
  };
  if (groupAuto.proxies.length === 0) groupAuto.proxies = ["DIRECT"]; // 防止空组报错

  // 基础组：节点选择 (select) - 包含 直连、自动选择、所有节点
  const groupSelect = {
    name: manualSelectGroup,
    type: "select",
    proxies: ["DIRECT", autoSelectGroup, ...filterProxies(/.*/)]
  };

  // 基础组：全球直连 (select)
  const groupDirect = {
    name: directGroup,
    type: "select",
    proxies: ["DIRECT", manualSelectGroup, autoSelectGroup]
  };

  // 通用功能组生成器
  const createSelectGroup = (name, regexStr = null) => {
    let specificProxies = [];
    if (regexStr) {
      specificProxies = filterProxies(new RegExp(regexStr));
    }
    return {
      name: name,
      type: "select",
      proxies: [directGroup, manualSelectGroup, autoSelectGroup, ...specificProxies]
    };
  };

  // 定义所有功能组
  const groups = [
    groupSelect, // 🚀 节点选择
    groupAuto,   // ♻️ 自动选择
    createSelectGroup("💬 ChatGPT", "(.*)"),
    createSelectGroup("📽️ Netflix", "(.*)"),
    createSelectGroup("🇨🇳 Taiwan", "(台湾|Taiwan)"),
    createSelectGroup("🎬 BILIBILI", "(香港|Hong Kong|台湾|Taiwan)"),
    createSelectGroup("🎮 Steam 登录/下载", "(.*)"),
    createSelectGroup("🎮 Steam 商店/社区", "(.*)"),
    createSelectGroup("🛠 PIKPAK", "(.*)"),
    createSelectGroup("🇭🇰 HongKong", "(香港|Hong Kong)"),
    {
      name: "Ⓜ️ Microsoft", // 特殊：微软分流只包含直连和节点选择(根据你的规则)
      type: "select",
      proxies: [directGroup, manualSelectGroup, ...filterProxies(/.*/)]
    },
    createSelectGroup("🈲 Google", "(.*)"),
    createSelectGroup("📺 TIKTOK", "(.*)"),
    createSelectGroup("🎙 Twitch", "(.*)"),
    createSelectGroup("🎥 Disney", "(.*)"),
    createSelectGroup("🇯🇵 Japan", "(日本|Japan)"),
    createSelectGroup("🇰🇷 Korea", "(.*)"), // 注意：你提供的规则里 Korea 没有正则，默认全部
    createSelectGroup("🎮 Epic", "(.*)"),
    createSelectGroup("🎮 EpicDownload", "(.*)"),
    {
      name: "🖥 Emby",
      type: "select",
      proxies: ["DIRECT", autoSelectGroup, ...filterProxies(/.*/)]
    },
    createSelectGroup("🌍 国外媒体", "(.*)"),
    groupDirect, // 🎯 全球直连
    {
      name: "🛑 全球拦截",
      type: "select",
      proxies: ["REJECT", "DIRECT"]
    },
    {
      name: "🍃 应用净化",
      type: "select",
      proxies: ["REJECT", "DIRECT"]
    },
    {
      name: "🐟 漏网之鱼",
      type: "select",
      proxies: [directGroup, manualSelectGroup, autoSelectGroup, ...filterProxies(/.*/)]
    }
  ];

  // 覆盖原有的 proxy-groups
  config["proxy-groups"] = groups;

  // 4. 定义规则 (Rules)
  // 必须注意顺序，越靠前优先级越高
  const rules = [
    // 局域网 & 直连
    "RULE-SET,LocalAreaNetwork,🎯 全球直连",
    
    // 特定应用规则
    "RULE-SET,ChatGPT,💬 ChatGPT",
    "RULE-SET,Netflix,📽️ Netflix",
    "RULE-SET,Taiwan,🇨🇳 Taiwan",
    "RULE-SET,BILIBILI,🎬 BILIBILI",
    "RULE-SET,SteamDownload,🎮 Steam 登录/下载",
    "RULE-SET,Steam,🎮 Steam 商店/社区",
    "RULE-SET,PikPak,🛠 PIKPAK",
    "RULE-SET,HongKong,🇭🇰 HongKong",
    "RULE-SET,Tiktok,📺 TIKTOK",
    "RULE-SET,Twitch,🎙 Twitch",
    "RULE-SET,Disney,🎥 Disney",
    "RULE-SET,Japan,🇯🇵 Japan",
    "RULE-SET,Korea,🇰🇷 Korea",
    "RULE-SET,Epic,🎮 Epic",
    "RULE-SET,EpicDownload,🎮 EpicDownload",
    "RULE-SET,Emby,🖥 Emby",
    "RULE-SET,Porn,🌍 国外媒体",
    
    // 拦截规则
    "RULE-SET,BanAD,🛑 全球拦截",
    "RULE-SET,BanProgramAD,🍃 应用净化",
    
    // 谷歌 & 微软
    "RULE-SET,Google,🈲 Google",
    "RULE-SET,GoogleCN,🎯 全球直连", // Google CN 直连
    "RULE-SET,Microsoft,Ⓜ️ Microsoft",
    
    // 节点选择规则 (Proxy List)
    "RULE-SET,ProxyList,🚀 节点选择",
    "RULE-SET,Proxy,🚀 节点选择",
    
    // 剩余直连规则
    "RULE-SET,CustomDirect,🎯 全球直连",
    "RULE-SET,ChinaDomain,🎯 全球直连",
    "RULE-SET,ChinaCompanyIp,🎯 全球直连",
    
    // GeoIP 规则
    "GEOIP,CN,🎯 全球直连",
    
    // 兜底规则
    "MATCH,🐟 漏网之鱼"
  ];

  // 覆盖原有的 rules
  config["rules"] = rules;

  return config;
}