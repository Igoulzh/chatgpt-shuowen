import { createProxyMiddleware } from 'http-proxy-middleware'

export default (req, res) => {
  let target = ''
  if (req.url.startsWith('/api'))
    target = 'https://47.96.179.163:3002'

  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: path => path.replace('/api', '/'),
  })(req, res)
}
