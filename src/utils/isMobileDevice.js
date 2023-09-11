import UAParser from 'ua-parser-js'

export const isMobileDevice = (context) => {
  const useragent = context.req?.headers['user-agent']
  const parser = new UAParser(useragent)
  const device = parser.getDevice()
  return device.type === 'mobile'
}