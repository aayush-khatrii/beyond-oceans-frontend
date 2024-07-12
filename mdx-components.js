export function useMDXComponents(components) {
    return {
        h3: ({ children }) => (
            <h3 style={{ fontSize: '30px', fontWeight: '600', marginBottom: '30px' }}>{children}</h3>
        ),
        h4: ({ children }) => (
            <h4 style={{ fontSize: '18.5px', fontWeight: '500', marginBottom: '8px' }}>{children}</h4>
        ),
        p: ({ children }) => (
            <p style={{ color: '#696969', fontSize: '15px', fontWeight: '400', letterSpacing: '.06px'  }}>{children}</p>
        ),
        ul: ({ children }) => (
            <ul style={{ listStyleType: 'disc', marginLeft: '30px', color: '#696969', fontSize: '15px', fontWeight: '300', letterSpacing: '.06px' }}>{children}</ul>
        ),
        ...components,
    }
}