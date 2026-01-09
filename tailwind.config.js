/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
                background: '#0a0a0a',
                surface: '#111111',
                border: '#333333',
                primary: '#ffffff',
                secondary: '#888888',
                accent: '#0070f3', // Vercel Blue
                success: '#0070f3',
                'accent-glow': 'rgba(0, 112, 243, 0.5)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'slide-up': 'slideUp 0.8s ease-out forwards',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            boxShadow: {
                'glow': '0 0 30px -10px rgba(255, 255, 255, 0.1)',
            }
        },
    },
    plugins: [],
}
