import createMDX from '@next/mdx'
import withPWAInit from "@ducanh2912/next-pwa"
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns:[{
      hostname: "**"
    }],
  },
  // Optionally, add any other Next.js config below
}
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: false,
  workboxOptions:{
    disableDevLogs: true
  }
});

// Wrap MDX and Next.js config with each other
export default withPWA(withMDX(nextConfig))