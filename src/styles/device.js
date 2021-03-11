export const size = {
   mobile: '0px',
   tablet: '480px',
   laptop: '1024px',
   desktop: '2560px'
}

export const device = {
   mobile: `(max-width: ${size.tablet})`,
   tablet: `(min-width: ${size.mobile}) and (max-width: ${size.laptop})`,
   laptop: `(min-width: ${size.tablet}) and (max-width: ${size.desktop})`,
   desktop: `(min-width: ${size.desktop})`
}