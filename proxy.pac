function FindProxyForURL(url, host)
{
  if (shExpMatch(host, "*.baidu.com"))
  return "PROXY 0.0.0.0:80"
  else
  return "DIRECT";
}
