function FindProxyForURL(url, host) {
   if (shExpMatch(url,"*.tangdou.*")) {
     return "PROXY 192.168.5.106:9090; PROXY 192.168.5.106:9091; PROXY 192.168.5.107:9090; PROXY 192.168.5.107:9091; PROXY 192.168.5.108:9090; PROXY 192.168.5.108:9091; PROXY 192.168.5.109:9090; PROXY 192.168.5.109:9091; PROXY 192.168.5.110:9090; PROXY 192.168.5.110:9091; PROXY 192.168.5.111:9090; PROXY 192.168.5.111:9091";
   }
   return "DIRECT";
}