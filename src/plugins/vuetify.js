// Vuetify
import 'vuetify/styles'                            // Import gaya Vuetify
import { createVuetify } from 'vuetify'            // Core Vuetify

//Register vuetify as plugin
const vuetify = createVuetify({
    theme: {
        defaultTheme: 'dark',
        themes: {
            light: {
                dark: false,                
                colors: {
                    white: '#FFFFFF',
                    black: '#000000',
                    background: '#F9FAFB',
                    surface: '#f3f4f6',
                    primary: '000000',  
                    secondary: '#111827',
                    highlight: '#2563EB',
                    'highlight-1' : '#1D4ED8',                    
                },
                variables: {
                    'grayscale': 0,
                }
            },
            dark: {
                dark: true,
                colors: {
                    white: '#FFFFFF',
                    black: '#000000',
                    background: '#111827',
                    surface: '#030712',
                    primary: '#FFFFFF',
                    secondary: '#9ca3af',
                    highlight: '#F59E0B',
                    'highlight-1': '#D97706'  
                },
                variables: {
                    'grayscale': 1,
                }
            },
        }
    }
})

export default vuetify