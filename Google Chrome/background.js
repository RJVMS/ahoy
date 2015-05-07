var config = {
    mode: "pac_script",
    pacScript: {
        data: "function FindProxyForURL(url, host) {\n" +
                "  if (host === 'thepiratebay.se')\n" +
                "    return 'PROXY 203.56.188.145:8080';\n" +
                "  return 'DIRECT';\n" +
                "}"
    }
};
chrome.proxy.settings.set({value: config, scope: 'regular'},function() {});
