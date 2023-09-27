function FindProxyForURL(url, host) {
    // 使用代理服务器的规则
    if (shExpMatch(host, "*.diffusenetwork.com")) {
        return "PROXY 10.0.15.97:9090"; "PROXY 10.0.15.97:9091"; "PROXY 10.0.10.217:9090"; "PROXY 10.0.10.217:9091"; "DIRECT";
    }
    // 不使用代理的规则
    return "DIRECT";
}