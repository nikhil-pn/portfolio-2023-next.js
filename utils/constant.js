const title = "Nikhil PN | FullStack Developer Portfolio";
const description =
  "Discover the impressive portfolio of Nikhil PN, a highly skilled FullStack Freelance Developer.";
const image =
  "https://media.licdn.com/dms/image/C5603AQHxKGdYXEeKPw/profile-displayphoto-shrink_400_400/0/1663248980565?e=1690416000&v=beta&t=HXKNCW9UEm6ET9YPpkjCMU3B4Xio4ScgP26NvnvRFzk";

export const metaDatas = {
  title: title,
  description: description,
  openGraph: {
    title,
    description,
    url: "https://nikhilpn.com",
    siteName: "Nikhil PN",
    images: [{ url: image }],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: title,
    description: description,
    card: "summary_large_image",
    images: [image],
    creator: "@NikhilETH",
  },
};